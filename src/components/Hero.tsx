import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, ContactShadows, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'motion/react';
import SplitText from './SplitText';

function MorphingShape({ position, color, speed, distort, radius }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed;
      
      // Scale and distort more when the user hovers over it
      const targetScale = hovered ? 1.15 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={speed * 2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh 
        ref={meshRef} 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[radius, 64, 64]} />
        <MeshDistortMaterial 
          color={color} 
          envMapIntensity={1} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.8} 
          roughness={0.1} 
          distort={hovered ? distort * 2 : distort} // Increase distortion on hover
          speed={hovered ? speed * 6 : speed * 3} // Faster wobble on hover
        />
      </mesh>
    </Float>
  );
}

function AbstractRings({ position, baseScale = 1 }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if(meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;

      const targetScale = hovered ? 1.8 * baseScale : 1.5 * baseScale;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={1} rotationIntensity={2} floatIntensity={2}>
      <mesh 
        ref={meshRef} 
        position={position} 
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <torusKnotGeometry args={[1, 0.25, 128, 32]} />
        <meshStandardMaterial 
          color="#111111" 
          metalness={0.9} 
          roughness={0.1} 
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  )
}

function CameraRig() {
  useFrame((state) => {
    state.camera.position.lerp(
      new THREE.Vector3(state.pointer.x * 2, state.pointer.y * 2, 8),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function Scene() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;

  return (
    <>
      <CameraRig />
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={2} color="#E30613" />
      <spotLight position={[0, 5, 10]} angle={0.4} penumbra={1} intensity={3} color="#E30613" />
      
      {/* Dynamic Liquid Energy Blob */}
      <MorphingShape 
        position={isMobile ? [-1.8, 2.5, -2] : [-5, 1, -2]} 
        color="#E30613" 
        speed={0.5} 
        distort={0.4} 
        radius={isMobile ? 1.0 : 1.8} 
      />
      
      {/* Architectural Concept Rings */}
      <AbstractRings 
        position={isMobile ? [1.5, -3, -4] : [5, -2, -4]} 
        baseScale={isMobile ? 0.6 : 1}
      />
      
      {/* Secondary Accent Blob */}
      <MorphingShape 
        position={isMobile ? [1.5, 4.5, -5] : [2, 4, -5]} 
        color="#ffffff" 
        speed={0.7} 
        distort={0.3} 
        radius={isMobile ? 0.6 : 0.8} 
      />

      <Environment preset="city" />
      <ContactShadows position={[0, -5, 0]} opacity={0.3} scale={30} blur={2} far={6} />
    </>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-50 via-white to-white overflow-hidden flex items-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-100">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Scene />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-8xl font-heading font-black text-omnia-black leading-[1.05] md:mb-6 mb-4 drop-shadow-sm"
          >
            CREATING <span className="text-transparent bg-clip-text bg-gradient-to-r from-omnia-red to-red-500">MOMENTS.</span><br />
            CRAFTING BRANDS.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10"
          >
            <SplitText
              text="Innovative thinking for brands built for tomorrow. We engineer unforgettable experiences and performance-driven marketing."
              className="text-base md:text-xl text-gray-600 font-sans max-w-2xl font-medium"
              delay={30}
              duration={1}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs uppercase tracking-widest text-gray-400 font-heading">Scroll</span>
        <div className="w-[1px] h-12 bg-gray-200 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-omnia-red"
          />
        </div>
      </motion.div>
    </section>
  );
}
