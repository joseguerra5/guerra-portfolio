import Image from "next/image";


export default function Services() {
  return (
    <section className="min-h-screen w-full relative bg-black ">
      <div className="flex flex-col items-center justify-center pt-10 ">
        <h2 className="text-xl text-[#0A5AD9]">My Services</h2>
        <h1 className="text-3xl font-bold text-white text-center">How I can help your company</h1>
      </div>

      <div className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 gap-4 justify-center items-center mt-10 md:px-40 mb-2 m-auto px-3">
        <div className="w-90 h-40 border-gray-800 border-2 rounded-2xl p-3">
          <Image
            alt=""
            src="/Devices.svg"
            width={50}
            height={50}
            className="p-2"
          />
          <div className="flex flex-col p-2">
            <h3 className="text-white text-xl font-bold">Websites and Applications</h3>
            <p className="text-gray-400 text-sm line-clamp-3">Interface Development</p>
          </div>
        </div>

        <div className="w-90 h-40 border-gray-800 border-2 rounded-2xl p-3">
          <Image
            alt=""
            src="/Vector.svg"
            width={50}
            height={50}
            className="p-2"
          />
          <div className="flex flex-col p-2">
            <h3 className="text-white text-xl font-bold">API and Database</h3>
            <p className="text-gray-400 text-sm line-clamp-3">System Services Development</p>
          </div>
        </div>

        <div className="w-90 h-40 border-gray-800 border-2 rounded-2xl p-3">
          <Image
            alt=""
            src="/infinity.svg"
            width={50}
            height={50}
            className="p-2"
          />
          <div className="flex flex-col p-2">
            <h3 className="text-white text-xl font-bold">DevOps</h3>
            <p className="text-gray-400 text-sm line-clamp-3">Application Management and Infrastructure</p>
          </div>
        </div>

        <div className="w-90 h-40 border-gray-800 border-2 rounded-2xl p-3">
          <Image
            alt=""
            src="/grafico-de-barras.svg"
            width={50}
            height={50}
            className="p-2"
          />
          <div className="flex flex-col p-2">
            <h3 className="text-white text-xl font-bold">Data info</h3>
            <p className="text-gray-400 text-sm line-clamp-3">transforms real-world data into actionable metrics</p>
          </div>
        </div>

        <div className="w-90 h-40 border-gray-800 border-2 rounded-2xl p-3">
          <Image
            alt=""
            src="/rede.svg"
            width={50}
            height={50}
            className="p-2"
          />
          <div className="flex flex-col p-2">
            <h3 className="text-white text-xl font-bold">Social Application</h3>
            <p className="text-gray-400 text-sm line-clamp-3">Connecting people through a social platform</p>
          </div>
        </div>

        <div className="w-90 h-40 border-gray-800 border-2 rounded-2xl p-3">
          <Image
            alt=""
            src="/workflow.svg"
            width={50}
            height={50}
            className="p-2"
          />
          <div className="flex flex-col p-2">
            <h3 className="text-white text-xl font-bold">Task Workflows</h3>
            <p className="text-gray-400 text-sm line-clamp-3">Manage tasks efficiently from start to finish</p>
          </div>
        </div>


      </div>
    </section>
  );
}
