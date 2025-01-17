import { useState } from "react"
import { motion } from "motion/react";

import "preline/preline";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Description } from '@headlessui/react';

export default function Journalismus() {
    const [journalismus, setJournalismus] = useState(false);
    function openJournalismus(){
        setJournalismus(true)
    };
    
    return(
        <>
        <motion.div 
        onClick={openJournalismus}
        className='bg-[#FFEBF8] h-96 gap-8 m-4 aspect-square shadow-2xl relative'> 
            <div className="inset-0 overflow-hidden">
                <motion.span
                initial="init"
                whileHover="hover"
                className="pt-leading-9 inset-0 fFace text-8xl text-blue-gray-800 overflow-hidden absolute block cursor-pointer tracking-[rem] break-words h-96 justify-center items-center"
                >
                    <motion.div
                    variants={{
                        init:{y: 0},
                        hover:{y: "-100%"}
                    }}
                    className="absolute inset-0">
                        kulturjournalismus
                    </motion.div>
                    <motion.div
                    variants={{
                        init:{y: "100%"},
                        hover:{y: 0}
                    }}
                    className="absolute inset-0">
                        Kulturjournalismus
                    </motion.div>
                </motion.span>
                </div>
        </motion.div>
        <Dialog open={journalismus} onClose={() => setJournalismus(false)} className="relative z-[71]">
      <DialogBackdrop className="fixed inset-0 bg-[#000]/50" />
        <motion.div className="fixed inset-0 flex w-screen items-center justify-center"
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.5, ease: "easeInOut"}}>
          <DialogPanel className="bg-[#FFEBF8] space-y-4 h-screen text-black flex-row justify-end w-screen xl:w-1/2 md:w-2/3 overflow-scroll">
            <button onClick={() => setJournalismus(false)}>
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
        </motion.div>
      </Dialog>
        </>
    )
}