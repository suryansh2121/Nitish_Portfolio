// components/StarsBackground.jsx
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarsBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars radius={100} depth={50} count={3000} factor={3} fade speed={1} />
      </Canvas>
    </div>
  );
}
