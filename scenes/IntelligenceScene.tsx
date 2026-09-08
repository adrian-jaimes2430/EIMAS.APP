"use client";

import { Canvas } from "@react-three/fiber";
import { ParticleField } from "@/scenes/fields/ParticleField";
import { SignalNetwork } from "@/scenes/fields/SignalNetwork";
import { IntelligenceCore } from "@/scenes/fields/IntelligenceCore";
import type { SceneState } from "@/types/story";

const FIELD_CONFIG: Record<SceneState, { spread: number }> = {
  market: { spread: 3.5 },
  signal: { spread: 3.1 },
  pattern: { spread: 2.7 },
  opportunity: { spread: 2.2 },
  intelligence: { spread: 1.8 },
};

export function IntelligenceScene({
  state,
  reduced,
  enabled = true,
  density = 100,
}: {
  state: SceneState;
  reduced: boolean;
  enabled?: boolean;
  density?: number;
}) {
  if (!enabled) return null;

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.8], fov: 42 }}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      fallback={<div className="scene-fallback">3D unavailable</div>}
      aria-hidden="true"
    >
      <color attach="background" args={["#02050d"]} />
      <fog attach="fog" args={["#02050d", 4, 10]} />
      <group scale={FIELD_CONFIG[state].spread / 3.2}>
        <ParticleField state={state} reduced={reduced} density={density} />
        <SignalNetwork state={state} />
        <IntelligenceCore state={state} reduced={reduced} />
      </group>
    </Canvas>
  );
}
