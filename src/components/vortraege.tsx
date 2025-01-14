//@ts-nocheck
import { useState, useEffect } from 'react'
import './vortraege.css'
import { motion } from 'motion/react';
import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle,Description } from '@headlessui/react';

export default function Vortraege(){
    const[vortraege, setVortraege] = useState(false);
    function openVortraege(){
        setVortraege(true)
    };
    return(
        <>
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
      </motion.div>
        </>
    )
}