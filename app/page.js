import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <div className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <div className="mb-2">
            hi, my namy is diana alokhina
          </div>
        </div>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <div className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <p className="mb-2">
          Forte quadam die, cum sol radiis suis terram illustraret, senex philosophus in horto suo ambulabat. 
          Cogitationibus profundis mersus, contemplabatur naturam et miracula mundi circum se. 
          
          Rosae rubrae inter virentes frondes splendebant, aves suaves cantus edebant, et aura levis per arborum ramos susurrabat. 
          
          Subito, memoria veteris amici in mentem ei venit, qui olim sapientiam et consilium ei dederat.  
          </p>
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://x.com/dianalokada"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/arrow.svg"
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
            src="/arrow.svg"
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
          // key="linkedin-link"
        >
          <Image
            aria-hidden
            src="/arrow.svg"
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
            src="/arrow.svg"
            alt="Arrow icon"
            width={16}
            height={16}
          />
          strava
        </a>

      </footer>
    </div>
  );
}
