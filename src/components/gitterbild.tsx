import { motion } from 'motion/react'
import './tagungen.css'
import "preline/preline";
import gitterbildjpg from '../assets/bi-carre-Lieux-FGP-57-2-11d_gd.jpg';


function gitterbild() {
  return (
    <>
    <a href="https://www.degruyter.com/document/doi/10.1515/9783986120665/html">
    <motion.div 
      whileHover={{scale:0.95}}
      className='bg-[#FF0554] h-96 gap-8 m-4 aspect-square shadow-2xl'> 
        <img className='object-cover h-96' src={gitterbildjpg} alt="" />
      </motion.div>
      </a>
      </>
  )
}

export default gitterbild