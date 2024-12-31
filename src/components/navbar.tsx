// @ts-nocheck 
import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
 import { EnvelopeIcon, EnvelopeOpenIcon, CameraIcon, BoltIcon } from "@heroicons/react/24/outline";
 import About from './about';
import { motion } from "motion/react";

import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { LoremIpsum } from 'lorem-ipsum';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Description } from '@headlessui/react';
export function StickyNavbar() {
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
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const [NavAbout, setNavAbout] = useState(false);
  function openNavAbout(){
    setNavAbout(true);
  };
  const [NavLehre, setNavLehre] = useState(false);
  function openNavLehre(){
    setNavLehre(true);
  };
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 items-end 2xl:mb-0 2xl:mt-0 2xl:flex-row 2xl:items-center 2xl:gap-6 2xl:justify-between">
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <button onClick={openNavAbout}>
        <a href="#" className="flex items-center">
          about
        </a>
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <button>
        <a href="#" className="flex items-center">
          aktuelles
        </a>
        </button>
      </Typography>
      <Dialog open={NavAbout} onClose={() => setNavAbout(false)} className="relative z-[71]">
      <DialogBackdrop className="fixed inset-0 bg-[#618BA7]/30" />
        <motion.div 
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}

        className="fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel className="bg-gradient-to-b from-[#B6E397] to-[#618BA7] space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setNavAbout(false)}>
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
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          forschung
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          publikationen
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          vorträge
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          vorträge
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          tagungen
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          projekte
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          kulturjournalismus
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <button onClick={openNavLehre}>
        <a href="#" className="flex items-center">
          lehre
        </a>
        </button>
      </Typography>
      <Dialog open={NavLehre} onClose={() => setNavLehre(false)} className="relative z-[71]">
        <DialogBackdrop className="fixed inset-0 bg-[#618BA7]/30" />
          <motion.div 
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{duration: 0.5, ease: "easeInOut"}}
  
          className="fixed inset-0 flex w-screen items-center justify-center">
            <DialogPanel className="bg-light-blue-300 space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
              <button onClick={() => setNavLehre(false)}>
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
            <div className="flex m-5 bodytext text-xl pb-14">
                <p className="basis-1/3 text-end pr-8">Sommersemester 2007(LMU MÜnchen)</p>
                <p className="basis-2/3 text-start leading-6">Einführung in die AVL (Tutorium)</p>
            </div>
            </DialogPanel>
          </motion.div>
        </Dialog>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <a href="#" className="flex items-center">
          kontakt
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar 
      blurred="false"
      color="black"
      className="sticky top-0 z-[60] h-max max-w-full rounded-none px-8 py-6 lg:px-8 lg:py-6 bg-white opacity-1 inset-0">
        <div className="flex items-center justify-between text-blue-gray-900">
          <IconButton
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-2.5 font-medium bg-white group"
            
          >
            <EnvelopeIcon className="size-6 bg-white text-black group-hover:hidden"/>
           <EnvelopeOpenIcon className="size-6 bg-white text-black hidden group-hover:block"/>
          </IconButton>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden">{navList}</div>
            
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          <IconButton
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-2.5 font-medium bg-white group"
            
          >
            <CameraIcon className="size-6 bg-white text-black group-hover:hidden"/>
           <BoltIcon className="size-6 bg-white text-black hidden group-hover:block"/>
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
    </div>
  );
}