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
        {/* <OrbitControls makeDefault enableZoom={false} enablePan={false}/> */}
        <fog attach="fog" args={[0xffffff, 6, 7]} />
        <Stage adjustCamera={0.05}  intensity={0.5} shadows="contact" > 
            {/* control presentation - user rotation of model */}
            <PresentationControls 
                global 
                rotation={ [ 0., 0.0, 0 ] }
                polar={ [ 0, 0 ] }
                azimuth={ [ -Math.PI * 0.5,  Math.PI * 0.5 ] }
                config={ { mass: 2, tension: 50 } }
                snap={ { mass: 2, tension: 50 } }
            >
                {/* Model */}
                <group> 
                    <mesh>
                        <cylinderGeometry args={[0.5, 0.5, 0.4]}/>
                        <meshStandardMaterial color={0x1f1f1f}/>
                    </mesh>
                    <mesh position={[0, 1., 0.]}>
                        <boxGeometry args={[0.5, 1.75, 0.5]}/>
                        <meshStandardMaterial />
                    </mesh>
                </group>
                
            </PresentationControls>

            {/* Ground Mesh */}
            <mesh rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial />
            </mesh>

        </Stage>
        
        
        {/* Lights */}
        <directionalLight position={[0, 2, 1]} color="red" intensity={1.}/>
        <directionalLight position={[0, 2, -1]} color="red" intensity={1.}/>
        <ambientLight intensity={0.125} />

        
    </>
}