import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { OrbitControls, useGLTF, Stage, PresentationControls, ContactShadows, Html, ScrollControls, useScroll, Scroll } from "@react-three/drei"
import Scrolly from "./Scrolly"
import * as THREE from 'three'


export default function Experience()
{
    const box = useRef()
    const specimen = useRef()
    const material = new THREE.MeshNormalMaterial()
    const material2 = new THREE.MeshStandardMaterial({
        color: 0xffffff
    })


    // const scroll = useScroll()
    // console.log(scroll)
    // const { width, height } = useThree((state) => state.viewport)
    // console.log(width, height)
    // const three = useThree()
    // console.log(three.camera.position)

    // useFrame((state, delta) => {
    //     const r1 = scroll.range(0/3, 1/3)
    // })

    // document.addEventListener('scroll', (e) => {
    //     console.log(e)
    // })
    
    // const scroll = useScroll()
    // const {width, height } = useThree((state) => state.viewport)

    // useFrame(() => {
    //     const r1  = scroll.range(0, 1/3)
    // })

    return <>
        <ScrollControls pages={4}>
            <fog attach="fog" args={[0xffffff, 6, 7]} />
            <Stage adjustCamera={1.5}  intensity={0.05} shadows="contact" >
            <Scrolly />
            {/* <Scroll html>
                <h1>html in here (optional)</h1>
                <h1 style={{ top: '100vh' }}>second page</h1>
                <h1 style={{ top: '500vh' }}>third page</h1>
            </Scroll>  */}
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
                        <mesh position={[0, 0.85, 0]} ref={specimen}>
                            <boxGeometry args={[0.25, 0.25, 0.25]} />
                            <meshStandardMaterial depthWrite={false} transparent={true} opacity={0.25} color={0xff0000} side={THREE.DoubleSide}/>
                        </mesh>
                        <mesh position={[0, 0.85, 0]}>
                            <boxGeometry args={[0.125, 0.125, 0.125]} />
                            <meshPhongMaterial depthWrite={false} transparent={true} opacity={0.75} color={0x00ff00} side={THREE.DoubleSide}/>
                        </mesh>
                    </group>   
                </PresentationControls>
            </Stage>  
        </ScrollControls>
    </>
}