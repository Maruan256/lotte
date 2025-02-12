import { motion } from "motion/react";
import geschichte from './../assets/GeschichteSchreiben.jpg';

const GeschichteSchreiben = () => {
    return(
        <>
            <motion.div
            whileHover={{scale:0.95}}
            className='h-96 m-4 aspect-square bg-transparent overflow-hidden shadow-2xl'>
                
                <div className='h-full'>
                    <img src={geschichte} alt="" />
                </div>

            </motion.div>
        </>
    )
}
export default GeschichteSchreiben;