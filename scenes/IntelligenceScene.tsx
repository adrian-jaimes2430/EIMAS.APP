"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import type { SceneState } from "@/types/story";

const cfg: Record<SceneState, { spread: number; intensity: number; core: number }> = {
  market: { spread: 3.5, intensity: 0.25, core: 0.55 },
  signal: { spread: 3.1, intensity: 0.45, core: 0.75 },
  pattern: { spread: 2.7, intensity: 0.65, core: 0.95 },
  opportunity: { spread: 2.2, intensity: 0.85, core: 1.2 },
  intelligence: { spread: 1.8, intensity: 1, core: 1.45 },
};

function Field({ state, reduced, density }: {
  state: SceneState;
  reduced: boolean;
  density: number;
}) {
  const ref = useRef<THREE.Points>(null);
  const count = Math.max(90, Math.round(720 * (density / 100)));

  const pos = useMemo(() => {
    const a = new Float32Array(count * 3);
    let seed = 9187;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    for (let i = 0; i < count; i += 1) {
      const radius = Math.pow(random(), 0.72) * 3.7;
      const angle = random() * Math.PI * 2;
      a[i * 3] = Math.cos(angle) * radius;
      a[i * 3 + 1] = Math.sin(angle) * radius * 0.7;
      a[i * 3 + 2] = (random() - 0.5) * 1.8;
    }

    return a;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current && !reduced) {
      ref.current.rotation.z += delta * 0.015 * cfg[state].intensity;
      ref.current.rotation.y += delta * 0.008;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[pos, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#72a7ff"
        size={0.02 + cfg[state].intensity * 0.012}
        transparent
        opacity={0.35 + cfg[state].intensity * 0.2}
      />
    </points>
  );
}

function Core({ state, reduced }: { state: SceneState; reduced: boolean }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current && !reduced) {
      ref.current.rotation.y += 0.003;
      ref.current.scale.setScalar(
        cfg[state].core * (1 + Math.sin(clock.elapsedTime * 1.4) * 0.03),
      );
    }
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.38, 2]} />
      <meshBasicMaterial color="#dbe8ff" wireframe transparent opacity={0.7} />
    </mesh>
  );
}

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
      <group scale={cfg[state].spread / 3.2}>
        <Field state={state} reduced={reduced} density={density} />
        <Core state={state} reduced={reduced} />
      </group>
    </Canvas>
  );
}
