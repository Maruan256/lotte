import './portrait.css'
import { motion } from 'motion/react'
import portrait from './../assets/DSC_6543-Edit.jpg'

export default function Portrait(){
    return(
        <>
            <motion.div
            whileHover={{scale:0.95}}
            className='h-96 m-4 aspect-square bg-transparent overflow-hidden shadow-2xl'>
                
                <div className='h-full'>
                    <img src={portrait} alt="" />
                </div>

            </motion.div>
        </>
    )
}