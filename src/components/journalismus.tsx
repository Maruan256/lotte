import { useState } from "react"
import { motion } from "motion/react";

import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { LoremIpsum } from 'lorem-ipsum';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Description } from '@headlessui/react';

export default function Journalismus() {
    const [journalismus, setJournalismus] = useState(false);
    function openJournalismus(){
        setJournalismus(true)
    };
    let lorem = new LoremIpsum({
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
        onClick={openJournalismus}
        className='bg-[#FFEBF8] h-96 sm:gap-8 sm:m-4 aspect-square shadow-2xl relative'> 
            <div className="inset-0 overflow-hidden">
                <motion.span
                initial="init"
                whileHover="hover"
                className="pt-leading-9 inset-0 fFace text-8xl text-blue-gray-800 overflow-hidden absolute block cursor-pointer tracking-[rem] break-words h-96 justify-center items-center"
                >
                    <motion.div
                    variants={{
                        init:{y: 0},
                        hover:{y: "-100%"}
                    }}
                    className="absolute inset-0">
                        kulturjournalismus
                    </motion.div>
                    <motion.div
                    variants={{
                        init:{y: "100%"},
                        hover:{y: 0}
                    }}
                    className="absolute inset-0">
                        Kulturjournalismus
                    </motion.div>
                </motion.span>
                </div>
        </motion.div>
        <Dialog open={journalismus} onClose={() => setJournalismus(false)} className="relative z-[71]">
      <DialogBackdrop className="fixed inset-0 bg-[#000]/50" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-[#FFEBF8] space-y-4 h-screen text-black flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setJournalismus(false)}>
            <motion.div className='w-10 aspect-square p-8'
            whileHover={{scale: 1.2}}>
              <XMarkIcon className='text-black size-10'></XMarkIcon>
            </motion.div>
            </button>
            <DialogTitle className="font-sans fFace text-6xl p-12 firstletter">Kulturjournalismus</DialogTitle>
            <Description className="p-12">{lorem.generateSentences(1)}</Description>
            <p className='p-8'>{lorem.generateParagraphs(30)}</p>

          </DialogPanel>
        </motion.div>
      </Dialog>
        </>
    )
}