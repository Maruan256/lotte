//@ts-nocheck


import './hintergrund.css';
import All from '../assets/pexels-joshimer-binas-1769396-5463226.jpg'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import About from './about';
import Forschung from './forschung';
import { useRef } from 'react';

export default function Hintergrund() {
    //const parallax = useRef<IParallax>(null!);
    return (
        <>

            <Parallax pages={10} style={{zIndex:-10000, backgroundColor:'#000000'}}>
                <ParallaxLayer offset={0} speed={-1} factor={3} style={{backgroundImage: `url(${All})`, backgroundSize:'100vw 400vh'}} >
                </ParallaxLayer>
            </Parallax>

        </>
    )
}