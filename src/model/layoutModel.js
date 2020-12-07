import Laptop from './laptopModel';
import React, {Suspense} from 'react';

export default function Layout() {
    return (
        <>
        <mesh position={[0,0,-10]}>
            <circleBufferGeometry args={[8,64]} />
            <meshBasicMaterial color="gray" />
        </mesh>
        <mesh receiveShadow position ={[0,-10,0]} rotation={[-0.5*Math.PI, 0, 0]}>
            <planeBufferGeometry args={[500,500,1,1]} />
            <shadowMaterial transparent opacity={0.2} />
        </mesh>
        <Suspense fallback={null}>
            <Laptop />
        </Suspense>
        </>
    );
} 