#!/usr/bin/env node
/**
 * Generate state editorial via Gemini Flash for EVChargerInstallerList.
 *
 * Usage:
 *   node scripts/generate-state-editorial.mjs --state tn --state tx --state ca
 *   node scripts/generate-state-editorial.mjs --limit 5 --force
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')
const OUT_PATH = path.join(repoRoot, 'lib/data/state-editorial.json')
const STATES_PATH = path.join(repoRoot, 'lib/data/states.json')
const RESEARCH_PATH = path.join(
  repoRoot,
  'docs/research/10-state-and-regional-variation.md',
)
const ENV_CANDIDATES = [
  path.join(repoRoot, '.env.local'),
  path.join(process.env.HOME || '', 'ev-charger-installer-scrape/.env'),
]

const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash'
if (!/^gemini-.*flash/i.test(MODEL)) {
  console.error(`Refusing non-Flash model: ${MODEL}`)
  process.exit(1)
}

function loadEnv() {
  for (const envPath of ENV_CANDIDATES) {
    if (!fs.existsSync(envPath)) continue
    for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
      const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
      if (!m) continue
      if (!process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
    }
  }
}

const SYSTEM = `You write state-level buyer notes for EVChargerInstallerList, an independent directory of residential Level 2 EV charger installers.

Voice: practical, plainspoken, buyer-first. Website signal is a starting filter, not an endorsement.

Rules:
- Use ONLY facts in the input JSON. Do not invent statutes, rebate dollars, NEC editions, wages, or outage numbers.
- Never claim we verified licenses or endorse installers.
- Never use em dashes.
- Avoid: trusted, top-rated, premier, vetted, leading, seamless, comprehensive.
- Hedge credentials; tell buyers to confirm licensing, insurance, panel capacity, and recent Level 2 work.

Return JSON with exactly:
marketOverview (2-4 sentences)
homeInstallContext (2-3 sentences)
buyerNote (2-3 sentences)
metaDescription (max 155 characters)
`

function parseArgs(argv) {
  const out = { states: [], force: false, limit: Infinity, dryRun: false }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--state') out.states.push(argv[++i])
    else if (a === '--force') out.force = true
    else if (a === '--limit') out.limit = Number(argv[++i])
    else if (a === '--dry-run') out.dryRun = true
  }
  return out
}

function buildPayload(slug, stateMeta, researchText) {
  return {
    state: {
      slug,
      name: stateMeta.name,
      abbr: stateMeta.abbr,
    },
    directorySignal: {
      totalListings: stateMeta.totalListings || 0,
      explicitCount: stateMeta.explicitCount || 0,
      highCount: stateMeta.highCount || 0,
      mediumCount: stateMeta.mediumCount || 0,
      topCities: stateMeta.topCities || [],
    },
    landscape: {
      researchExcerpt: researchText.slice(0, 4000),
      verifiedAsOf: '2026-08-11',
      sources: [
        'https://afdc.energy.gov/fuels/electricity-charging-home',
        'docs/research/10-state-and-regional-variation.md',
      ],
    },
  }
}

function validate(output, payload) {
  for (const key of [
    'marketOverview',
    'homeInstallContext',
    'buyerNote',
    'metaDescription',
  ]) {
    if (!output[key] || typeof output[key] !== 'string') {
      throw new Error(`missing ${key}`)
    }
    if (output[key].includes('—')) throw new Error('em dash')
  }
  if (output.metaDescription.length > 155) {
    output.metaDescription = `${output.metaDescription.slice(0, 152).trim()}…`
  }
  for (const bad of ['trusted', 'top-rated', 'premier', 'vetted', 'leading']) {
    const blob = `${output.marketOverview} ${output.homeInstallContext} ${output.buyerNote}`.toLowerCase()
    if (blob.includes(bad)) throw new Error(`banned word ${bad}`)
  }
  if (!output.marketOverview.includes(payload.state.name)) {
    // soft: prepend if model omitted name
    output.marketOverview = `${payload.state.name}: ${output.marketOverview}`
  }
  return output
}

async function callGemini(payload) {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) throw new Error('GEMINI_API_KEY missing')
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal: AbortSignal.timeout(120000),
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM }] },
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `Write state editorial for ${payload.state.name}. Input:\n${JSON.stringify(payload)}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.55,
        responseMimeType: 'application/json',
        responseSchema: {
          type: 'OBJECT',
          properties: {
            marketOverview: { type: 'STRING' },
            homeInstallContext: { type: 'STRING' },
            buyerNote: { type: 'STRING' },
            metaDescription: { type: 'STRING' },
          },
          required: [
            'marketOverview',
            'homeInstallContext',
            'buyerNote',
            'metaDescription',
          ],
        },
      },
    }),
  })
  if (!response.ok) {
    throw new Error(`Gemini ${response.status}: ${(await response.text()).slice(0, 400)}`)
  }
  const data = await response.json()
  const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text).join('')
  if (!text) throw new Error('empty Gemini response')
  return validate(JSON.parse(text), payload)
}

async function main() {
  loadEnv()
  const args = parseArgs(process.argv.slice(2))
  const states = JSON.parse(fs.readFileSync(STATES_PATH, 'utf8'))
  const research = fs.existsSync(RESEARCH_PATH)
    ? fs.readFileSync(RESEARCH_PATH, 'utf8')
    : ''
  let store = {}
  if (fs.existsSync(OUT_PATH)) {
    try {
      store = JSON.parse(fs.readFileSync(OUT_PATH, 'utf8')) || {}
    } catch {
      store = {}
    }
  }

  let targets = args.states.length
    ? args.states
    : Object.keys(states).filter((s) => (states[s].totalListings || 0) > 0)
  targets = targets.filter((slug) => {
    if (!states[slug]) return false
    if (args.force) return true
    return !store[slug]?.marketOverview
  })
  targets = targets.slice(0, args.limit)

  console.log(`Generating ${targets.length} state editorials with ${MODEL}`)
  for (const slug of targets) {
    const payload = buildPayload(slug, states[slug], research)
    if (args.dryRun) {
      console.log('dry-run', slug, payload.directorySignal)
      continue
    }
    try {
      const copy = await callGemini(payload)
      store[slug] = {
        ...copy,
        // compatibility with older StateEditorial consumers
        costContext: copy.homeInstallContext,
        model: MODEL,
        generatedAt: new Date().toISOString(),
        source: 'flash',
        verifiedAsOf: '2026-08-11',
      }
      fs.writeFileSync(OUT_PATH, `${JSON.stringify(store, null, 2)}\n`)
      console.log(`ok ${slug}`)
    } catch (err) {
      console.error(`fail ${slug}:`, err.message || err)
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
