//@ts-nocheck
import { useState, useEffect } from 'react'
import './tagungen.css'
import { LoremIpsum } from 'lorem-ipsum';
import { motion } from 'motion/react';
import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle,Description } from '@headlessui/react';
import { stringify } from 'querystring';

export default function Publikationen(){
    const[publikationen, setPublikationen] = useState(false);
    function openPublikationen(){
        setPublikationen(true) 
    };
    return(
        <>
              <motion.div onClick={openPublikationen} className='flex bg-gradient-to-b from-[#fcff52] to-lime-900 overflow-scroll h-96 gap-8 m-4 aspect-square shadow-2xl'
      whileHover={{scale:0.9}}> 
      <span className="text-5xl tracking-tighter absolute font-thin z-50 fFace ">pu<br/>blika<br/>tionen</span>
      <span className="text-5xl tracking-tighter absolute font-thin p-5 text-gray-500 z-40 text-opacity-55 fFace overflow-clip">pu<br/>blika<br/>tionen</span>
      <span className="text-5xl tracking-tighter absolute font-thin p-10 text-gray-400 z-30 text-opacity-55 fFace overflow-clip">pu<br/>blika<br/>tionen</span>
      <span className="text-5xl tracking-tighter absolute font-thin p-15 text-gray-300 z-30 text-opacity-55 fFace overflow-clip">pu<br/>blika<br/>tionen</span>
      <span className="text-5xl tracking-tighter absolute font-thin p-20 text-gray-200 z-30 text-opacity-10 fFace overflow-clip">pu<br/>blika<br/>tionen</span>
      <span className="text-5xl tracking-tighter absolute font-thin p-[18rem] pr-0 pb-0 text-white z-30 text-opacity-75 fFace overflow-clip">pu<br/>bli</span>
      </motion.div>
      <Dialog open={publikationen} onClose={() => setPublikationen(false)} className="relative z-[100] ">
      <DialogBackdrop className="fixed inset-0 bg-[#000]/30" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center "
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-gradient-to-b from-[#fcff52] to-[#867a19] space-y-4 h-screen text-black flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setPublikationen(false)}>
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
        </>
    )
}