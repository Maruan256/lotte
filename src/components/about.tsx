import { useState } from "react"
import { motion } from "motion/react";

import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { LoremIpsum } from 'lorem-ipsum';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Description } from '@headlessui/react';


const about = () => {
    const[about, setAbout] = useState(false);
    function openAbout(){
        setAbout(true)
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
  return (
<>
<motion.div 
            whileHover={{scale:0.95}}
            onClick={openAbout} className='flex h-96 m-4 aspect-square lg:aspect-[2.1/1] bg-gradient-to-b from-[#B6E397] to-[#618BA7] items-end justify-end shadow-2xl'> 
      <motion.a 
      initial="initial"
      whileHover="hovered"
      className="font-sans text-white text-5xl tracking-tighter pr-10 pb-3 fFace overflow-hidden relative block cursor-pointer">
      <motion.div 
      variants={{
        initial: {y: 0},
        hovered: {y: "-100%"},

      }}>
        about
      </motion.div>
      <motion.div 
      className='absolute inset-0'
      variants={{
        initial: {y: "100%"},
        hovered: {y: 0},

      }}>
        about
      </motion.div>
      </motion.a>
      </motion.div>
      <Dialog open={about} onClose={() => setAbout(false)} className="relative z-[71]">
      <DialogBackdrop className="fixed inset-0 bg-[#618BA7]/30" />
        <motion.div 
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}

        className="fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel className="bg-gradient-to-b from-[#B6E397] to-[#618BA7] space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setAbout(false)}>
            <div className='w-10 aspect-square p-8'>
              <XMarkIcon className='text-white size-10'></XMarkIcon>
            </div>
            </button>
            <DialogTitle className="font-sans fFace text-6xl p-12">About</DialogTitle>
            <Description className="p-12">{lorem.generateSentences(1)}</Description>
            <p className='p-8'>{lorem.generateParagraphs(30)}</p>

          </DialogPanel>
        </motion.div>
      </Dialog>
</>
  )
}

export default about