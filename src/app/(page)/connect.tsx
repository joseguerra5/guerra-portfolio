import Image from "next/image";
import Link from "next/link";


export default function Connect() {
  return (
    <main className="min-h-screen w-full relative overflow-hidden mt-5">
      <div className="absolute w-full h-full bg-[url('/background.jpg')] bg-cover bg-center z-10 -bottom-1/4"></div>
      <div className="absolute inset-0 bg-linear-to-b from-black -top-1/4 via-black/40 to-transparent z-20"></div>

      <div className="absolute w-full h-full z-30 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center justify-center gap-2 px-2">
          <h2 className="text-xl text-[#0A5AD9]">Let{"'"}s Connect</h2>
          <h1 className="text-3xl font-bold text-white text-center">Did you like my work? How about we talk more?</h1>
          <h3 className="text-3xltext-center text-gray-500">Get in touch or follow me on social media</h3>
        </div>

        <div className="flex flex-col w-full px-2 md:w-xl">
          <Link href={"https://www.linkedin.com/in/joseguerra5"} target="_blank" className="w-full">
            <button className="bg-gray-800 rounded-xl text-white w-full px-6 py-3 border-2 border-transparent transition-colors mb-4 h-15 flex justify-between items-center hover:border-2 hover:border-blue-700">
              <span className="flex gap-4 items-center font-semibold text-md text-gray-400">
                <Image
                  alt=""
                  src="/LinkedinLogo.svg"
                  width={30}
                  height={30}
                />
                Linkedin</span>
              <Image
                alt=""
                src="/ArrowUpRight.svg"
                width={30}
                height={30}
              />
            </button>
          </Link>

          <Link href={"https://github.com/joseguerra5"} target="_blank" className="w-full">
            <button className="bg-gray-800 rounded-xl w-full text-white px-6 py-3 border-2 border-transparent transition-colors mb-4 h-15 flex justify-between items-center hover:border-2 hover:border-blue-700" >
              <span className="flex gap-4 items-center font-semibold text-md text-gray-400">
                <Image
                  alt=""
                  src="/GithubLogo.svg"
                  width={30}
                  height={30}
                />
                GitHub</span>
              <Image
                alt=""
                src="/ArrowUpRight.svg"
                width={30}
                height={30}
              />
            </button>
          </Link>

          <Link href={"mailto:jose.luiz.guerra1@gmail.com"} target="_blank" className="w-full">

            <button className="bg-gray-800 rounded-xl text-white px-6 py-3 border-2 border-transparent transition-colors mb-4 h-15 flex justify-between items-center hover:border-2  w-full hover:border-blue-700">
              <span className="flex gap-4 items-center font-semibold text-md text-gray-400">
                <Image
                  alt=""
                  src="/EnvelopeSimple.svg"
                  width={30}
                  height={30}
                />
                E-mail</span>
              <Image
                alt=""
                src="/ArrowUpRight.svg"
                width={30}
                height={30}
              />
            </button>
          </Link>

        </div>

      </div>
    </main>
  );
}
