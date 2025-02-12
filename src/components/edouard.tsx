import { motion } from "motion/react";
import eddi from './../assets/edouardlouis.jpg';

const Edouard = () => {
    <>
            <motion.div
            whileHover={{scale:0.95}}
            className='h-96 m-4 aspect-square bg-transparent overflow-hidden shadow-2xl'>
                
                <div className='h-full'>
                    <img src={eddi} alt="" />
                </div>

            </motion.div>
        </>
};
export default Edouard;