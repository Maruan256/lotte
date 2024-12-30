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


  const FuzzyOverlay = () => {
    return (
      <motion.div
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
        // You can download these PNGs here:
        // https://www.hover.dev/black-noise.png
        // https://www.hover.dev/noise.png
        style={{
          backgroundImage: 'url("src/assets/noise.png")',
          // backgroundImage: 'url("/noise.png")',
        }}
        className="pointer-events-none absolute -inset-[100%] opacity-[45%]"
      />
    );
  };

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



  function openTagungen(){
    setTagungen(true)
  };
  function openLehre(){
    setLehre(true)
  };
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
  function openPublikationen(){
    setPublikationen(true)
  };
  function openTest(){
    setTest(true)
  };
  function closeTest(){
    setTest(false)
  };


  return(
    <div className='flex flex-cols-1 sm:flex-cols-2 md:flex-cols-3 lg:flex-cols-4 xl:flex-cols-5 flex-wrap justify-center overflow-hidden mt-5'>
      <About />
            
      <Lehre />
      <motion.div className='bg-transparent h-96 gap-8 m-4 aspect-square shadow-2xl hidden lg:block'
      whileHover={{scale:0.9}}> 
        <img className='object-cover h-96' src="src/assets/JPG37farocki_GF.max-2712x1282.format-jpeg.jpegquality-80.jpg" alt="bild" />
      </motion.div>
      <Journalismus />
      <motion.div onClick={openForschung} className='bg-[#FFF238] h-96 gap-8 m-4 aspect-square shadow-2xl overflow-hidden flex justify-end'
      whileHover={{scale:0.9}}> 
      <span className="text-transparent text-[14rem] leading-[9.5rem] font-regular tracking-tighter break-all gradient-text">forschung</span>
      <div className='absolute overflow-hidden pt-80'>
      <motion.span 
      initial="init"
      whileHover="hover"
      className='relative text-black fFace text-5xl tracking-tighter pr-4 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] overflow-hidden block inset-0 cursor-pointer'>
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
          <DialogPanel className="bg-gradient-to-b from-[#fcff52] to-[#fff] space-y-4 h-screen text-black flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setForschung(false)}>
            <div className='w-10 aspect-square p-8'>
              <XMarkIcon className='text-white size-10'></XMarkIcon>
            </div>
            </button>
            <DialogTitle className="font-sans fFace text-6xl p-12">Forschung</DialogTitle>
            <Description className="p-12">{lorem.generateSentences(1)}</Description>
            <p className='p-8'>{lorem.generateParagraphs(30)}</p>

          </DialogPanel>
        </motion.div>
      </Dialog>
      
      <Tagungen />
      <Portrait />
      <Ruevilin />
      <motion.div onClick={openVortraege} className='overflow-hidden h-96 gap-8 m-4 aspect-square bg-[#Eb00df] shadow-2xl'
      whileHover={{scale:0.9}}> 
      <div className="flex flex-wrap items-end justify-between h-2/4 break-all p-5">     
          <div className="font-sans text-black text-5xl tracking-[0.02em] flex basis-2/5 leading-[35px] break-all fFace" >vortraege</div>
          <div className="flex basis-1/3 break-all font-sans text-teal-400 text-9xl leading-6 tracking-[-.55em] fFace">...<br/>...<br/>...</div>
          <div className="row items-stretch align-bottom p-10 text-[#54f33f] text-5xl fFace">.........<br/>.........
          </div>
      </div>
      <Dialog open={vortraege} onClose={() => setVortraege(false)} className="relative z-[100]">
      <DialogBackdrop className="fixed inset-0 bg-[#Eb00df]/30" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-gradient-to-b from-[#00869e] to-[#Eb00df] space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setVortraege(false)}>
            <div className='w-10 aspect-square p-8'>
              <XMarkIcon className='text-white size-10'></XMarkIcon>
            </div>
            </button>
            <DialogTitle className="font-sans fFace text-6xl p-12">Vorträge</DialogTitle>
            <Description className="p-12">{lorem.generateSentences(1)}</Description>
            <p className='p-8'>{lorem.generateParagraphs(30)}</p>

          </DialogPanel>
        </motion.div>
      </Dialog>
      </motion.div>
      <motion.div onClick={openContact} className='flex bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600 justify-center items-center" h-96 gap-8 m-4 aspect-square shadow-2xl shadow-red-700'
      whileHover={{scale:0.9}}> 
      <span className="text-white text-5xl tracking-tighter fFace pt-36">contact</span>
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
            <DialogTitle className="font-sans fFace text-6xl p-12">Kontakt</DialogTitle>
            <Description className="p-12">{lorem.generateSentences(1)}</Description>
            <p className='p-8'>{lorem.generateParagraphs(30)}</p>

          </DialogPanel>
        </motion.div>
      </Dialog>
      <div className='changer h-96 gap-8 m-4 aspect-square shadow-2xl'> 
      </div>
      <motion.div onClick={openPublikationen} className='flex bg-gradient-to-b from-[#fcff52] to-[#000] overflow-scroll h-96 gap-8 m-4 aspect-square shadow-2xl'
      whileHover={{scale:0.9}}> 
      <span className="text-5xl tracking-tighter absolute font-thin z-50 fFace ">pu<br/>blika<br/>tionen</span>
      <span className="text-5xl tracking-tighter absolute font-thin p-5 text-gray-500 z-40 text-opacity-55 fFace overflow-clip">pu<br/>blika<br/>tionen</span>
      <span className="text-5xl tracking-tighter absolute font-thin p-10 text-gray-400 z-30 text-opacity-55 fFace overflow-clip">pu<br/>blika<br/>tionen</span>
      <span className="text-5xl tracking-tighter absolute font-thin p-15 text-gray-300 z-30 text-opacity-55 fFace overflow-clip">pu<br/>blika<br/>tionen</span>
      <span className="text-5xl tracking-tighter absolute font-thin p-20 text-gray-200 z-30 text-opacity-10 fFace overflow-clip">pu<br/>blika<br/>tionen</span>
      <span className="text-5xl tracking-tighter absolute font-thin p-[18rem] pr-0 pb-0 text-white z-30 text-opacity-75 fFace overflow-clip">pu<br/>bli</span>
      </motion.div>
      <Dialog open={publikationen} onClose={() => setPublikationen(false)} className="relative z-[100]">
      <DialogBackdrop className="fixed inset-0 bg-[#000]/30" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-gradient-to-b from-[#fcff52] to-[#000] space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setPublikationen(false)}>
            <div className='w-10 aspect-square p-8'>
              <XMarkIcon className='text-white size-10'></XMarkIcon>
            </div>
            </button>
            <DialogTitle className="font-sans fFace text-6xl p-12">Publikationen</DialogTitle>
            <Description className="p-12">{lorem.generateSentences(1)}</Description>
            <p className='p-8'>{lorem.generateParagraphs(30)}</p>

          </DialogPanel>
        </motion.div>
      </Dialog>
      <motion.div onClick={openAktuelles} className='bg-[repeating-linear-gradient(to_bottom,#afafaf_0px,#afafaf_20px,#e5e6eb_20px,#e5e6eb_40px)] items-center flex-row overflow-hidden h-96 gap-8 m-4 aspect-square relative shadow-2xl'
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
            <DialogTitle className="font-sans fFace text-6xl p-12">Aktuelles</DialogTitle>
            <Description className="p-12">{lorem.generateSentences(1)}</Description>
            <p className='p-8'>{lorem.generateParagraphs(30)}</p>

          </DialogPanel>
        </motion.div>
      </Dialog>
      <Gitterbild />
      <motion.div onClick={openProjekte} className='h-96 gap-8 m-4 aspect-square bg-[#00869e] flex justify-between fFace shadow-2xl overflow-hidden'
      whileHover={{scale:0.9}}> 
      <motion.div 
      whileHover={{
        opacity:0,
        ease: "linear",
        delay: 10
      }}
      className="bg-gradient-to-b from-[#FA0D0D] to-[#940808] w-2/3 h-1/5 mt-48 rounded-r-full flex relative"></motion.div>
      <span className="font-sans text-white text-5xl tracking-tighter mt-36 fFace absolute">projekte</span>
      <div className="bg-gradient-to-b from-[#FA0D0D] to-[#940808] w-1/3 h-1/5 mt-10 rounded-l-full relative"></div>
      </motion.div>
      <Dialog open={projekte} onClose={() => setProjekte(false)} className="relative z-[100]">
      <DialogBackdrop className="fixed inset-0 bg-[#00869e]/30" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-gradient-to-b from-[#00869e] to-[#618BA7] space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setProjekte(false)}>
            <div className='w-10 aspect-square p-8'>
              <XMarkIcon className='text-white size-10'></XMarkIcon>
            </div>
            </button>
            <DialogTitle className="font-sans fFace text-6xl p-12">Projekte</DialogTitle>
            <Description className="p-12">{lorem.generateSentences(1)}</Description>
            <p className='p-8'>{lorem.generateParagraphs(30)}</p>

          </DialogPanel>
        </motion.div>
      </Dialog>
    </div>
    
  )
}
