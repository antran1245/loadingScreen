import React, { Component } from 'react';
import {Canvas} from 'react-three-fiber';
import Layout from '../model/layoutModel';

class Loading extends Component {
    render() {
        return (
            <Canvas color="#dfdfe5">
                <hemisphereLight skyColor={"black"} groundColor={0xffffff} intensity={0.5} position={[0, 50, 0]} />
                <directionalLight castShadow position={[-8,20,8]} />
                <Layout/>
            </Canvas>
        );
    }
}

export default Loading;