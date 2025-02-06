//@ts-nocheck
import { useState, useEffect } from 'react'
import './aktuelles.css'
import { motion } from 'motion/react';
import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle,Description } from '@headlessui/react';
import noise from "../assets/noise.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aktuelles() {
    useEffect(() => {
        AOS.init();
    }, []);
    const FuzzyOverlay = () => {
        return (
          <motion.div
          aos-data="fade-up"
            initial={{ transform: "translateX(-10%) translateY(-10%)" }}
            animate={{
              transform: "translateX(10%) translateY(10%)",
            }}
            transition={{
              repeat: Infinity,
              duration: 0.2,
              ease: "linear",
              repeatType: "mirror",
            }}
    
            style={{
              backgroundImage: `url("${noise}")`,
              // backgroundImage: 'url("/noise.png")',
            }}
            className="pointer-events-none absolute -inset-[100%] opacity-[45%]"
          />
        );
      };
    const[aktuelles, setAktuelles] = useState(false);
    function openAktuelles() {
        setAktuelles(true);
    };
    return(
        <>
        <motion.div 
        aos-data="fade-up"
        onClick={openAktuelles} className='bg-[repeating-linear-gradient(to_bottom,#afafaf_0px,#afafaf_20px,#e5e6eb_20px,#e5e6eb_40px)] items-center flex-row overflow-hidden h-96 gap-8 m-4 aspect-square relative shadow-2xl'
      whileHover={{scale:0.9}}> 
      <div className='absolute inset-0 overflow-hidden'>
      <motion.span 
        initial="init"
        whileHover="hovered"
      className=" inset-0 right-0 text-[#FF0554] font-sans text-6xl tracking-tighter pr-3 fFace z-10 overflow-hidden absolute block cursor-pointer">
      <motion.div
      variants={{
        init:{y:0},
        hovered:{y: "-100%"},
      }}
      className=''
      >aktuelles</motion.div>
      <motion.div
      className='absolute inset-0'
      variants={{
        init:{y: "100%"},
        hovered:{y: 0}
      }}
      >aktuelles</motion.div>
      </motion.span>
      </div>
      <marquee className="text-[280px] opacity-50  font-serif font-black text-[#FF0554] tracking-tighter w-3/4/12">AKTUELLES</marquee>
      <FuzzyOverlay />
      </motion.div>
      <Dialog open={aktuelles} onClose={() => setAktuelles(false)} className="relative z-[71]">
      <DialogBackdrop className="fixed inset-0 bg-[#90CAF9]/30" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-gradient-to-b from-[#333] to-[#aaa] space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setAktuelles(false)}>
            <div className='w-10 aspect-square p-8'>
              <XMarkIcon className='text-white size-10'></XMarkIcon>
            </div>
            </button>
            <DialogTitle className="font-sans fFace text-6xl p-12 firstletter">Aktuelles</DialogTitle>
            <Description className="p-12"></Description>
            <p className='p-8'></p>

          </DialogPanel>
        </motion.div>
      </Dialog>
      </>
    )
}