import { motion } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import React, { Suspense, useRef, useState, Component, ErrorInfo, ReactNode } from 'react';
import * as THREE from 'three';

interface ErrorBoundaryProps {
  children?: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("WebGL error caught by boundary:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <>{this.props.fallback}</>;
    }
    return <>{this.props.children}</>;
  }
}

function InteractiveMesh({ children, position, rotation = [0, 0, 0], scaleOffset = 1.2 }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Scale on hover
    const targetScale = hovered ? scaleOffset : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

    // Spin on click
    if (clicked) {
      meshRef.current.rotation.y += delta * 10;
      meshRef.current.rotation.x += delta * 5;
      if (meshRef.current.rotation.y > Math.PI * 2) {
        setClicked(false);
      }
    } else {
      // Return to original rotation
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, rotation[0], 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, rotation[1], 0.05);
      meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, rotation[2], 0.05);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
      onClick={() => setClicked(true)}
    >
      {children}
    </mesh>
  );
}

function Scene() {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <color attach="background" args={["#ffffff"]} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 10, 5]} intensity={3} />
      <directionalLight position={[-10, 10, -5]} intensity={1.5} />
      <pointLight position={[-5, 5, 5]} intensity={2} />
      <pointLight position={[5, -5, 5]} intensity={2} />
      
      <Suspense fallback={null}>
        {/* Shiny Dark Red Ball */}
        <Float speed={isMobile ? 1.5 : 2} rotationIntensity={isMobile ? 0.5 : 1} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
          <InteractiveMesh position={isMobile ? [1.5, 3, -4] : [-4, 1, -2]}>
            <sphereGeometry args={[isMobile ? 2 : 2.5, 64, 64]} />
            <meshPhysicalMaterial 
              color="#cc0000" 
              roughness={0.1}
              metalness={0.2}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </InteractiveMesh>
         </Float>

        {/* Black Torus Knot */}
        <Float speed={isMobile ? 1.5 : 2.5} rotationIntensity={isMobile ? 1 : 1.5} floatIntensity={isMobile ? 1 : 1.5} floatingRange={[-0.3, 0.3]}>
          <InteractiveMesh position={isMobile ? [-1.5, -4, -2] : [4, -3, 0]}>
            <torusKnotGeometry args={[isMobile ? 1 : 1.5, isMobile ? 0.3 : 0.5, 128, 32]} />
            <meshPhysicalMaterial 
              color="#111111" 
              roughness={0.1}
              metalness={0.8}
              clearcoat={1}
            />
          </InteractiveMesh>
        </Float>

        {/* Silver Sphere (small ball) */}
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
          <InteractiveMesh position={isMobile ? [0, 6, -3] : [3, 4, -4]} scaleOffset={1.5}>
            <sphereGeometry args={[isMobile ? 0.8 : 1.2, 64, 64]} />
            <meshPhysicalMaterial 
              color={isMobile ? "#ffffff" : "#e0e0e0"} 
              roughness={isMobile ? 0 : 0.1}
              metalness={isMobile ? 1 : 0.9}
              clearcoat={1}
            />
          </InteractiveMesh>
        </Float>
      </Suspense>
    </>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full bg-[#ffffff] overflow-hidden flex items-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
        <WebGLErrorBoundary fallback={
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
            {/* Fallback pattern if WebGL fails */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          </div>
        }>
          <Canvas 
            camera={{ position: [0, 0, 10], fov: 45 }}
            gl={{ powerPreference: "high-performance", antialias: false, alpha: false }}
            dpr={[1, 1.5]}
            onContextMenu={(e) => e.preventDefault()}
          >
            <Scene />
          </Canvas>
        </WebGLErrorBoundary>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full pointer-events-none flex flex-col justify-center pt-24 md:pt-32 pb-12">
        <div className="max-w-4xl pointer-events-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[12vw] md:text-8xl lg:text-9xl font-heading font-black text-omnia-black tracking-tight leading-[0.9] m-0"
          >
            CREATING<br/>
            <span className="text-omnia-red">MOMENTS.</span><br/>
            CRAFTING<br/>
            BRANDS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-lg md:text-2xl font-sans text-gray-700 max-w-2xl font-medium"
          >
            Innovative thinking for brands built for tomorrow. We engineer unforgettable experiences and performance-driven marketing.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-auto">
          <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-4">SCROLL</span>
          <div className="w-[1px] h-12 bg-gray-300 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-omnia-red origin-top"
              animate={{ 
                y: ["-100%", "100%"]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "linear"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
