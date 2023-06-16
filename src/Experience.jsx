import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from "@react-three/drei"
import { useGLTF, Stage, PresentationControls, ContactShadows } from "@react-three/drei"
import * as THREE from 'three'
import { useEffect } from "react"

export default function Experience()
{
    const box = useRef()
    const material = new THREE.MeshNormalMaterial()
    const material2 = new THREE.MeshStandardMaterial({
        color: 0xffffff
    })


    return <>
        {/* Orbit Controls */}
        <OrbitControls makeDefault enableZoom={true} enablePan={false}/>
        <fog attach="fog" args={[0xffffff, 6, 7]} />
        <Stage adjustCamera={1.5}  intensity={0.5} shadows="contact" > 
            {/* control presentation - user rotation of model */}
            <PresentationControls 
                global 
                rotation={ [ 0., 0.0, 0 ] }
                polar={ [ 0, 0 ] }
                azimuth={ [ -Math.PI * 0.5,  Math.PI * 0.5 ] }
                // azimuth={ [ 0,  0 ] }
                config={ { mass: 2, tension: 50 } }
                snap={ { mass: 2, tension: 50 } }
            >
                {/* Model */}
                <group> 
                    <mesh>
                        <cylinderGeometry args={[0.5, 0.5, 0.4]}/>
                        <meshStandardMaterial />
                    </mesh>
                    <mesh position={[0, 1., 0.]}>
                        <boxGeometry args={[0.5, 1.75, 0.5]}/>
                        <meshStandardMaterial transparent={true} opacity={0.35}/>
                    </mesh>
                    <mesh position={[-0.5, 1.45, 0]}>
                        <boxGeometry args={[1, 0.1, 0.1]} />
                        <meshStandardMaterial />
                    </mesh>
                    <mesh position={[0.5, 1.45, 0]}>
                        <boxGeometry args={[1, 0.1, 0.1]} />
                        <meshStandardMaterial />
                    </mesh>
                    <mesh position={[0, 0.85, 0]}>
                        <boxGeometry args={[0.25, 0.25, 0.25]} />
                        <meshStandardMaterial transparent={true} opacity={0.5} color={0x0000ff} />
                    </mesh>
                    <mesh position={[0, 0.85, 0]}>
                        <boxGeometry args={[0.125, 0.125, 0.125]} />
                        <meshStandardMaterial transparent={true} opacity={0.9} color={0x00ff00} />
                    </mesh>
                </group>
                
            </PresentationControls>
            
            {/* Ground Mesh */}
            {/* <mesh rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial side={THREE.DoubleSide}/>
            </mesh> */}

        </Stage>
        
        
        {/* Lights */}
        <directionalLight position={[0, 2, 1]} color="red" intensity={1.}/>
        <directionalLight position={[0, 2, -1]} color="red" intensity={1.}/>
        <ambientLight intensity={0.125} />

        
    </>
}