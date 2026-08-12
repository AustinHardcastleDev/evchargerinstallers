import Image from 'next/image'

export function HeroGeneratorPhoto() {
  return (
    <figure className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-panel)]">
      <Image
        src="/images/ev/level2-garage-hero.jpg"
        alt="Wall-mounted Level 2 EV charger installed in a residential garage"
        width={1600}
        height={1066}
        priority
        sizes="(max-width: 768px) 100vw, 45vw"
        className="aspect-[4/3] h-full w-full object-cover"
      />
    </figure>
  )
}
