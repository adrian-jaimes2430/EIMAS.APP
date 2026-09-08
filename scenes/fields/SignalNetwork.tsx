import { useMemo } from "react";
import type { SceneState } from "@/types/story";

const CONFIG: Record<SceneState, { spread: number; intensity: number }> = {
  market: { spread: 3.5, intensity: 0 },
  signal: { spread: 3.1, intensity: 0.2 },
  pattern: { spread: 2.7, intensity: 0.48 },
  opportunity: { spread: 2.2, intensity: 0.72 },
  intelligence: { spread: 1.8, intensity: 0.92 },
};

export function SignalNetwork({ state }: { state: SceneState }) {
  const { positions, opacity } = useMemo(() => {
    const config = CONFIG[state];
    const nodes = 14;
    const values = new Float32Array((nodes - 1) * 2 * 3);

    for (let i = 0; i < nodes - 1; i += 1) {
      const a = (i / nodes) * Math.PI * 2;
      const b = ((i + 1) / nodes) * Math.PI * 2;
      const radiusA = config.spread * (0.5 + (i % 3) * 0.08);
      const radiusB = config.spread * (0.5 + ((i + 1) % 3) * 0.08);
      const offset = i * 6;

      values[offset] = Math.cos(a) * radiusA;
      values[offset + 1] = Math.sin(a) * radiusA * 0.58;
      values[offset + 2] = -0.35 + (i % 4) * 0.18;
      values[offset + 3] = Math.cos(b) * radiusB;
      values[offset + 4] = Math.sin(b) * radiusB * 0.58;
      values[offset + 5] = -0.35 + ((i + 1) % 4) * 0.18;
    }

    return { positions: values, opacity: config.intensity };
  }, [state]);

  if (opacity <= 0) return null;

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#7c8fff"
        transparent
        opacity={opacity * 0.28}
        depthWrite={false}
      />
    </lineSegments>
  );
}
