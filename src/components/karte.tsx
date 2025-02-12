//@ts-nocheck

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { Children, useEffect } from 'react';
interface KarteProps {
    children: React.ReactNode;
}
const Karte: React.FC<KarteProps> = ({children}) => {
    useEffect(() => {
        AOS.init();

    }, []);
    return(
        <>
        <div 
        data-aos="fade-up"
        data-aos-delay="100"
        className=' '>
            <div>{children}</div>
        </div>
        </>
    )
}
export default Karte;