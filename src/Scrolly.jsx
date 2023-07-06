import { useScroll } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from 'three'

export default function Scrolly()
{
    // console.log('scroll')
    const scroll = useScroll()
    // console.log(scroll)
    const cameraPos1 = new THREE.Vector3(0,0,2)
    const cameraPos2 = new THREE.Vector3(0, 0, 1.5)
    const cameraPos3 = new THREE.Vector3(0, 0.5, -0.5)

    const specimenLocation = new THREE.Vector3(0, 0.0, 0)
    const originalPosition = new THREE.Vector3(0, 2, 4)

    useFrame((state, delta) => {
        const r1 = scroll.range(0/4, 1/4)
        // console.log('r1: ' + r1)
        const r2 = scroll.range(1/4, 2/4)
        // console.log('r2: ' + r2)
        // console.log(state.camera.position)
        // state.camera.position.z -= r1 * 0.01
        // state.camera.lookAt(object.position)
        if(r1 <= 1 && r1 > 0.5){
            state.camera.position.lerp(cameraPos1, 0.01)
            state.camera.lookAt(specimenLocation)
        }
        if(r1 <= 0.5){
            state.camera.position.lerp(originalPosition, 0.01)
            state.camera.lookAt(specimenLocation)
        }

        if(r2 > 0.25 && r2 < 0.75){
            state.camera.position.lerp(cameraPos2, 0.01)
            state.camera.lookAt(specimenLocation)
        }
        if(r2 > 0.75){
            state.camera.position.lerp(cameraPos3, 0.01)
            state.camera.lookAt(specimenLocation)
        }
        
    })
}
