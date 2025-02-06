//@ts-nocheck

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Karte(){
    useEffect(() => {
        AOS.init();

    }, []);
    return(
        <>
        <div 
        data-aos="fade-up"
        data-aos-delay="300"
        className='bg-[#0E6902] h-96 gap-8 m-4 aspect-square shadow-2xl overflow-hidden fFace text-5xl '>

        </div>
        </>
    )
}