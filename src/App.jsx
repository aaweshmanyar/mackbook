import React from "react";
import { Canvas } from "@react-three/fiber";
import "./Style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import Maccontainer from "./Maccontainer.jsx";
import Navbar from "./Navbar.jsx";

const App = () => {
  return (
    <div className="w-full h-screen  ">
      <Navbar/>
      
      <Canvas camera={{ fov: 20, position: [0, -2, 150] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        {/* <OrbitControls /> */}
        <Environment preset="city" />
        <ScrollControls pages={3}>
          <Maccontainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
