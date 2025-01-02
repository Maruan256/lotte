//@ts-nocheck
import { useState } from 'react'
import './lehre.css'
import '../index.css'
import { motion } from 'motion/react'
import { div, style } from 'motion/react-client'
import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { LoremIpsum } from 'lorem-ipsum';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Button, Checkbox, Description } from '@headlessui/react';

export default function Lehre(){
    const [lehre, setLehre] = useState(false);
    function openLehre(){
        setLehre(true)
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
    return(
        <>
        <motion.div 
        whileHover={{scale:0.95}}
        onClick={openLehre}
        className='bg-light-blue-300 h-96 sm:gap-8 sm:m-4 aspect-square sm:shadow-2xl relative'>
            <div className='absolute inset-0 overflow-hidden pl-4'>
                <div className='lehreimage text-9xl pt-48 tracking-tighter text-[#310047]'>Lehre</div>
            </div>
            <motion.span
            initial="init"
            whileHover="hovered"
            className='fFace text-white relative overflow-hidden cursor-pointer text-5xl tracking-widest block'>
                <motion.div
                variants={{
                    init:{y: 0},
                    hovered:{y: "-100%"}
                }}>lehre</motion.div>
                <motion.div
                variants={{
                    init:{y: "100%"},
                    hovered:{y: 0}
                }}
                className='absolute inset-0'>lehre</motion.div>
            </motion.span>
            
        </motion.div>
        <Dialog open={lehre} onClose={() => setLehre(false)} className="relative z-[71]">
        <DialogBackdrop className="fixed inset-0 bg-[#618BA7]/30" />
          <motion.div 
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{duration: 0.5, ease: "easeInOut"}}
  
          className="fixed inset-0 flex w-screen items-center justify-center">
            <DialogPanel className="bg-light-blue-300 space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
              <button onClick={() => setLehre(false)}>
              <div className='w-10 aspect-square p-8'>
                <XMarkIcon className='text-white size-10'></XMarkIcon>
              </div>
              </button>
              <DialogTitle className="font-sans fFace text-6xl p-12 firstletter">Lehre</DialogTitle>
              <Description className="text-center fFace text-3xl pb-5 lowercase">VERZEICHNIS DER LEHRVERANSTALTUNGEN</Description>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Wintersemester 2024/25 (MLU Halle)</p>
                <p className="basis-2/3 text-start leading-6">Erzähltextanalyse (Methodenübung)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Wintersemester 2023/24 (LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Schreiben. Materialität und Medialität (Proseminar zus. mit Prof. Dr. Erika Thomalla (Buchwissenschaften)) <br />
Gemeinheiten. Kollektive Imaginationen (Hauptseminar) <br />
Roland Barthes: Mythologies (Lektürekurs)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Wintersemester 2022/23
                (LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Einführung in die Allgemeine und Vergleichende Literaturwissenschaft (vierstündiger Einführungskurs) <br />
Melancholie (Hauptseminar) <br />
Adalbert Stifter: Der Nachsommer (Lektürekurs) <br />
George Eliot: Middlemarch (Lektürekurs)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Sommersemester 2022(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Kritik, Essay und verwandte Formen (Proseminar zus. mit Marie Schmidt (Feuilleton-Redakteurin bei Süddeutsche Zeitung)) <br />
Literarische und psychoanalytische Familienromane (Hauptseminar zus. mit Dr. Hanna Sohns (Romanistik)) <br />
Michel Foucault: L’histoire de la sexualité I (Lektürekurs)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Wintersemester 2021/22(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">(Un)writing gender (Hauptseminar zus. mit Dr. Hanna Sohns (Romanistik)) <br />
Kammerspiel, Häuslichkeit, Alltag: Zur Politik privater Räume (Proseminar zus. mit Dr. Adrian Renner (Germanistik)) <br />
Michel Foucault: Les mots et les choses (Lektürekurs)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Sommersemester 2021(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Der Roman (Hauptseminar) <br />
Orientierung in der methodischen Vielfalt der AVL: Raumtheorien (Hauptseminar) <br />
Rainald Goetz: Abfall für alle (Lektürekurs)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Wintersemester 2020/21(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Poetiken der Menge (Proseminar zus. mit Dr. Hanna Sohns (Romanistik)) <br />
Prosa des Lebens (Proseminar) <br />
G.W.F. Hegel: Philosophie der Kunst (Lektürekurs)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Sommersemester 2020(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Geschlechterdebatten 1900/2000 (Proseminar zus. mit Dr. Adrian Renner (Germanistik)) <br />
Adalbert Stifter: Bunte Steine (Lektürekurs) <br />
Virginia Woolf: Mrs. Dalloway (Lektürekurs)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Wintersemester 2019/20(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Einführung in die Allgemeine und Vergleichende Literaturwissenschaft (vierstündiger Einführungskurs) <br />
                Stadtordnungen (Hauptseminar zus. mit Dr. Julian Müller (Soziologe))</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Sommersemester 2019(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Stillleben in Bild und Texte (Hauptseminar gemeinsam mit Dr. Léa Kuhn (Kunsthistorikerin)) <br />
                Tagebücher (Proseminar)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Wintersemester 2018/19(LMU MÜnchen)
                </p>
                <p className="basis-2/3 text-start leading-6">Orientierung in der methodischen Vielfalt der AVL: Literatur und Feminismus (Hauptseminar) <br />
Ästhetiken des Widerstands (Hauptseminar) <br />
James Joyce: Ulysses (Lektürekurs)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Sommersemester 2018(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Was heißt ‚Dekonstruktion‘? (Hauptseminar) <br />
Was ist Universität? (Proseminar) <br />
Dante: Divina Commedia (Lektürekurs)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Wintersemester 2017/18(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Einführung in die Allgemeine und Vergleichende Literaturwissenschaft (vierstündiger Einführungskurs) <br />
                Pierre Bourdieu: Homo academicus (Lektürekurs)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Sommersemester 2017(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Materialitäten (Hauptseminar zus. mit Dr. Lars Bullmann (AVL)) <br />
Von der Scham und vom Schämen (Proseminar) <br />
Deleuze/Guattari: Mille Plateaux (Lektürekurs)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Wintersemester 2016/17(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Literatur und Fotografie (Proseminar) <br />
                Marx lesen (Lektürekurs)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Sommersemester 2016(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Geschichte schreiben (Proseminar)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Sommersemester 2015(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Zwänge, Regeln, Spielräume in der literarischen Sprache (Proseminar) <br />
                Was ist ‚Realismus‘? (Proseminar)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Wintersemester 2014/15(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Freud: Trieb und Kultur (Proseminar zus. mit Johannes Kleinbeck)
                </p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Sommersemester 2014(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Alltag (Proseminar) <br />
                Michael Bachtin (Lektürekurs)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Wintersemester 2013/14(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Zwang als literarisches Verfahren. Oulipo und die Zeit ihrer Entstehung (Proseminar)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Sommersemester 2013(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Das Fragment als Form (Proseminar) <br />
                Friedrich Nietzsche (Lektürekurs)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Wintersemester 2012/13(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Jean Racine (Proseminar) <br />
                Franz Kafka (Lektürekurs zus. mit Dr. Lars Bullmann)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Sommersemester 2012(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Hermeneutiken (Proseminar) <br />
                G. W. F. Hegel: Vorlesungen über die Ästhetik (Lektürekurs zus. mit Dr. Lars Bullmann)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Wintersemester 2011/12(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Recht und Literatur (Proseminar)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Sommersemester 2011(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Allegorie (Proseminar) <br />
                Paul de Man (Lektürekurs)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-1/3 text-end pr-8">Sommersemester 2007(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Einführung in die AVL (Tutorium)</p>
            </div>
            </DialogPanel>
          </motion.div>
        </Dialog>
        </>
    )
}