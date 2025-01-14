

import { motion } from 'motion/react'
import './tagungen.css'
import "preline/preline";
import rueFoto from '../assets/ruevili.png';
function ruevilin() {

  return (
    <>
    <a href="https://www.degruyter.com/document/doi/10.1515/9783110556858/html?srsltid=AfmBOorC
Es9WD2qg7lWtwe1HT2FEL-wmZd99rX1kxQTtZfy3a7uWXuLw#contents">
        <motion.div 
      whileHover={{scale:0.95}}

      className='bg-[#FF0554] h-96 gap-8 m-4 aspect-square shadow-2xl overflow-hidden'> 
        <img className='object-cover h-96 aspect-square rotate-90' src={rueFoto} alt="Rue Vilin" />
      </motion.div>

      </a>
    </>
  )
}

export default ruevilin