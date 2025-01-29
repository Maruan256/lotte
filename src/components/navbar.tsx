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
  const[NavAktuelles, setNavAktuelles] = useState(false);
  function openNavAktuelles(){
    setNavAktuelles(true);
  };
  const[NavForschung, setNavForschung] = useState(false);
  function openNavForschung(){
    setNavForschung(true);
  };
  const[NavPublikationen, setNavPublikationen] = useState(false);
  function openNavPublikationen(){
    setNavPublikationen(true);
  };
  const[NavVortraege, setNavVortraege] = useState(false);
  function openNavVortraege(){
    setNavVortraege(true);
  };
  const[NavProjekte, setNavProjekte] = useState(false);
  function openNavProjekte(){
    setNavProjekte(true);
  };
  const[NavJournalismus, setNavJournalismus] = useState(false);
  function openNavJournalismus(){
    setNavJournalismus(true);
  };
  const[NavContact, setNavContact] = useState(false);
  function openNavContact(){
    setNavContact(true);
  };
  const[NavTagungen, setNavTagungen] = useState(false);
  function openNavTagungen(){
    setNavTagungen(true);
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
        <button onClick={openNavAktuelles}>
        <a href="#" className="flex items-center">
          aktuelles
        </a>
        </button>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <button onClick={openNavForschung}>
        <a href="#" className="flex items-center">
          forschung
        </a>
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <button onClick={openNavPublikationen}>
        <a href="#" className="flex items-center">
          publikationen
        </a>
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <button onClick={openNavVortraege}>
        <a href="#" className="flex items-center">
          vorträge
        </a>
        </button>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <button onClick={openNavTagungen}>
        <a href="#" className="flex items-center">
          tagungen
        </a>
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <button onClick={openNavProjekte}>
        <a href="#" className="flex items-center">
          projekte
        </a>
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <button onClick={openNavJournalismus}>
        <a href="#" className="flex items-center">
          kulturjournalismus
        </a>
        </button>
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

      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 fFace"
      >
        <button onClick={openNavContact}>
        <a href="#" className="flex items-center">
          kontakt
        </a>
        </button>
      </Typography>
    </ul>
  );
 
  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar 
      blurred="false"
      color="black"
      className="sticky top-0 z-[60] h-max max-w-full rounded-none px-8 py-6 lg:px-8 lg:py-6 bg-[white] opacity-1 inset-0">
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
      <Dialog open={NavAktuelles} onClose={() => setNavAktuelles(false)} className="relative z-[71]">
      <DialogBackdrop className="fixed inset-0 bg-[#90CAF9]/30" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-gradient-to-b from-[#333] to-[#aaa] space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setNavAktuelles(false)}>
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
      <Dialog open={NavForschung} onClose={() => setNavForschung(false)} className="relative z-[71]">
      <DialogBackdrop className="fixed inset-0 bg-[#000]/30" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-[#fcff52] space-y-4 h-screen text-black flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setNavForschung(false)}>
            <div className='w-10 aspect-square p-8'>
              <XMarkIcon className='text-black size-10'></XMarkIcon>
            </div>
            </button>
            <DialogTitle className="font-sans fFace text-6xl p-12 firstletter">Forschung</DialogTitle>
            <Description className="p-12 fFace lowercase text-3xl">Forschungsschwerpunkte</Description>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8"></p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Literaturen des Alltäglichen</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Oulipo</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Feministische Theorien</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Literatur und Fotografie</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Literatur und Recht (Law &amp; Literature)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">Deutsche, Französische und Skandinavische Literatur des 19., 20. und 21. Jahrhunderts</p>
            </div>

          </DialogPanel>
        </motion.div>
      </Dialog>
      <Dialog open={NavPublikationen} onClose={() => setNavPublikationen(false)} className="relative z-[100] ">
      <DialogBackdrop className="fixed inset-0 bg-[#000]/30" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center "
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-gradient-to-b from-[#fcff52] to-[#867a19] space-y-4 h-screen text-black flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setNavPublikationen(false)}>
            <div className='w-10 aspect-square p-8'>
              <XMarkIcon className='text-black size-10'></XMarkIcon>
            </div>
            </button>
            <DialogTitle className="font-sans fFace text-3xl md:text-4xl lg:text-5xl p-12 firstletter text-center">Publikationen</DialogTitle>
            <Description className="text-center fFace text-2xl pb-5 lowercase">Monografie</Description>
            <div className="flex m-5 bodytext text-xl">
                <p className="basis-3/4 text-end pr-8"> <i>Schreibformen. Georges Perecs literarischer Materialismus</i></p>
                <p className="basis-1/4 text-start leading-6">Paderborn: Brill Fink, 2023</p>
            </div>
            <Description className="text-center fFace text-2xl pb-5 lowercase">Herausgeberschaft</Description>

            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">Horst, Johanna-Charlotte/Patrick Eiden-Offe/Kyung-Ho Cha/Ivana Perica/Christoph
Schaub, What is the Political Novel: Defining the Genre, Open Research Europe <br/>[in
Vorbereitung]</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">Horst, Johanna-Charlotte/Vera Bachmann (Hg.), Weibliche Kollektive, München: Brill Fink, 2023.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">Horst, Johanna-Charlotte et. al. (Hg.), Unbedingte Universitäten. Bologna-Bestiarium, Berlin/Zürich: Diaphanes, 2013.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">Horst, Johanna-Charlotte et. al. (Hg.), Unbedingte Universitäten. Was ist Universität? Texte und Positionen zu einer Idee, Berlin/Zürich: Diaphanes, 2010.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">Horst, Johanna-Charlotte et. al. (Hg.), Unbedingte Universitäten. Was passiert? Stellungnahmen zur Lage der Universität, Berlin/Zürich: Diaphanes, 2010.</p>
            </div>
            
            <Description className="text-center fFace text-2xl pb-5 lowercase">Aufsätze</Description>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„‚Once Upon a time in the East‘. Western, Pop und Phänomenologie in Moritz von Uslars Deutschboden. Eine teilnehmende Beobachtung“, in: Text & Kritik [im Erscheinen].</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Everyday life in Middlemarch. On the narration of moral latencies in George Eliot“, in: Literary Acts of Agency, hg. v. Ivana Perica, Berlin/Boston: De Gruyter [im Erscheinen].</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Counter-speech. Materialist vocabularies“, in: Intra/Sections: Post-Anthropocentric Concepts of Multiplicity, hg. v. Jenny Haase-Knöpfle und Kathrin Thiele, Paderborn: Brill Fink [im Erscheinen].</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Was heißt: Sich im Alltag orientieren? Zur Pragmatik bei Daniel Defoe und Immanuel Kant“, in: Weimarer Beiträge, 1 (2024), 5-27 [https://weimarer-beitraege.de/wp-content/uploads/2024/04/WB_2024_1_Horst_prev.pdf].</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„‚infra-ordinaire‘. On the literary infrastructure of the everyday in Georges Perec“, in: GAM. Architecture Magazine, 12 (= Infra-Ordinary) (2024), 2-14.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Alle Tage, alle Jahre. Erinnern des Alltäglichen“, in: Zeiten des Alltäglichen, hg. v. Michael Gamper et.al., Berlin/Basel: Schwabe, 143-159.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Virginia Woolfs Atomismus. Zur Alltäglichkeit in Mrs. Dalloway“, in: Trouble everyday. Zum Schrecken des Alltäglichen, hg. v. Johannes Ungelenk/Anna Hordych, Paderborn: Brill Fink, 2023, 107-120 [https://brill.com/edcollchap/book/9783846767214/BP000012.xml].</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Poetiken des Fehlers. Zu Oulipo und glitch art“, in: Wie postdigital schreiben? Neue Verfahren der Gegenwartsliteratur, hg. v. Hanna Hamel/Eva Stubenrauch, Bielefeld: Transcript, 2023, 157-169 [https://www.transcript-open.de/doi/10.14361/9783839465615-008].</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Einleitung“, in: Weibliche Kollektive, hg. v. Johanna-Charlotte Horst und Vera Bachmann, Paderborn: Brill Fink, 2023, IX-IXI (zus. mit Vera Bachmann) [https://brill.com/edcollchap/book/9783846766811/front-7.xml].</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Kollektive schreiben. Über die Poetik des Versammelns bei Annie Ernaux“, in: Weibliche Kollektive, hg. v. Johanna-Charlotte Horst und Vera Bachmann, Paderborn: Brill Fink, 2023, 17-31.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Friedrich Engels’ epische Naivität. Zum Materialismus des Alltäglichen in Die Lage der arbeitenden Klasse in England“, in: Friedrich Engels und die Literatur, hg. v. Anne-Rose Meyer/Wolfgang Lukas, Bielefeld: Aisthesis, 2023, 175-195.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„#momlife“, in: Rauchzeichen (2022) [https://rauchzeichen-online.de/johanna-charlotte-horst-momlife/].</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„‚I prefer not to… say it myself‘: On Georges Perec’s Composite Work Un homme qui dort“, in: Cento-Texts in the Making. Aesthetics and Poetics of Cento-Technique from Homer to Zong!, hg. v. Manuel Baumbach, Trier: Wissenschaftlicher Verlag Trier, 2022, 103-113.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Stillleben (Harun Farocki)“, in: Berühren Lesen, hg. v. Hanna Sohns/Johannes Ungelenk, Berlin: August, 2021, 206-213.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Stilübungen”, in: Dante Alighieri: 1 Sonett. 30 Übersetzungen, hg. v. Judith Kasper/Andrea Renker/Fabien Vitali, Berlin/Wien: Turia+Kant, 2021, 64-70.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Einkaufszettel lesen. Zur medialen Erwärmung einer kleinen Alltagsform“, in: Archiv für Mediengeschichte, Bd. 19 ( = Kleine Formen) (2021), 21-30.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Politik der theatralen Wahrnehmung. Zum Materialismus in Peter Weiss’ Marat/Sade“, in: Peter Weiss Jahrbuch, Bd. 28 (2019), 71-96.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Damaged Words and Closed Houses: Everyday World and Memory Narratives in Georges Perec“, in: Narrative(s) in Conflict, hg. v. Wolfgang Müller-Funk/Clemens Ruthner, Berlin/Boston: De Gruyter, 2017, 111-131.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Ich denke also ordne ich (nicht)...“, in: komparatistik online, Bd. 1 ( = Imaginäre Topographien und andere kulturelle Ordnungen) (2015) [https://www.komparatistik-online.de/index.php/komparatistik_online/article/view/157].</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Bestiarium“, in: Unbedingte Universitäten. Bologna-Bestiarium, hg. v. Johanna-Charlotte et. al. Horst, Berlin/Zürich: Diaphanes, 2013, 43-47.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8"></p>
            </div>
            
            <Description className="text-center fFace text-2xl pb-5 lowercase">Lexikonartikel - Rezensionen - Kleinere Arbeiten</Description>

            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Mythos“, in: Handbuch Roland Barthes, hg. v. Angela Oster, Heidelberg: Metzler, 2025 [im Erscheinen]. </p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Vibrierende Zeiten“, in: Chronistische Schreibweisen (online Blog) (2024) [https://chronistik.germanistik.uni-halle.de/2024/07/vibrierende-zeiten/].</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Weltschmerz“, in: Welt-Komposita. Ein Lexikon, hg. v. Robert Stockhammer/Thomas Erthel, Leiden: Wilhelm Fink, 2020, 202-205.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Hannah Arendt: The Modern Challenge to Tradition: Fragmente eines Buchs, hg. v. Barbara Hahn und James McFarland (Rezension)“, in: arcadia. International Journal of Literary Culture, Bd. 55 (1) (2020), 142-145 [https://www.degruyter.com/document/doi/10.1515/arcadia-2020-0010/html].</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Jeu d’Oulipo/Obama’s Party“, in: [kon], Bd. 3 ( = Spiel) (2016), 14-15.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Oskar Walzel“, in: Kunstgeschichten 1915. 100 Jahre Heinrich Wölfflin: Kunstgeschichtliche Grundbegriffe, hg. v. Ulrich Pfisterer/Matteo Burioni/Burcu Dogramaci, München: Verlag des Zentralinstituts für Kunstgeschichte, 2015, 357-359.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">Radio-Interview in m94,5 im Wissenschaftsmagazin „Kortex“, 2015.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Mein halbes Jahr Literatur. Claude Simon, Lew Tolstoi und Theodor W. Adorno“, in: Polar 19 (2015), 130-131.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Mein halbes Jahr Literatur. Franz Kafka, Michel Leiris und Gilles Deleuze“, in: Polar 18 (2015), 130-131.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">„Mein halbes Jahr Literatur. Georges Perec, Gustave Flaubert und Karl Marx“, in: Polar 17 (2014), 128-129.</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8"></p>
            </div>
            <Description className="text-center fFace text-2xl pb-5 lowercase">Übersetzungen</Description>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-end pr-8">Weil, Simone: „Beginnen wir den Trojanischen Krieg nicht von Neuem“, in: Krieg und Gewalt. Essays und Aufzeichnungen, Berlin/Zürich: Diaphanes, 37-57 (zus. mit Anouk Luhn).</p>
            </div>
            <div className="flex m-5 bodytext text-xl pb-16">
                <p className="text-end pr-8">Granel, Gérard: „Ein Appell an diejenigen, die mit der Universität zu tun haben“, in: Unbedingte Universitäten. Was ist Universität? Texte und Positionen zu einer Idee, Berlin/Zürich: Diaphanes, 231-247 (zus. mit Anouk Luhn).</p>
            </div>
          </DialogPanel>
        </motion.div>
      </Dialog>
      <Dialog open={NavVortraege} onClose={() => setNavVortraege(false)} className="relative z-[100]">
      <DialogBackdrop className="fixed inset-0 bg-[#Eb00df]/30" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-gradient-to-b from-[#00869e] to-[#Eb00df] space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setNavVortraege(false)}>
            <div className='w-10 aspect-square p-8'>
              <XMarkIcon className='text-white size-10'></XMarkIcon>
            </div>
            </button>
            <DialogTitle className="font-sans fFace text-6xl p-12 firstletter">Vorträge</DialogTitle>
            <Description className="p-12"></Description>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„#tradwife. Kritik einer Lebensform“ auf dem Workshop Im Streit verstrickt an der MLU Halle im Dezember 2024</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„#familylife. Zu den kollektiven Rahmen medialer Intimität“ auf dem Workshop Best of. Praktiken des Empfehlens in Medienkulturen der Gegenwart an der LMU München im Mai 2024</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Kafka revisited with Althusser“ auf der Konferenz Literature and the Rule of Law /Literatur und Rechtsstaat – Aesthetic Negotiations an der Cambridge University im Januar 2024</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Arbeit am Gemeinen“ auf dem Workshop Kippfigur Gemeinplatz: Paradoxien der Doxa an der TU Dresden im November 2023</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Revolutionäre Lokomotiven. Georges Perecs Arbeit am Marxismus“ auf der Konferenz 1923. Sattelzeit der Revolution am ZfL Berlin im Oktober 2023</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Gemeine Plätze. Zur literarischen Infrastruktur des Gewöhnlichen“ bei den Graz Architecture Lectures 2023. The Infraordinary an der TU Graz im April 2023</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Alle Tage, alle Jahre. Erinnern des Alltäglichen“ auf der Konferenz Zeiten des Alltäglichen an der FU Berlin im Oktober 2022</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Arbeit am glitch“ auf dem Workshop Poetik des Fehlers an der LMU München im Juli 2022 (zus. mit Viktor Fritzenkötter)</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Mittelmaß in Middlemarch. Zur Erzählbarkeit sittlicher Latenzen bei George Eliot“ auf der Konferenz Literary Acts of Agency an der LMU München im Juli 2022</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Vor/Neben/Unter dem Gesetz. Zum veränderten Verhältnis von Ideologie und Sittlichkeit“ auf dem Workshop Althussers Staatsapparate heute an der LMU München im Mai 2022</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Materialistische Vokabularien: Dialektik statt Intra-Aktion, Naturalismus oder Natur, Totalität versus Pluralismus“ auf dem Workshop Intra/Sections (Schitt/Mengen): Post-Anthropocentric Concepts of Multiplicity am ici Berlin im März 2022</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Zahlen erzählen. Zum Statistischen bei Alphonse Quetelet, Friedrich Engels und Alfred Döblin“ auf der Konferenz Menge und Armut an der Universität Gießen im November 2021</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Alltäglicher Atomismus. ‚trouble‘ bei Virginia Woolf und Karl Ove Knausgård“ auf der Konferenz Trouble everyday an der Universität Potsdam im Juli 2021</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„‚À la recherche du temps commun‘. Erinnern bei Annie Ernaux“ auf dem online-Workshop Weibliche Kollektive an der LMU München und der Universität Regensburg im Mai 2021</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Performanzen: weiblich, feministisch, etc.“ auf der Tagung Arbeit am Feminismus an der LMU München in Kooperation mit den Kammerspielen München im März 2021</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„2423: […] wo ein wipfel ist, ist auch ein weg‘. Zu Georges Perecs Computersimulation Die Maschine“ auf dem online-Workshop Die Maschine in der Dichtung an der LMU im Februar 2021</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„‚I prefer not to... say it myself ‘. On Georges Perecs composite work Un homme qui dort“ auf dem Interdisciplinary Workshop on the Technique of Cento Texts an der Ruhr-Universität Bochum November 2020</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Camera Clara. Engels’ Materialismus des Alltäglichen“ auf dem Kongress Friedrich Engels – Die Aktualität eines Klassikers an der Bergischen Universität Wuppertal im Februar 2020</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Beschreiben, nicht Erzählen. Zur Literatur des Alltäglichen“ an der Österreichischen Akademie der Wissenschaften Wien im Februar 2020</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Orientierungskurs. Kant und Derrida zum Grund der Universität“ auf der Konferenz Der Geist der Universität an der Universität Bielefeld im Oktober 2019</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Eigenzeit des Alltäglichen“ auf der Internationalen Sommerschule: Ästhetische Eigenzeiten. Zeit und Darstellung in der polychronen Moderne des DFG-Schwerpunktprogramms 1688 Ästhetische Eigenzeiten. Zeit und Darstellung in der polychronen Moderne an der Friedrich-Schiller-Universität Jena im Juli 2019</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Im Kräfteparallelogramm. Zur Geschichtsschreibung bei Hannah Arendt“ auf dem Workshop The gap between Past and Future: Hannah Arendt and the Politics of Time veranstaltet von der LMU und dem ici Berlin an der LMU München im Juli 2019</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Ding, Ware, Fetisch. Inszenierungen des Banalen“, Gastvortrag an dem Institut für Theorie/Zürcher HdK und dem Deutschen Seminar der Universität Zürich im Mai 2019</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Judith Butler und Erich Auerbach“ auf der Konferenz Genre trouble und kein Ende an der Friedrich Schlegel Graduiertenschule für literaturwissenschaftliche Studien an der FU Berlin im Mai 2019</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Ästhetiken des Widerstands. Peter Weiss mit Peter Watkins La commune und Tavianis Cesare deve morire“ auf den Peter Weiss Tagen an der LMU München im November 2018</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Perecs akrobatische Buchstäblichkeit“ auf dem Workshop Rhetoriken der Bewegung an der Friedrich Schlegel Graduiertenschule für literaturwissenschaftliche Studien an der FU Berlin im Oktober 2018</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Literarische Buch-Haltungen. Ökonomien des Alltäglichen bei Annie Ernaux und Karl Ove Knausgård“ auf der Sommerschule Poetik des Überflusses an der Universität Zürich im September 2018</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Minima historia. Geschichtsschreibung bei Michel Foucault und Annie Ernaux“ auf dem Workshop Epistemologien des Restes an der Friedrich Schlegel Graduiertenschule für literaturwissenschaftliche Studien an der FU Berlin im Oktober 2018</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Dickichte des materiellen Lebens. Alltagspoetik bei Duras und Reitz“ auf der Sommerakademie Epos und Episode am ZfL Berlin im September 2018</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Gattungsästhetische Obdachlosigkeit“ auf der Sommerschule Genre trouble an der Friedriche Schlegel Graduiertenschule für literaturwissenschaftliche Studien an der FU Berlin im Juli 2018</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Mikrologien des Alltags“ auf dem 18. Workshop des Instituts für AVL ( = Alltag) an der LMU München im Juli 2017</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„La rue Vilin. Erinnern und das ‚infra-ordinaire‘ bei Georges Perec“ an der Heinrich-Heine Universität Düsseldorf (Gastvortrag in dem Oberseminar von Prof. Dr. Roger Lüdeke und Prof. Dr. Reinhold Görling) im Juli 2015</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Georges Perec et Walter Benjamin – Des Historiographes matérialistes“ am Deutschen Forum für Kunstgeschichte Paris im Mai 2015</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Constraint as Poetological Program in Georges Perec“ an der UC Berkeley (Gastvortrag) im März 2015</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Zwang als Kritik bei Georges Perec“ auf der Konferenz DisPositionen an der Universität Wien im November 2014</p>
            </div>
            <div className="flex m-5 bodytext text-xl">
                <p className="text-start pr-8">„Der afformative Charakter der Kultur. Studentenprotest in Georges Perecs Un homme qui dort“ auf dem 12. Workshop des Instituts für AVL ( = 1967 und/oder 1968) an der LMU München im Juli 2014</p>
            </div>
            <div className="flex m-5 bodytext text-xl pb-16">
                <p className="text-start pr-8">„Literatur und Gewalt“ auf dem Studentenkongress der Komparatistik an der LMU München (Key-note) im April 2012</p>
            </div>
            

          </DialogPanel>
        </motion.div>
      </Dialog>
      <Dialog open={NavProjekte} onClose={() => setNavProjekte(false)} className="relative z-[100]">
      <DialogBackdrop className="fixed inset-0 bg-[#00869e]/30" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-gradient-to-b from-[#00869e] to-[#618BA7] space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setNavProjekte(false)}>
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
      <Dialog open={NavJournalismus} onClose={() => setNavJournalismus(false)} className="relative z-[71]">
      <DialogBackdrop className="fixed inset-0 bg-[#000]/50" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-[#FFEBF8] space-y-4 h-screen text-black flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setNavJournalismus(false)}>
            <motion.div className='w-10 aspect-square p-8'
            whileHover={{scale: 1.2}}>
              <XMarkIcon className='text-black size-10'></XMarkIcon>
            </motion.div>
            </button>
            <DialogTitle className="font-sans fFace text-6xl p-12 firstletter break-all">Kulturjournalismus</DialogTitle>
            <Description className="p-12 fFace text-3xl">journalistische Arbeiten</Description>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Paul Divjak: Winken. Hommage an eine bewegende Geste“ in: Buchkultur, 213 (2024).</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Alyson K. Spurgas/Zoë C. Meleo-Erwin: Dekolonisiert Selfcare“ in: Buchkultur, 213 (2024).</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Nicole Seifert: Einige Herrn sagten etwas dazu. Die Autorinnen der Gruppe 47“, in: Buchkultur, 212 (2024).</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Wo die Spitze des Zirkels anzusetzen ist. Erzählung als Essay: Der dänische Schriftsteller Søren Ulrik
Thomsen schreibt in ‚Store Kongensgade 23‘ über seine verstorbene Mutter“, in: Frankfurter Allgemeine
Zeitung, 29.02.2024.</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Vom Pfarrhausgarten ins Marxistenparadies. Alles eine Frage der literarischen Technik: David Bellos’
                materialreiche Biographie zu Georges Perec“, in: Frankfurter Allgemeine Zeitung, 05.09.2023.</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Marie Darrieussecq: Unser Leben in den Wäldern“, in: Akzente, 3 ( = Gute Literatur) (2022), 17.</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Der Blick zurück. Linda Boström ist Schriftstellerin und die Ex-Frau von Karl Ove Knausgård. Ihr Roman
                ‚Oktoberkind‘ erzählt vom traurigen Ende einer Ehe“, in: Süddeutsche Zeitung, 20./21.08.2022.</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Unabdinglich. Die weibliche Menschheitsgeschichte: Erzählt anhand von 100 Gegenständen“, in:
                Buchkultur, 104 (2022), 50.</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Wird böse enden. Die Welt ist außer Rand und Band, aber der Alltag muss weitergehen: Karl Ove
Knausgårds ‚Der Morgenstern‘ ist ein Roman für alle, die mit seiner Ich-Beschau bisher nichts anfangen
konnten“, in: Süddeutsche Zeitung, 13.04.2022.</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Eine Welt für sich. Was in der Paris Bar passiert, bleibt in der Paris Bar oder zumindest in diesem roten
Schuber: Michel Würthle vertraut das Innenleben seines berühmten Lokals sechs Bildbänden an“, in:
Süddeutsche Zeitung, 01.02.2022.</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">Lesung und Gespräch mit Édouard Louis an den Kammerspielen München (auf englisch), 26.11.2021.</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Theorie für die Wirklichkeit. Die Denkrichtung des ‚Neuen Materialismus‘ wird immer populärer.
Klimakrise und Naturkatastrophen dienen ihr als Beweise dafür, dass die Realität doch nicht sozial konstruiert
ist. Lässt sich die Gegenwart so tatsächlich besser verstehen?“, in: Süddeutsche Zeitung, 19.08.2021.</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Überall im Exil. Die erste Biografie der Schriftstellerin und Philosophin Susan Taubes“, in: Süddeutsche
                Zeitung, 03.03.2021.</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Entkleiden Sie mich! Eine feine Handbibliothek sammelt Texte der Romantik“, in: Süddeutsche Zeitung,
                24.11.2020.</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Die poetische Arbeiterklasse. Oulipo wollte mehr sein als reine Sprachübung. Der Ansatz der Gruppe war
                vor allem politisch-revolutionär“, in: Süddeutsche Zeitung, 24.11.2020.</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Zauber der Sackgassen. Plötzlich diese Leere: Im Frühjahr 2020 hat Tim Oehler das nächtliche Hamburg

fotografiert“, in: Süddeutsche Zeitung, 02.11.2020.</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Risse im Wahren. Die Begierde nach der 13-Jährigen: Karl Ove Knausgårds Debütroman ‚Aus der Welt‘ ist
                auf Deutsch erschienen. Er muss und kann skandalös bleiben“, in: Süddeutsche Zeitung, 24./25.10.2020.</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Gewohnheit ist zweite Natur. Zu Hegel“, in: Süddeutsche Zeitung, 27.08.2020.</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Zauber der Ablenkung. Wie war das wirklich mit Im-Zimmer-Bleiben? Warum die ‚Pensées‘ des Blaise
                Pascal jetzt das richtige Buch sind“, in: Süddeutsche Zeitung, 26.03.2020 (zus. mit Marie Schmidt).</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase">
                <p className="text-start pr-8"><a href="">„Tyrannei ohne Tyrannen. Schon ganz nah: Die dystopische Zukunft von Marie Darrieussecqs Roman ‚Unser
                Leben in den Wäldern‘“, in: Süddeutsche Zeitung, 30.07.2019.</a></p>
            </div>
            <div className="flex m-5 bodytext text-xl lowercase pb-16">
                <p className="text-start pr-8"><a href="">„Von Stil und feiner Moral. Ist der britische Schriftsteller Martin Amis das konservative Enfant terrible, als
das er sich in öffentlichen Debatten gibt? Eine von Daniel Kehlmann besorgte Sammlung seiner Essays bringt
es an den Tag“, in: Süddeutsche Zeitung, 30.01.2019.</a></p>
            </div>

          </DialogPanel>
          <Dialog open={NavTagungen} onClose={() => setNavTagungen(false)} className="relative z-[71]">
      <DialogBackdrop className="fixed inset-0 bg-[#0E6902]/50" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-[#0E6902] space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setNavTagungen(false)}>
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
        </motion.div>
      </Dialog>
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
        <Dialog open={NavTagungen} onClose={() => setNavTagungen(false)} className="relative z-[71]">
      <DialogBackdrop className="fixed inset-0 bg-[#0E6902]/50" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-[#0E6902] space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setNavTagungen(false)}>
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
      <Dialog open={NavContact} onClose={() => setNavContact(false)} className="relative z-[100]">
        <DialogBackdrop className="fixed inset-0 bg-[#Eb00df]/30" />
          <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{duration: 0.5, ease: "easeInOut"}}>
            <DialogPanel className="bg-gradient-to-b from-[#00869e] to-[#Eb00df] space-y-4 h-screen text-white flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
              <button onClick={() => setNavContact(false)}>
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
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
    </div>
  );
}