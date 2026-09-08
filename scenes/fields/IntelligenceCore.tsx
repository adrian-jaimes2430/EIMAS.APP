import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import type { SceneState } from "@/types/story";

const CORE_SCALE: Record<SceneState, number> = {
  market: 0.55,
  signal: 0.75,
  pattern: 0.95,
  opportunity: 1.2,
  intelligence: 1.45,
};

export function IntelligenceCore({
  state,
  reduced,
}: {
  state: SceneState;
  reduced: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current || reduced) return;
    ref.current.rotation.y += 0.003;
    ref.current.scale.setScalar(
      CORE_SCALE[state] * (1 + Math.sin(clock.elapsedTime * 1.4) * 0.03),
    );
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.38, 2]} />
      <meshBasicMaterial color="#dbe8ff" wireframe transparent opacity={0.7} />
    </mesh>
  );
}
