import './style/App.css';
import { PresentationControls, Stage, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import carData from './carData';

function Model({ modelPath, ...props }) {
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    scene.rotation.set(0, Math.PI, 0);
    scene.position.set(0, 0, 0);
  }, [modelPath, scene]);

  return <primitive object={scene} {...props} />;
}

function App() {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  const handleNextModel = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex + 1) % carData.length);
  };

  const handlePreviousModel = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex - 1 + carData.length) % carData.length);
  };

  return (
    <div className="container">
      {/* 3D Model Section - Fullscreen */}
      <div className="model-viewer">
        <button onClick={handlePreviousModel} className="button button-left">
          &#8592; Previous
        </button>
        <button onClick={handleNextModel} className="button button-right">
          Next &#8594;
        </button>

        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45, position: [0, 1, 5] }}>
          <color attach="background" args={['#101212']} />
          <PresentationControls speed={2} global zoom={0.5} polar={[0, Math.PI / 2]}>
            <Stage environment={null} contactShadow={false}>
              <Model key={currentModelIndex} modelPath={carData[currentModelIndex].path} scale={0.01} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>

      {/* Car Information Section */}
      <div className="car-details">
        <h2>{carData[currentModelIndex].name}</h2>
        <p>{carData[currentModelIndex].description}</p>

        {/* Four Boxes for Additional Info */}
        <div className="info-boxes">
          <div className="info-box">
            <h3>Rarity</h3>
            <p>{carData[currentModelIndex].rarity}</p>
          </div>
          <div className="info-box">
            <h3>Factory</h3>
            <p>{carData[currentModelIndex].factory}</p>
          </div>
          <div className="info-box">
            <h3>Make</h3>
            <p>{carData[currentModelIndex].make}</p>
          </div>
          <div className="info-box">
            <h3>Price</h3>
            <p>{carData[currentModelIndex].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
