 //@ts-nocheck
import { useState } from 'react'
import './flex.css'
import '../index.css'
import { motion } from 'motion/react'
import { div, style } from 'motion/react-client';
import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { LoremIpsum } from 'lorem-ipsum';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Button, Checkbox, Description } from '@headlessui/react';
import Lehre from './lehre';
import Journalismus from './journalismus';
import Tagungen from './tagungen';
import Portrait from './portrait';
import Gitterbild from './gitterbild';
import Ruevilin from './ruevilin';
import About from './about';
import kaese from "../assets/JPG37farocki_GF.max-2712x1282.format-jpeg.jpegquality-80.jpg";
import noise from "../assets/noise.png"
import { url } from 'inspector';
import Speichergraph from './speichergraph';
import Vortraege from './vortraege';
import Publikationen from './publikationen';
import Forschung from './forschung';
import Projekte from './projekte';
import Aktuelles from './aktuelles';
let greenSquareClass = "bg-[#3B4D04] h-96 gap-8 m-4 aspect-square";
let orangeSquareClass = "bg-[#FA0D0D] h-full w-full gap-8 m-4 aspect-square";

function CollapsedFlexContainer() {
  
};



export default function Flex(){
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




  const[kollapsed, setKollabsed] = useState(false);
  const[test, setTest] = useState(false);
  const[contact, setContact] = useState(false);
  const[projekte, setProjekte] = useState(false);
  const[vortraege, setVortraege] = useState(false);
  const[aktuelles, setAktuelles] = useState(false);
  const[forschung, setForschung] = useState(false);
  const[newsletter, setNewsletter] = useState(false);
  const[kulturjournalismus, setKulturjournalismus] = useState(false);
  const[lehre, setLehre] = useState(false);
  const[tagungen, setTagungen] = useState(false);
  const[publikationen, setPublikationen] = useState(false)





  function openKulturjournalismus(){
    setKulturjournalismus(true)
  };
  function openContact(){
    setContact(true)
  };
  function openProjekte(){
    setProjekte(true)
  };
  function openVortraege(){
    setVortraege(true)
  };
  function openAktuelles(){
    setAktuelles(true)
  };
  function openForschung(){
    setForschung(true)
  };
  function openNewsletter(){
    setNewsletter(true)
  }



  return(
    <div className='flex flex-cols-1 sm:flex-cols-2 md:flex-cols-3 lg:flex-cols-4 xl:flex-cols-5 flex-wrap justify-center overflow-hidden mt-5'>
      <About />
      <Portrait />
      <Journalismus />
      
      <Forschung />
      <a href="https://www.matthes-seitz-berlin.de/buch/beruehren-lesen.html">
      <motion.div className='bg-transparent h-96 gap-8 m-4 aspect-square shadow-2xl'
      whileHover={{scale:0.9}}> 
        <img className='object-cover h-96' src={kaese} alt="bild" />
      </motion.div>
      </a>
      <Lehre />
      <Tagungen />
      <Ruevilin />
      <Vortraege />
      <motion.div onClick={openContact} className='flex bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600 justify-center items-center" h-96 gap-8 m-4 aspect-square shadow-2xl'
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
            <DialogTitle className="font-sans fFace text-6xl p-12 firstletter">Kontakt</DialogTitle>
            <Description className="p-12">{lorem.generateSentences(1)}</Description>
            <p className='p-8'>{lorem.generateParagraphs(30)}</p>

          </DialogPanel>
        </motion.div>
      </Dialog>
      <div className='changer h-96 gap-8 m-4 aspect-square shadow-2xl'> 
      </div>
      <Publikationen />
      <Aktuelles />
      <Gitterbild />
      <Projekte />
      <Speichergraph />
    </div>
    
  )
}
