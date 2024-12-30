import './portrait.css'
import { motion } from 'motion/react'

export default function Portrait(){
    return(
        <>
            <motion.div
            whileHover={{scale:0.95}}
            className='h-96 m-4 aspect-square bg-transparent grid grid-cols-2 overflow-hidden'>
                <div className='h-[12rem]'>
                    <img src="src/assets/imageOrange.jpg" alt="" />
                </div>
                <div className='h-[12rem]'>
                    <img src="src/assets/imageGruen.jpg" alt="" />
                </div>
                <div className='h-[12rem]'>
                    <img src="src/assets/imageBlue.jpg" alt="" />
                </div>
                <div className='h-[12rem]'>
                    <img src="src/assets/imageFuchsia.jpg" alt="" />
                </div>

            </motion.div>
        </>
    )
}