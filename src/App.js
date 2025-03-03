import './style/App.css';
import { PresentationControls, Stage, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import carData from './carData'; // Import the car data

function Model({ modelPath, ...props }) {
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    scene.rotation.set(0, 0, 0); // Reset rotation when model changes
    console.log(`Loaded model: ${modelPath}, Rotation:`, scene.rotation);
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

  useEffect(() => {
    const textElement = document.createElement("div");
    textElement.id = "topText";
    textElement.textContent = "3D Car Showcase!";
    document.body.appendChild(textElement);

    return () => {
      document.body.removeChild(textElement);
    };
  }, []);

  useEffect(() => {
    document.querySelector('canvas').scrollIntoView({ behavior: 'smooth' });
  }, [currentModelIndex]);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* Car Name and Description */}
      <div className="car-info">
        <h2>{carData[currentModelIndex].name}</h2>
        <p>{carData[currentModelIndex].description}</p>
      </div>

      <button onClick={handlePreviousModel} className="button button-left">
        &#8592; Previous
      </button>
      <button onClick={handleNextModel} className="button button-right">
        Next &#8594;
      </button>
      
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45, position: [0, 0, 5] }} style={{ position: 'absolute' }}>
        <color attach="background" args={['#101212']} />
        <PresentationControls key={currentModelIndex} speed={2} global zoom={0.5}>
          <Stage environment={null} contactShadow={false}>
            <Model key={currentModelIndex} modelPath={carData[currentModelIndex].path} scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;
