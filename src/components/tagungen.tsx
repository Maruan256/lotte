
//@ts-nocheck
import { useState, useEffect } from 'react'
import './tagungen.css'
import { LoremIpsum } from 'lorem-ipsum';
import { motion } from 'motion/react';
import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle,Description } from '@headlessui/react';
import { stringify } from 'querystring';


export default function Tagungen(){
    let teststring = "<p>hallo you <br/> and you</p>";
    const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
    let htmldata = '';
    let parser = new DOMParser;
    const[tagungen, setTagungen] = useState(false);
    function openTagungen(){
        setTagungen(true)
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
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://lottemitrestapi.local/wp-json/wp/v2/posts/9')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setPosts(data);
            htmldata = posts;
        })
        .catch((err) => {
            console.log(err.message);
        })
    }, []);

    return(
        <>
        <motion.div
        whileHover={{scale:0.95}} 
        onClick={openTagungen}
        className={'bg-[#0E6902] h-96 gap-8 m-4 aspect-square shadow-2xl overflow-hidden fFace text-5xl ' + (tagungen ? 'hidden' : 'block')}> 
        <motion.a
        initial="init"
        whileHover="hover"
        className='relativ aspect-square overflow-hidden block pt-40 pl-10 h-96'>
            <motion.div
            variants={{
                init:{y: 0},
                hover:{y: "-300%"}
            }}
            className='inset-0 text-5xl h-12 text-orange-100'>tagungen</motion.div>
            <motion.div
            variants={{
                init:{opacity:0},
                hover:{y:"-200%", opacity:1}
            }}
            className='absolute inset-y-40 text-5xl text-orange-300 h-12'>Tagungen</motion.div>
            <motion.div
            variants={{
                init:{opacity:0},
                hover:{y:"-100%", opacity:1}
            }}
            className='absolute inset-y-40 text-5xl text-orange-500 h-12'>Tagungen</motion.div>
            <motion.div
            variants={{
                init:{opacity:0},
                hover:{y:0, opacity:1}
            }}
            className='absolute inset-y-40 text-5xl text-orange-700 h-12'>Tagungen</motion.div>
            <motion.div
            variants={{
                init:{opacity:0},
                hover:{y:"100%", opacity:1}
            }}
            className='absolute inset-y-40 text-5xl text-orange-800 h-12'>Tagungen</motion.div>
            <motion.div
            variants={{
                init:{opacity:0},
                hover:{y:"200%", opacity:1}
            }}
            className='absolute inset-y-40 text-5xl text-orange-900 h-12'>Tagungen</motion.div>
            <motion.div
            variants={{
                init:{opacity:0},
                hover:{y:"300%", opacity:1}
            }}
            className='absolute inset-y-40 text-5xl text-deep-orange-900 h-12'>Tagungen</motion.div>
        </motion.a>
        </motion.div>
        <Dialog open={tagungen} onClose={() => setTagungen(false)} className="relative z-[71]">
      <DialogBackdrop className="fixed inset-0 bg-[#0E6902]/50" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-[#0E6902] space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setTagungen(false)}>
            <motion.div className='w-10 aspect-square p-8'
            whileHover={{scale: 1.2}}>
              <XMarkIcon className='text-lime-100 size-10'></XMarkIcon>
            </motion.div>
            </button>
            <DialogTitle className="font-sans fFace text-6xl p-12 text-lime-100 firstletter text-center">Tagungen</DialogTitle>
            <Description className="p-12 fFace text-3xl lowercase">konferenzen - workshops - buchklub</Description>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">European Centers and Peripheries in the Political Novel (CAPONEU Tagung) am ZfL
Berlin im Juni 2024 (zus. mit Kyung-Ho Cha, Patrick Eiden-Offe, Ivana Perica und
Christoph Schaub)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Buchklub: Romane fürs neue Jahrhundert im Literaturhaus Berlin seit Oktober 2023 (zus.
                    mit Patrick Eiden-Offe, Ivana Perica, Kyung-Ho Cha und Christoph Schaub)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">What is the Political Novel: Defining the Genre (CAPONEU Jahrestagung) am ZfL Berlin
im September 2023 (zus. mit Kyung-Ho Cha, Patrick Eiden-Offe, Ivana Perica und
Christoph Schaub)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Poetik des Fehlers an der LMU München im Juli 2022 (zus. mit Viktor Fritzenkötter)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Literary Acts of agency an der LMU München im Rahmen des Cambridge-LMU Research
                Partnership Rule of Law im Juli 2022 (zus. mit Ivana Perica)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Kammerlektüren (Lektüre-Reihe) in den Kammerspielen München in der Spielzeit
                2021/2022</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Die Maschine in der Dichtung an der LMU München im Februar 2021 (zus. mit Jan Niklas
                    Howe/Nachwuchsforschungsgruppe Kreativität und Genie)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Weibliche Kollektive an der LMU München im Rahmen des DFG-Netzwerks Dispositiv der
                Menge im November 2020 (zus. mit Hanna Sohns)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Arbeit am Feminismus in Kooperation mit den Kammerspielen München im März 2020</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Schreibweisen des Selbst in der Gegenwartsliteratur an der LMU München im Juli 2019
                (zus. mit Johannes Kleinbeck)</p>
            </div>
            <div className="flex m-5 bodytext text-xl pb-20">
                <p className="text-start pr-8">Geschichte schreiben an der LMU München im Juli 2016</p>
            </div>
          </DialogPanel>
        </motion.div>
      </Dialog>
        </>
    )
}