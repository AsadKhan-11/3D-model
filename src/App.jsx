import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Model } from "./Model";

import "./App.css";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "grey",
      }}
    >
      <Canvas camera={{ position: [0, 0, 0.4] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model framecolor="blue" />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}

export default App;
