import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {useLoader, useFrame} from 'react-three-fiber';
import {useRef} from 'react';

export default function Laptop() {
    const main = useRef();
    const {nodes} = useLoader(GLTFLoader, 'laptop.glb');
    console.log(nodes);
    useFrame(()=> {
        main.current.rotation.y -= .005;
    });
    return(
        <group ref={main} rotation={[0,-90,320]} scale={[1.5,1.5,1.5]} position={[-.1,.3,0]}>
            <mesh>
                <bufferGeometry attach="geometry" {...nodes['Cube_1'].geometry}/>
                <meshBasicMaterial attach="material" color="#313133"/>
            </mesh>
            <mesh>
                <bufferGeometry attach="geometry" {...nodes['Cube_2'].geometry}/>
                <meshBasicMaterial attach="material" color="black"/>
            </mesh>
            <mesh>
                <bufferGeometry attach="geometry" {...nodes['Cube_3'].geometry}/>
                <meshBasicMaterial attach="material" color="white"/>
            </mesh>
            <mesh>
                <bufferGeometry attach="geometry" {...nodes['Cube_4'].geometry}/>
                <meshBasicMaterial attach="material" color="red"/>
            </mesh>

        </group>
    );
}