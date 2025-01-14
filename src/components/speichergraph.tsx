import { motion } from 'motion/react'
import './tagungen.css'
import "preline/preline";
import speichergraphfoto from '../assets/perec-maschine.png';
function speichergraph() {

  return (
    <>
    <a href="https://www.transcript-open.de/doi/10.14361/9783839465615-008">
        <motion.div 
      whileHover={{scale:0.95}}

      className='bg-[#FF0554] h-96 gap-8 m-4 aspect-square shadow-2xl overflow-hidden'> 
        <img className='object-cover h-96 aspect-square' src={speichergraphfoto} alt="Rue Vilin" />
      </motion.div>

      </a>
    </>
  )
}

export default speichergraph