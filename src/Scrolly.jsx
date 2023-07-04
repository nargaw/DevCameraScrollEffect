import { useScroll } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";

export default function Scrolly({object})
{
    console.log('scroll')
    const scroll = useScroll()
    console.log(scroll)

    useFrame((state, delta) => {
        const r1 = scroll.range(0/4, 1/4)
        // console.log(state.camera.position)
        state.camera.position.z -= r1 * 0.01
        // state.camera.lookAt(object.position)
    })
}
