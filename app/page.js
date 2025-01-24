import { Inter } from 'next/font/google'
import Image from "next/image";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export default function Home() {
  return (
    <div className={`grid grid-rows-[1fr_auto] min-h-screen p-8 pb-20 sm:p-20 ${inter.className}`}>
      <main className="flex flex-col gap-12 items-start">
        <h1 className="text-2xl font-medium">hi, i am diana alokhina</h1>
        
        {/* <div className="flex flex-col gap-4 text-[15px] text-neutral-600"> */}
        <div className="flex flex-col gap-4 text-[15px]">

          <p>
            Forte quadam die, cum sol radiis suis terram illustraret, senex philosophus in horto suo ambulabat.
          </p>

            Rosae rubrae inter virentes frondes splendebant, aves suaves cantus edebant, et aura levis per arborum ramos susurrabat.

            Subito, memoria veteris amici in mentem ei venit, qui olim sapientiam et consilium ei dederat.

        </div>

        <footer className="flex gap-6 items-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://x.com/dianalokada"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/arrow2.svg"
              alt="Arrow icon"
              width={16}
              height={16}
            />
            twitter/x 
          </a>

          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/dianalokada"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/arrow2.svg"
              alt="Arrow icon"
              width={16}
              height={16}
            />
            github
          </a>

          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/justdiana/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/arrow2.svg"
              alt="Arrow icon"
              width={16}
              height={16}
            />
            linkedin
          </a>

          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.strava.com/athletes/123763485"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/arrow2.svg"
              alt="Arrow icon"
              width={16}
              height={16}
            />
            strava
          </a>
        </footer>
      </main>
    </div>
  );
}
