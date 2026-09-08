# EIMAS — STEP 02.3

## Status

PATCH READY — not pushed by this session.

## Objective

Evolve the procedural intelligence field into a modular 3D scene system while preserving the existing public `IntelligenceScene` boundary.

## Changes

- Extract particle rendering into `ParticleField`.
- Add `SignalNetwork` for progressive relationship visualization.
- Extract the central `IntelligenceCore`.
- Keep `IntelligenceScene` as the single public 3D boundary.
- Preserve scene state, reduced motion, density control and WebGL fallback.
- Add no runtime dependencies.

## Visual progression

MARKET → SIGNAL → PATTERN → OPPORTUNITY → INTELLIGENCE

The network becomes progressively more visible as the intelligence state becomes more concentrated.

## Verification gate

After applying the patch in the repository:

npm install
npm run typecheck
npm run build

Then browser-test Chromium, Safari, Firefox, mobile and reduced-motion behavior.

The A&O 3D loop is:
CONCEPT → ASSET → OPTIMIZE → IMPLEMENT → FALLBACK → MOBILE → PERFORMANCE → ACCESSIBILITY.
