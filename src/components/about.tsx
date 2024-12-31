import { useState } from "react"
import { motion } from "motion/react";

import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Description } from '@headlessui/react';


const about = () => {
    const[about, setAbout] = useState(false);
    function openAbout(){
        setAbout(true)
      };
      
  return (
<>
<motion.div 
            whileHover={{scale:0.95}}
            onClick={openAbout} className='flex-col h-96 m-4 aspect-square lg:aspect-[2.1/1] bg-gradient-to-b from-[#B6E397] to-[#618BA7] items-end justify-end shadow-2xl'> 
            <div className="h-80 p-10 text-start">
    <span className="text-white fFace text-lg leading-3 lowercase font-bold">Ich bin Literaturwissenschaftlerin an der MLU Halle. Außerdem schreibe ich Literaturkritiken für die SZ, FAZ
und für die Zeitschrift Buchzeit.</span>
</div>
      <motion.a 
      initial="initial"
      whileHover="hovered"
      className="font-sans text-white text-5xl tracking-tighter fFace overflow-hidden relative block cursor-pointer text-end pb-5 pr-5">
      <motion.div 
      variants={{
        initial: {y: 0},
        hovered: {y: "-100%"},

      }}>
        about
      </motion.div>
      <motion.div 
      className='absolute inset-0 pr-5'
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
            <DialogTitle className="font-sans fFace text-6xl p-12 firstletter">About</DialogTitle>
            <Description className="text-center fFace text-4xl pb-5">cv</Description>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Seit Mai 2024</p>
                <p className="basis-2/3 text-start leading-6">Wissenschaftliche Mitarbeiterin im DFG-Projekt
                    Literarische Chronistik. Elemente einer Schreibweise der
                    deutschsprachigen Literatur des 20. Jahrhunderts am
                    Institut für Komparatistik an der Martin-Luther-Universität
                    Halle</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Seit Oktober 2023</p>
                <p className="basis-2/3 text-start leading-6">Mitglied des ERC-Projekts CAPONEU (The Cartography of
                    the Political Novel in Europe) am ZfL in Berlin</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Juli 2021 – März 2022</p>
                <p className="basis-2/3 text-start leading-6">Mitglied des DFG-Netzwerks Dispositiv der Menge</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Seit Oktober 2023</p>
                <p className="basis-2/3 text-start leading-6">Mitglied des ERC-Projekts CAPONEU (The Cartography of
                    the Political Novel in Europe) am ZfL in Berlin</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Seit April 2020</p>
                <p className="basis-2/3 text-start leading-6">Mitglied und Initiatorin der Cambridge-LMU-Kooperation
                    Rule of law/Rechtstaatlichkeit</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">März 2017 – März 2024</p>
                <p className="basis-2/3 text-start leading-6">Akademische Rätin a. Z. am Institut der AVL am Lehrstuhl
                von Prof. Dr. Robert Stockhammer an der LMU München</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Januar 2017</p>
                <p className="basis-2/3 text-start leading-6">Abschluss der Promotion: <i>Schreibformen. Georges Perecs
literarischer Materialismus</i> am Institut der AVL an der
LMU <br />Bewertet mit summa cum laude.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">März 2015</p>
                <p className="basis-2/3 text-start leading-6">Forschungsaufenthalt an der UC Berkeley
(Eingeladen von Tony Kaes.)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">September 2013</p>
                <p className="basis-2/3 text-start leading-6">Forschungsaufenthalt an der Association Georges Perec

Paris</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">September 2012</p>
                <p className="basis-2/3 text-start leading-6">Forschungsaufenthalt an der Public Library New York</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">März 2011 – Februar 2017</p>
                <p className="basis-2/3 text-start leading-6">Wissenschaftliche Mitarbeiterin am Institut der AVL am
Lehrstuhl von Prof. Dr. Robert Stockhammer an der LMU
München</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Februar 2011</p>
                <p className="basis-2/3 text-start leading-6">Magister Artium mit einer Magisterarbeit zu Gerechtigkeit
der Allegorie. Zu Recht und Gerechtigkeit bei Franz Kafka
und Walter Benjamin am Institut der AVL an der LMU
München
(Bewertet mit 1,05.)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Juli 2011 – Januar 2012</p>
                <p className="basis-2/3 text-start leading-6">Redaktionelle Mitarbeiterin der deutsch-französischen
online-Zeitschrift für Geistes- und Sozialwissenschaften
trivium</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">September 2008 – Mai 2009</p>
                <p className="basis-2/3 text-start leading-6">Wissenschaftliches Praktikum am Deutsches Forum für

Kunstgeschichte Paris</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">September 2008 – Mai 2009</p>
                <p className="basis-2/3 text-start leading-6">ERASMUS-Aufenthalt an der Sorbonne Paris</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">April 2006</p>
                <p className="basis-2/3 text-start leading-6">Praktikum am Erich-Maria-Remarque Friedenszentrum

Osnabrück</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Oktober 2005 – März 2011</p>
                <p className="basis-2/3 text-start leading-6">Studium der AVL, Kunstgeschichte und Nordischen

Philologie an der LMU München</p>
            </div>
            <Description className="text-center fFace text-2xl pb-5">stipendien/auszeichnungen</Description>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">2015 – 2018</p>
                <p className="basis-2/3 text-start leading-6">Mentee im Nachwuchswissenschaftlerinnen-Programm der
Exzellenz-Initiative der LMU (Mentorin: Prof. Dr. Annette
Keck)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">März 2015</p>
                <p className="basis-2/3 text-start leading-6">Stipendium der LMU für einen Forschungsaufenthalt an der

UC Berkeley</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">2008 – 2009</p>
                <p className="basis-2/3 text-start leading-6">ERASMUS-Stipendium für die Sorbonne Paris</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">2006 – 2011</p>
                <p className="basis-2/3 text-start leading-6">Stipendium des Max-Weber-Programms des Freistaates
Bayern zur Hochbegabtenförderung nach dem Bayerischen
Eliteförderungsgesetz</p>
            </div>
            <Description className="text-center fFace text-2xl pb-5 lowercase pt-5">HOCHSCHULARBEIT/
WISSENSCHAFTLICHE
MITGLIEDSCHAFT</Description>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8"></p>
                <p className="basis-2/3 text-start leading-6">ERASMUS-Koordinatorin der AVL an der LMU München</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8"></p>
                <p className="basis-2/3 text-start leading-6">Mitglied des Wissenschaftlichen Beirats von eisodos.
                Zeitschrift für Literatur und Theorie</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8"></p>
                <p className="basis-2/3 text-start leading-6">Mitglied des Auswahlkomitees von Lehre@LMU, einem
                Programm zur Förderung der Lehre an der LMU München</p>
            </div>
            <div className="flex m-5 bodytext text-xl pb-14">
                <p className="basis-1/3 text-end pr-8"></p>
                <p className="basis-2/3 text-start leading-6">Mittelbauvertreterin und Frauenbeauftragte in den
Auswahl-Kommissionen zu diversen Neubesetzungen von
Professuren an der LMU München</p>
            </div>
          </DialogPanel>
        </motion.div>
      </Dialog>
</>
  )
}

export default about