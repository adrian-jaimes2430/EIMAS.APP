# Local Control Room

Purpose: a safe inspection surface before deployment.

Controls to implement:
- Scene enabled/disabled
- Reduced motion
- WebGL fallback
- DPR cap
- Auto-rotate
- Storytelling timeline enabled/disabled
- MAGI mock enabled/disabled
- Artificial latency
- Simulated API failure
- Simulated model failure
- Clear logs
- FPS/performance readout
- Viewport presets: mobile/tablet/desktop
- Feature flags

Every change should be reversible and local-only until explicitly promoted.

Failure workflow:
SYMPTOM → REPRODUCE → EVIDENCE → HYPOTHESIS → SMALLEST FIX → TEST → VERIFY → REGRESSION CHECK
