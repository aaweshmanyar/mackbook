import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { LineGeometry } from "three/examples/jsm/Addons.js";

const Maccontainer = () => {
  let model = useGLTF("/mac.glb");
  let tex = useTexture('/red.jpg');
  console.log("This is image" ,tex);
  let meshes = {};
  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });

  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  meshes.matte.material.map = tex;
  meshes.matte.material.emissiveIntensity = 0;
  meshes.matte.material.metalness = 0;
  meshes.matte.material.roughness = 1;


  let data = useScroll();

  useFrame((state, delta) => {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90)
  });

  return <primitive object={model.scene} />;
};

export default Maccontainer;
