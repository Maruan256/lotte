//@ts-nocheck
import { useState, useEffect } from 'react'
import './tagungen.css'
import { LoremIpsum } from 'lorem-ipsum';
import { motion } from 'motion/react';
import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle,Description } from '@headlessui/react';
import { stringify } from 'querystring';
export default function Contact(){
    const[contact, setContact] = useState(false);

    function openContact(){
        setContact(true)
    };
    return(
        <>
        <motion.div 
        onClick={openContact} className='flex bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600 justify-center items-center" h-96 gap-8 m-4 aspect-square shadow-2xl'
        whileHover={{scale:0.9}}> 
        <span className="text-white text-5xl tracking-tighter fFace pt-36">kontakt</span>
        </motion.div>
        <Dialog open={contact} onClose={() => setContact(false)} className="relative z-[100]">
        <DialogBackdrop className="fixed inset-0 bg-[#Eb00df]/30" />
          <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{duration: 0.5, ease: "easeInOut"}}>
            <DialogPanel className="bg-gradient-to-b from-[#00869e] to-[#Eb00df] space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
              <button onClick={() => setContact(false)}>
              <div className='w-10 aspect-square p-8'>
                <XMarkIcon className='text-white size-10'></XMarkIcon>
              </div>
              </button>
              <DialogTitle className="font-sans fFace text-6xl p-12 firstletter text-center">Kontakt</DialogTitle>
              <Description className="p-8 fFace text-3xl">email</Description>
              <p className='p-4'>johanna-charlotte.horst@germanistik.uni-halle.de</p>
              <Description className="p-8 fFace text-3xl">uni</Description>
              <a href="https://www.germanistik.uni-halle.de/komparatistik/ma-komparatistik/johanna-
charlotte_horst/"><p className='p-4'>hier</p></a>
              <Description className="p-8 fFace text-3xl">arbeit am feminismus</Description>
              <a href="https://arbeit-am-feminismus.de/kontakt"><p className='p-4'>hier</p></a>
            </DialogPanel>
          </motion.div>
        </Dialog>
        </>
    )
}