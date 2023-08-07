
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import useScrollPosition from './hooks/useScrollPosition';
import { Suspense } from 'react';

function Model(props) {
    const { nodes } = useGLTF('/models/scene.gltf')
    const scrollY = useScrollPosition();

    const material = new THREE.MeshStandardMaterial({ color: parseInt(props.figurineColor, 16) });
    return (
        <group {...props} dispose={null}>
            <group position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2 + scrollY/500]} scale={0.05}>
                <mesh geometry={nodes.Object_2.geometry} material={material}/>
                <mesh geometry={nodes.Object_3.geometry} material={material} />
            </group>
        </group>
    )
}

useGLTF.preload('/models/scene.gltf')

export default function FigurineModel({figurineColor}) {
    return (
        <Canvas camera={{ position: [0, 1, 4] }} penumbra={1}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.2}/>
                <spotLight intensity={0.5} position={[300, 300, 2000]} />
                <Model figurineColor={figurineColor}/>
            </Suspense>
        </Canvas>
    )
}
