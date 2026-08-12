# Baseline test notes (Task 1)

Recorded 2026-08-11 after empty-data bootstrap.

- Test files: 2 failed | 3 passed
- Tests: 2 failed | 12 passed
- Failures (expected until Tasks 7–10):
  1. `lib/directory-tags.test.ts` — scopes service tag to EV-scoped review tags; expects >500 matches with empty installers.json
  2. `lib/metro-editorial.test.ts` — prefers Flash intros; expects metro-editorial.json Flash keys with empty data
- Package name still `evchargerinstallerlist` pending Task 2/10 rename
