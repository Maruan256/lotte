import { motion } from 'motion/react'
import { useState } from 'react'
import './tagungen.css'
import { LoremIpsum } from 'lorem-ipsum';
import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle,Description } from '@headlessui/react';
import gitterbildjpg from '../assets/bi-carre-Lieux-FGP-57-2-11d_gd.jpg';


function gitterbild() {
    let lorem = new LoremIpsum
    const[gitterbild, setGitterbild] = useState(false);
    function openGitterbild(){
        setGitterbild(true)
    }
  return (
    <>
    <motion.div 
      whileHover={{scale:0.9}}
      onClick={openGitterbild}
      className='bg-[#FF0554] h-96 sm:gap-8 sm:m-4 aspect-square shadow-2xl'> 
        <img className='object-cover h-96' src={gitterbildjpg} alt="" />
      </motion.div>
      <Dialog open={gitterbild} onClose={() => setGitterbild(false)} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-[#0E6902]/50" />
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel className="bg-[#eadfd7] space-y-4 h-screen text-blue-gray-900 flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setGitterbild(false)}>
            <motion.div className='w-10 aspect-square p-8'
            whileHover={{scale: 1.2}}>
              <XMarkIcon className='text-blue-gray-900 size-10'></XMarkIcon>
            </motion.div>
            </button>
            <DialogTitle className="font-sans fFace text-6xl p-12">Tagungen</DialogTitle>
            <Description className="p-12">{lorem.generateSentences(1)}</Description>


          </DialogPanel>
        </div>
      </Dialog>
      </>
  )
}

export default gitterbild