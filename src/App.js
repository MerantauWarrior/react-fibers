import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { Html, useProgress } from '@react-three/drei'
import './App.css';

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./wood-table-3d-model/wood_table_001_4k.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={1} />
    </>
  );
};

const ModelEnot = () => {
  const gltf = useLoader(GLTFLoader, "./Enotproject/Enotproject.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={1} />
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Model />
          <OrbitControls />
          <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
          <Environment files="./widen-1680-noupsize.hdr" background />
        </Suspense>
      </Canvas>
      <Canvas>
        <Suspense fallback={<Loader />}>
          <ModelEnot />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
