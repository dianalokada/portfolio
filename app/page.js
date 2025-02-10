import { Inter } from 'next/font/google'
import Image from "next/image";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export default function Home() {
  return (
    <div className={`grid grid-rows-[1fr_auto] min-h-screen p-4 sm:p-8 md:p-20 ${inter.className}`}>
      <main className="flex flex-col gap-8 sm:gap-12 items-start max-w-full">
        <h1 className="text-xl sm:text-2xl font-bold">hi, i am diana </h1>
        
        <div className="flex flex-col gap-4 text-[14px] sm:text-[15px] max-w-[65ch] w-full">
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
            previously a software engineer at{" "}
            <a 
              href="https://github.com/oslabs-beta/KMon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              kmon
            </a>{" "}
            building an open source kafka cluster monitoring tool.
          </p>

          <p>
            sometimes i write about crypto and ai on {" "}
            <a 
              href="https://mirror.xyz/dianalokada.eth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              mirror
            </a>.
          </p>

          <p>
            originally from ukraine. spent 5 years in spain before moving to the US. 
            <br />
            currently in new york.
          </p>

          <p>
            i'm a fan of early morning runs, keinemusic, ping pong, allin pod, 
            steaks, nonfiction/business books about political science/sociology/economics.
          </p>

        </div>

        <footer className="flex gap-6 sm:gap-8 items-center flex-wrap">
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
              width={22}
              height={22}
              className="text-white sm:w-6 sm:h-6"
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
              width={22}
              height={22}
              className="text-white sm:w-6 sm:h-6"
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
              width={22}
              height={22}
              className="text-white sm:w-6 sm:h-6"
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
              width={22}
              height={22}
              className="text-white sm:w-6 sm:h-6"
            />
          </a>
        </footer>
      </main>
    </div>
  );
}
