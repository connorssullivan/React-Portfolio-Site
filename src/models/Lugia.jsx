import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF, Text, Plane, Html } from "@react-three/drei";
import lugiaScene from "../assets/3d/lugia_animated.glb";
import lugiaSound from "../assets/lugia_sound.mp3"; // Ensure the path is correct

export function Lugia() {
  const lugiaRef = useRef();
  const { scene, animations } = useGLTF(lugiaScene);
  const { actions } = useAnimations(animations, lugiaRef);
  const audioRef = useRef(new Audio(lugiaSound));

  useEffect(() => {
    console.log('Lugia Model:', lugiaRef.current);
    console.log('Lugia Scene:', scene);
    console.log('Lugia Animations:', animations);
    console.log('Lugia Actions:', actions);
    console.log('Audio Source:', lugiaSound);

    if (actions["Armature|ArmatureAction"]) {
      actions["Armature|ArmatureAction"].play();
    } else {
      console.error('Animation "Armature|ArmatureAction" not found');
    }

    // Add event listener to play sound on hover
    const handleHover = () => {
      console.log('Hovered over Lugia');
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    };

    const currentRef = lugiaRef.current;
    currentRef.addEventListener('pointerover', handleHover);

    return () => {
      currentRef.removeEventListener('pointerover', handleHover);
    };
  }, [actions, scene, animations]);

  useFrame(({ clock }) => {
    if (lugiaRef.current) {
      // Update the Y position to simulate hovering using a sine wave
      lugiaRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 5.2;
    }
  });

  const handleClick = () => {
    audioRef.current.play().catch(error => {
      console.error("Error playing audio:", error);
    });
  };

  return (
    <mesh ref={lugiaRef} position={[-6, 2, -15]} rotation={[0, Math.PI / 9, 0]} scale={[1, 1, 1]}>
      <primitive object={scene} />
      {/* Text inside the speech bubble */}
      
      {/* Button inside the speech bubble */}
      <Html position={[0, 2, 0]} center>
        <button
          onClick={handleClick}
          style={{
            marginTop: "5rem",
            paddingTop: "0.5rem",
            paddingBottom: "4.0rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            fontSize: "0.5rem",
            borderRadius: "10px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif", // Font family
        
          }}
        >

          ClICK ME
        </button>
      </Html>
    </mesh>
  );
}





