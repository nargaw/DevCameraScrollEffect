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
        <OrbitControls 
            makeDefault
            enableDamping={true} 
            enableZoom={true} 
            enablePan={false}
            maxAzimuthAngle={Math.PI / 2}
            maxPolarAngle={Math.PI}
            minAzimuthAngle={-Math.PI / 2}
            minPolarAngle={-Math.PI}
        />
        <group> 
            <mesh>
                <cylinderGeometry args={[0.5, 0.5, 0.4]}/>
                <meshStandardMaterial />
            </mesh>
            <mesh position={[0, 1., 0.]}>
                <boxGeometry args={[0.5, 1.75, 0.5]}/>
                <meshStandardMaterial transparent={true} opacity={0.2}/>
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
                <meshStandardMaterial transparent={true} opacity={0.25} color={0x0000ff} side={THREE.DoubleSide}/>
            </mesh>
            <mesh position={[0, 0.85, 0]}>
                <boxGeometry args={[0.125, 0.125, 0.125]} />
                <meshPhongMaterial transparent={true} opacity={0.75} color={0x00ff00} side={THREE.DoubleSide}/>
            </mesh>
        </group>
        {/* <fog attach="fog" args={[0xffffff, 6, 7]} /> */}
        <Stage adjustCamera={1.5}  intensity={0.05} shadows="contact" > 
            {/* control presentation - user rotation of model */}
            {/* <PresentationControls 
                global 
                rotation={ [ 0., 0.0, 0 ] }
                polar={ [ 0, 0 ] }
                azimuth={ [ -Math.PI * 0.5,  Math.PI * 0.5 ] }
                // azimuth={ [ 0,  0 ] }
                config={ { mass: 2, tension: 50 } }
                snap={ { mass: 2, tension: 50 } }
            > */}
                {/* Model */}
                {/* <group> 
                    <mesh>
                        <cylinderGeometry args={[0.5, 0.5, 0.4]}/>
                        <meshStandardMaterial />
                    </mesh>
                    <mesh position={[0, 1., 0.]}>
                        <boxGeometry args={[0.5, 1.75, 0.5]}/>
                        <meshStandardMaterial transparent={true} opacity={0.2}/>
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
                        <meshStandardMaterial transparent={true} opacity={0.25} color={0x0000ff} side={THREE.DoubleSide}/>
                    </mesh>
                    <mesh position={[0, 0.85, 0]}>
                        <boxGeometry args={[0.125, 0.125, 0.125]} />
                        <meshPhongMaterial transparent={true} opacity={0.75} color={0x00ff00} side={THREE.DoubleSide}/>
                    </mesh>
                </group> */}
                
            {/* </PresentationControls> */}
            
            {/* Ground Mesh */}
            {/* <mesh rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial side={THREE.DoubleSide}/>
            </mesh> */}

        </Stage>  
    </>
}