//@ts-nocheck
import { useState, useEffect } from 'react'
import './projekte.css'
import { motion } from 'motion/react';
import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle,Description } from '@headlessui/react';

export default function Projekte(){
    const[projekte, setProjekte] = useState(false);
    function openProjekte(){
        setProjekte(true)
    };
    return(
        <>
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
            <DialogTitle className="font-sans fFace text-6xl p-12 firstletter text-center">Projekte</DialogTitle>
            <Description className="p-20 text-3xl fFace lowercase">Habilitation</Description>
            <div className="flex-row m-5 bodytext text-xl">
                <p className='text-start p-10 text-2xl'>Alltag schreiben</p>
                <p className="text-start pl-8 pr-8">Fluchtpunkt meines Habilitationsprojekts ist die Frage nach der literarischen Darstellbarkeit
des Alltäglichen: ‚Was also ist der Alltag? Wenn niemand mich danach fragt, weiß ich es;
wenn ich es jemandem erklären soll, weiß ich es nicht.‘ Was Augustinus für die Zeit
behauptet, gilt aus drei Gründen auch für den Alltag. Erstens wird das Alltägliche unmittelbar
erfahren, zweitens resultiert diese Erfahrung notwendigerweise aus kollektiven
Zusammenhängen und drittens figuriert der Alltag strukturell als das Nicht-Ereignishafte.
Diese drei Eigenschaften führen zu einer sperrigen Opazität, deren Widerständigkeit
gegenüber begrifflichen Definitionen auf ein Terrain des Unbestimmten drängt. Diesem

„Dickicht des materiellen Lebens“ (Kracauer) kann nur eine Darstellungsform gerecht
werden, die weder den Alltag auf einen Begriff noch auf einen narrativen Plot bringt.
Während im 19. Jahrhundert der Alltag in die Literatur als Darstellungsproblem einbricht
(Auerbach), ist die Gegenwartsliteratur mit der permanenten Spektakularisierung des Alltags
in den sozialen Medien konfrontiert. Von Adalbert Stifter und George Eliot über Virginia
Woolf und Alfred Döblin bis zu Annie Ernaux und Karl-Ove Knausgård lässt sich
exemplarisch beobachten, auf welche Weise sich das Alltägliche je nach historischem
Kontext literarisch artikuliert. Die darin impliziten Poetiken sollen in meiner Arbeit lesbar
gemacht werden.</p><br />
            </div>
            <Description className="p-20 text-3xl fFace lowercase">laufende Projekte</Description>
            <div className="flex-row m-5 bodytext text-xl lowercase">
                <p className="text-start pl-8 pr-8">Literarische Chronistik der Moderne</p><br />
                <p className="text-start pl-8 pr-8"><a href="https://www.germanistik.uni-halle.de/komparatistik/forschungsschwerpunkte_-
projekte/2918165_3407869/">&gt;hier</a></p>
            </div>
            <div className="flex-row m-5 bodytext text-xl lowercase">
                <p className="text-start pl-8 pr-8">The Cartography of the political novel</p><br />
                <p className="text-start pl-8 pr-8"><a href="https://www.zfl-berlin.org/project/the-cartography-of-the-political-novel-in-europe.html">&gt;hier</a></p>
            </div>
            <div className="flex-row m-5 bodytext text-xl lowercase">
                <p className="text-start pl-8 pr-8">Arbeit am Feminismus</p><br />
                <p className="text-start pl-8 pr-8"><a href="https://arbeit-am-feminismus.de/">&gt;hier</a></p>
            </div>

          </DialogPanel>
        </motion.div>
      </Dialog>
        </>
    )
}