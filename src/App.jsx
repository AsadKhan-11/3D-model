import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

import "./App.css";

function Model() {
  const { scene, materials } = useGLTF("/sunglasses.glb");

  useEffect(() => {
    if (materials) {
      materials["Lens"].color.set("yellow");
      materials["Frame"].color.set("pink");

      console.log(materials);
    }
    console.log(materials);
  }, [materials]);

  return <primitive object={scene} scale={1} />;
}

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "grey",
        overflow: "hidden",
      }}
    >
      <Canvas>
        <ambientLight intensity={0.4} />
        <OrbitControls />
        <Model />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/sunglasses.glb");

export default App;
