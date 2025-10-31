import Image from "next/image";

export default function MainSection() {
  return (
    <main className="min-h-screen w-full relative ">
      {/* Background */}
      <div className="absolute w-full h-full bg-[url('/background.jpg')] bg-cover bg-center z-10 -top-1/4"></div>
      <div className="absolute inset-0 bg-linear-to-t from-[#141313] -top-2/4 via-black/40 to-transparent z-20"></div>

      {/* Content */}
      <div className="absolute w-full h-full z-30 flex flex-col mt-10 items-center gap-8">
        {/* Profile */}
        <div className="rounded-full bg-black w-75 h-75 border-[#0A5AD9] border-2 relative">
          <div className="rounded-full w-73 h-73 object-cover overflow-hidden">
            <Image
              alt="Profile Picture Of José Guerra"
              src="/profile2.png"
              width={340}
              height={340}
            />
          </div>
          <Image
            alt=""
            src="/Code.svg"
            width={100}
            height={100}
            className="absolute -bottom-4 right-4"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col items-center text-center gap-6 z-40 text-white max-w-xl">
          <p>Building the difference. Coding the future</p>
          <h1 className="text-4xl font-bold">José Guerra - Full Stack Developer</h1>
          <p>
            Full Stack Developer with extensive experience in technologies such as Node.js and React, specialized in building scalable APIs and responsive applications. Passionate about clean code practices and agile methodologies.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center ">
          <span className="flex items-center gap-2 bg-gray-800 text-white rounded-full p-2">
            <Image alt="" src={"GitHub.svg"} className="w-8 h-8 fill-current text-white " width={30} height={30} /> GitHub
          </span>

          <span className="flex items-center gap-2 bg-gray-800 text-white rounded-full p-2 w-25 justify-center">
            <Image alt="" src={"CSS.svg"} className="w-8 h-8 fill-current text-white " width={30} height={30} />
            CSS
          </span>

          <span className="flex items-center gap-2 bg-gray-800 text-white rounded-full p-2">
            <Image alt="" src={"JavaScript.svg"} className="w-8 h-8 fill-current text-white " width={30} height={30} /> JavaScript
          </span>

          <span className="flex items-center gap-2 bg-gray-800 text-white rounded-full p-2">
            <Image alt="" src={"React.svg"} className="w-8 h-8 fill-current text-white " width={30} height={30} /> React
          </span>

          <span className="flex items-center gap-2 bg-gray-800 text-white rounded-full p-2">
            <Image alt="" src={"Node.js.svg"} className="w-8 h-8 fill-current text-white " width={30} height={30} /> NodeJs
          </span>

          <span className="flex items-center gap-2 bg-gray-800 text-white rounded-full p-2">
            <Image alt="" src={"NestJS.svg"} className="w-8 h-8 fill-current text-white " width={30} height={30} /> NestJs
          </span>

          <span className="flex items-center gap-2 bg-gray-800 text-white rounded-full p-2">
            <Image alt="" src={"nextjs-icon.svg"} className="w-8 h-8 fill-current text-white " width={30} height={30} /> NextJs
          </span>
        </div>
        <Image
          alt=""
          src="/arrow.svg"
          width={30}
          height={30}
          className="hidden md:flex my-4 animate-bounce"
        />
      </div>
    </main>
  );
}
