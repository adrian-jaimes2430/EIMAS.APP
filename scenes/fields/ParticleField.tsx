import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import type { SceneState } from "@/types/story";

const FIELD_CONFIG: Record<SceneState, { intensity: number }> = {
  market: { intensity: 0.25 },
  signal: { intensity: 0.45 },
  pattern: { intensity: 0.65 },
  opportunity: { intensity: 0.85 },
  intelligence: { intensity: 1 },
};

export function ParticleField({
  state,
  reduced,
  density,
}: {
  state: SceneState;
  reduced: boolean;
  density: number;
}) {
  const ref = useRef<THREE.Points>(null);
  const count = Math.max(90, Math.round(720 * (density / 100)));

  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    let seed = 9187;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    for (let i = 0; i < count; i += 1) {
      const radius = Math.pow(random(), 0.72) * 3.7;
      const angle = random() * Math.PI * 2;
      values[i * 3] = Math.cos(angle) * radius;
      values[i * 3 + 1] = Math.sin(angle) * radius * 0.7;
      values[i * 3 + 2] = (random() - 0.5) * 1.8;
    }
    return values;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current || reduced) return;
    ref.current.rotation.z += delta * 0.015 * FIELD_CONFIG[state].intensity;
    ref.current.rotation.y += delta * 0.008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#72a7ff"
        size={0.02 + FIELD_CONFIG[state].intensity * 0.012}
        transparent
        opacity={0.35 + FIELD_CONFIG[state].intensity * 0.2}
        depthWrite={false}
      />
    </points>
  );
}
