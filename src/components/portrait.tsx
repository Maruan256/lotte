import './portrait.css'
import { motion } from 'motion/react'

export default function Portrait(){
    return(
        <>
            <motion.div
            whileHover={{scale:0.95}}
            className='h-96 m-4 aspect-square bg-transparent overflow-hidden'>
                
                <div className='h-full'>
                    <img src="/src/assets/DSC_6543-Edit.jpg" alt="" />
                </div>

            </motion.div>
        </>
    )
}