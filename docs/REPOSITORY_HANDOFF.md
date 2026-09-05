# EIMAS.APP — Repository Handoff

Status: REVIEWED / READY FOR INITIAL GITHUB IMPORT

This archive is the cleaned repository candidate assembled from the uploaded EIMAS files.

## Review decisions

1. Keep EIMAS proprietary; do not add an open-source license.
2. Preserve `README.md`, `LICENSE`, `SECURITY.md`, `CONTRIBUTING.md`, and `THIRD-PARTY-NOTICES.md`.
3. Configure the `@/*` TypeScript alias because application imports depend on it.
4. Remove the obsolete `Hero3D.tsx` because it imported `@react-three/drei`, which was not declared and was not used by the application.
5. Keep the R3F scene implementation as the active 3D boundary.
6. Wire Control Room particle density to the procedural renderer rather than leaving it as a cosmetic control.
7. Keep simulated market values explicitly labeled.
8. Do not claim dependency install, typecheck, build, browser QA, or deployment until those steps are actually executed.

## Important limitation

A package-lock file is intentionally not fabricated. The uploaded archive did not contain one, and package installation could not be completed in this runtime. Generate the lockfile in the connected development environment with the project's package manager before relying on reproducible CI installs.
