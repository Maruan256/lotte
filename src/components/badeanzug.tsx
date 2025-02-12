import { motion } from "motion/react";
import badeanzug from './../assets/badeanzug.jpg'

const Badeanzug = () => {
    return(
        <>
            <motion.div
            whileHover={{scale:0.95}}
            className='h-96 m-4 aspect-square bg-transparent overflow-hidden shadow-2xl'>
                
                <div className='h-full'>
                    <img src={badeanzug} alt="" />
                </div>

            </motion.div>
        </>
    )
}
export default Badeanzug