//@ts-nocheck
import { useState } from 'react'
import './forschung.css'
import '../index.css'
import { motion } from 'motion/react'
import { div, style } from 'motion/react-client'
import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Button, Checkbox, Description } from '@headlessui/react';
 export default function Forschung(){
    const [forschung, setForschung] = useState(false);
    function openForschung(){
        setForschung(true)
    };

      
    return(
        <>
        <motion.div onClick={openForschung} className='bg-[#FFF238] h-96 m-4 gap-8 aspect-square shadow-2xl overflow-hidden flex justify-end'
      whileHover={{scale:0.9}}> 
      <span className="text-transparent text-[14rem] leading-[9.5rem] font-regular tracking-tighter break-all gradient-text">forschung</span>
      <div className='absolute overflow-hidden pt-80'>
      <motion.span 
      initial="init"
      whileHover="hover"
      className='relative text-black fFace text-5xl tracking-tighter pr-4 overflow-hidden block inset-0 cursor-pointer'>
        <motion.div 
      variants={{
        init: {y: 0},
        hover: {y: "-100%"},

      }}>
        forschung
      </motion.div>
      <motion.div 
      className='absolute inset-0'
      variants={{
        init: {y: "100%"},
        hover: {y: 0},

      }}>
        forschung
      </motion.div>
        </motion.span>
        </div>
      </motion.div>
      <Dialog open={forschung} onClose={() => setForschung(false)} className="relative z-[71]">
      <DialogBackdrop className="fixed inset-0 bg-[#000]/30" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-[#fcff52] space-y-4 h-screen text-black flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setForschung(false)}>
            <div className='w-10 aspect-square p-8'>
              <XMarkIcon className='text-black size-10'></XMarkIcon>
            </div>
            </button>
            <DialogTitle className="font-sans fFace text-6xl p-12 firstletter">Forschung</DialogTitle>
            <Description className="p-12 fFace lowercase text-3xl">Forschungsschwerpunkte</Description>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8"></p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Literaturen des Alltäglichen</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Oulipo</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Feministische Theorien</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Literatur und Fotografie</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Literatur und Recht (Law &amp; Literature)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Deutsche, Französische und Skandinavische Literatur des 19., 20. und 21. Jahrhunderts</p>
            </div>

          </DialogPanel>
        </motion.div>
      </Dialog>
        </>
 )}