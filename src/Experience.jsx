import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from "@react-three/drei"
import { useGLTF, Stage, PresentationControls, ContactShadows, Html, ScrollControls, useScroll } from "@react-three/drei"
import * as THREE from 'three'


export default function Experience()
{
    const box = useRef()
    const material = new THREE.MeshNormalMaterial()
    const material2 = new THREE.MeshStandardMaterial({
        color: 0xffffff
    })

    const scroll = useScroll()
    

    useFrame((state, delta) => {
        
        // const r1 = scroll.range(0 / 4, 1 / 4)
        // state.camera.position.z = r1
    })

    return <>
        <ScrollControls pages={3}>
            <fog attach="fog" args={[0xffffff, 6, 7]} />
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
                    <group> 
                        <mesh>
                            <cylinderGeometry args={[0.5, 0.5, 0.4]}/>
                            <meshStandardMaterial />
                        </mesh>
                        <mesh position={[0, 1., 0.]}>
                            <boxGeometry args={[0.5, 1.75, 0.5]}/>
                            <meshStandardMaterial depthWrite={false} transparent={true} opacity={0.2}/>
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
                            <meshStandardMaterial depthWrite={false} transparent={true} opacity={0.25} color={0x0000ff} side={THREE.DoubleSide}/>
                        </mesh>
                        <mesh position={[0, 0.85, 0]}>
                            <boxGeometry args={[0.125, 0.125, 0.125]} />
                            <meshPhongMaterial depthWrite={false} transparent={true} opacity={0.75} color={0x00ff00} side={THREE.DoubleSide}/>
                        </mesh>
                    </group>   
                {/* </PresentationControls> */}
            </Stage>  
        </ScrollControls>
        {/* <Html>
            <div>Scroll: {scroll} </div>
        </Html> */}
        {/* Orbit Controls */}
        {/* <OrbitControls 
            makeDefault
            enableDamping={true} 
            enableZoom={true} 
            enablePan={false}
            maxAzimuthAngle={Math.PI / 2}
            maxPolarAngle={Math.PI}
            minAzimuthAngle={-Math.PI / 2}
            minPolarAngle={-Math.PI}
        /> */}
        {/* <Scroll /> */}
        
    </>
}