

import { motion } from 'motion/react'
import { useState } from 'react'
import './tagungen.css'
import { LoremIpsum } from 'lorem-ipsum';
import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle,Description } from '@headlessui/react';
import rueFoto from '../assets/ruevili.png';
function ruevilin() {
    let lorem = new LoremIpsum
    const[ruevilin, setRuevilin] = useState(false);
    function openRuevilin(){
        setRuevilin(true)
    }
  return (
    <>
        <motion.div 
      whileHover={{scale:0.9}}
      onClick={openRuevilin}
      className='bg-[#FF0554] h-96 gap-8 m-4 aspect-square shadow-2xl overflow-hidden'> 
        <img className='object-cover h-96 aspect-square' src={rueFoto} alt="Rue Vilin" />
      </motion.div>
      <Dialog open={ruevilin} onClose={() => setRuevilin(false)} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-[#0E6902]/50" />
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel className="bg-[#152436] space-y-4 h-screen text-blue-gray-300 flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setRuevilin(false)}>
            <motion.div className='w-10 aspect-square p-8'
            whileHover={{scale: 1.2}}>
              <XMarkIcon className='text-blue-gray-300 size-10'></XMarkIcon>
            </motion.div>
            </button>
            <DialogTitle className="font-sans fFace text-6xl p-12">Rue Vilin</DialogTitle>
            <Description className="p-12">{lorem.generateSentences(1)}</Description>


          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default ruevilin