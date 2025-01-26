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
        <h1 className="text-2xl font-bold">hi, i am diana </h1>
        
        <div className="flex flex-col gap-4 text-[15px] max-w-[65ch]">
          <p>
            i'm a developer currently working in sales for a{" "}
            <a 
              href="https://www.beacon.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              beacon platform
            </a>.
          </p>

          <p>
            previously was a software engineer at{" "}
            <a 
              href="https://github.com/oslabs-beta/KMon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              kmon
            </a>{" "}
            — building an open-source apache kafka cluster monitoring tool.
          </p>

          <p>
            sometimes i write about interesting topics in crypto and ai on my{" "}
            <a 
              href="https://mirror.xyz/dianalokada.eth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              blog
            </a>.
          </p>

          <p>
            originally from ukraine, i spent 5 years living in spain before moving to the US in 2018. 
            currently live in new york.
          </p>

          <p>
            i'm a fan of early morning runs, keinemusic, all-in pod, 
            steaks and non-fiction/business books about political science/sociology/economics.
          </p>

        </div>

        <footer className="flex gap-8 items-center">
          <a
            className="hover:opacity-70 transition-opacity"
            href="https://x.com/dianalokada"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Image
              src="/twitter.svg"
              alt="Twitter"
              width={24}
              height={24}
              className="text-white"
            />
          </a>

          <a
            className="hover:opacity-70 transition-opacity"
            href="https://github.com/dianalokada"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Image
              src="/github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="text-white"
            />
          </a>

          <a
            className="hover:opacity-70 transition-opacity"
            href="https://www.linkedin.com/in/justdiana/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="text-white"
            />
          </a>

          <a
            className="hover:opacity-70 transition-opacity"
            href="https://www.strava.com/athletes/123763485"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Strava"
          >
            <Image
              src="/strava.svg"
              alt="Strava"
              width={24}
              height={24}
              className="text-white"
            />
          </a>
        </footer>
      </main>
    </div>
  );
}
