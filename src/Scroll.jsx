import { ScrollControls, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Scroll()
{

    // console.log(useScroll)
    const data = useScroll()
    // console.log(data)

    return <>
    <ScrollControls pages={3} damping={0.1} >
        <Scroll html>
                <h1>first element</h1>
                <h1 style={{top: '100vh'}}>Second element</h1>
                <h1 style={{top: '200vh'}}>Third element</h1>
            </Scroll>
    </ScrollControls>   
    </>
}