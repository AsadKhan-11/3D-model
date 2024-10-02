import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/sunglasses.glb");
  useEffect(() => {
    materials["Lens"].color.set("Pink");
    materials["Frame"].color.set("grey");
    materials["Frame"].roughness = 0.5;
    materials["Frame"].metalness = 0.5;
    console.log(materials);
  }, [materials, props.framecolor]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame.geometry}
        material={materials.Frame}
        position={[-0.019, -0.021, -0.037]}
        rotation={[-0.086, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrontCir.geometry}
          material={materials.Metal2}
          position={[0.002, -0.001, -0.001]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Inner.geometry}
          material={materials.Metal2}
          position={[0, 0, -0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Joint.geometry}
          material={materials.Metal2}
          position={[0, -0.002, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lens.geometry}
          material={materials.Lens}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SideCir.geometry}
          material={materials.Metal2}
          position={[0.011, -0.001, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sides.geometry}
          material={materials.Frame}
          position={[0, 0, -0.008]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/sunglasses.glb");
