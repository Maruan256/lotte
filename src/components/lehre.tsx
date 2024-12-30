//@ts-nocheck
import { useState } from 'react'
import './lehre.css'
import '../index.css'
import { motion } from 'motion/react'
import { div, style } from 'motion/react-client'
import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { LoremIpsum } from 'lorem-ipsum';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Button, Checkbox, Description } from '@headlessui/react';

export default function Lehre(){
    const [lehre, setLehre] = useState(false);
    function openLehre(){
        setLehre(true)
    };
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max:8,
          min: 4
        },
        wordsPerSentence:
        {
          max:16,
          min:4
        }
      })
    return(
        <>
        <motion.div 
        whileHover={{scale:0.95}}
        onClick={openLehre}
        className='bg-light-blue-300 h-96 gap-8 m-4 aspect-square shadow-2xl relative'>
            <div className='absolute inset-0 overflow-hidden pl-4'>
                <div className='lehreimage text-9xl pt-48 tracking-tighter text-[#310047]'>Lehre</div>
            </div>
            <motion.span
            initial="init"
            whileHover="hovered"
            className='fFace text-white relative overflow-hidden cursor-pointer text-5xl tracking-widest block'>
                <motion.div
                variants={{
                    init:{y: 0},
                    hovered:{y: "-100%"}
                }}>lehre</motion.div>
                <motion.div
                variants={{
                    init:{y: "100%"},
                    hovered:{y: 0}
                }}
                className='absolute inset-0'>lehre</motion.div>
            </motion.span>
            
        </motion.div>
        <Dialog open={lehre} onClose={() => setLehre(false)} className="relative z-[71]">
        <DialogBackdrop className="fixed inset-0 bg-[#618BA7]/30" />
          <motion.div 
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{duration: 0.5, ease: "easeInOut"}}
  
          className="fixed inset-0 flex w-screen items-center justify-center">
            <DialogPanel className="bg-light-blue-300 space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
              <button onClick={() => setLehre(false)}>
              <div className='w-10 aspect-square p-8'>
                <XMarkIcon className='text-white size-10'></XMarkIcon>
              </div>
              </button>
              <DialogTitle className="font-sans fFace text-6xl p-12">Lehre</DialogTitle>
              <Description className="p-12">{lorem.generateSentences(1)}</Description>
              <p className='p-8'>{lorem.generateParagraphs(30)}</p>
  
            </DialogPanel>
          </motion.div>
        </Dialog>
        </>
    )
}