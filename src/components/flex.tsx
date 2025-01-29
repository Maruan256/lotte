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
import kaese from '../assets/kaesegif.gif'
import Moon from '../assets/moon.png'
import noise from "../assets/noise.png"
import { url } from 'inspector';
import Speichergraph from './speichergraph';
import Vortraege from './vortraege';
import Publikationen from './publikationen';
import Forschung from './forschung';
import Projekte from './projekte';
import Aktuelles from './aktuelles';
import Contact from './contact';
import Hintergrund from './hintergrund';
import All from '../assets/smokefullheight.jpg'
import womangif from '../assets/womangif.gif'
import coiffeurgif from '../assets/coiffeurgif.gif'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { start } from 'repl';
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
    <>
    <Parallax pages={2} style={{zIndex:-10000, backgroundColor:'#ebe1e4'}}>
    <ParallaxLayer offset={0} speed={0.1} factor={2} style={{backgroundImage: `url(${All})`, backgroundSize:'100vw 210vh'}} >
    </ParallaxLayer>

      <ParallaxLayer offset={0} speed={1} factor={4}>
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
        <Contact />   
        <div className='changer h-96 gap-8 m-4 aspect-square shadow-2xl'> 
        </div>
        <Publikationen />
        <Aktuelles />
        <Gitterbild />
        <Projekte />
        <Speichergraph />
        <motion.div className='h-96 gap-8 m-4 aspect-square shadow-2xl bg-black justify-center items-center flex'
        whileHover={{scale:0.9}}> 
          <img src={womangif} alt="bild" />
        </motion.div>
        <motion.div className='h-96 gap-8 m-4 aspect-square shadow-2xl bg-black justify-stretch items-stretch flex'
        whileHover={{scale:0.9}}> 
          <img src={coiffeurgif} alt="bild" />
        </motion.div>
      </div>
      </ParallaxLayer>
      </Parallax>

  </>
  )
}
