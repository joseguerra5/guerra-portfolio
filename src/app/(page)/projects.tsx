import Image from "next/image";


export default function Project() {
  return (
    <section className="min-h-screen w-full m-auto flex flex-col relative bg-[#141313] pb-10">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-xl text-[#0A5AD9]">My Project</h2>
        <h1 className="text-3xl font-bold text-white text-center">Check out my recent project</h1>
      </div>

      <div className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 gap-4 justify-center items-center mt-10 md:px-40 mb-2 m-auto px-3">
        <div className="w-90 h-75 bg-gray-800 rounded-2xl">
          <Image
            alt=""
            src="/chart.png"
            width={380}
            height={350}
            className="p-2 pb-0 rounded-3xl"
          />
          <div className="flex flex-col p-2">
            <h3 className="text-white text-xl font-bold">Dashboard</h3>
            <p className="text-gray-400 text-sm line-clamp-3">Our dashboard transforms real-world data into actionable metrics, providing clear insights that help drive informed decisions and optimize performance</p>
          </div>
        </div>

        <div className="w-90 h-75 bg-gray-800 rounded-2xl">
          <Image
            alt=""
            src="/cart.png"
            width={380}
            height={350}
            className="p-2 pb-0 rounded-3xl"
          />
          <div className="flex flex-col p-2">
            <h3 className="text-white text-xl font-bold">Shopping Cart</h3>
            <p className="text-gray-400 text-sm line-clamp-3">Easily select and customize the services you want to add to your shopping cart. This feature allows users to choose multiple services, view details and prices, and manage their selections seamlessly before checkout</p>
          </div>
        </div>
        <div className="w-90 h-75 bg-gray-800 rounded-2xl">
          <Image
            alt=""
            src="/calendar.png"
            width={380}
            height={350}
            className="p-2 pb-0 rounded-3xl"
          />
          <div className="flex flex-col p-2">
            <h3 className="text-white text-xl font-bold">Calendar</h3>
            <p className="text-gray-400 text-sm line-clamp-3">Stay on top of your schedule with our Calendar. Easily view, manage, and track all your appointments in one place, ensuring you never miss an important booking</p>
          </div>
        </div>
        <div className="w-90 h-75 bg-gray-800 rounded-2xl">
          <Image
            alt=""
            src="/schedule.png"
            width={380}
            height={350}
            className="p-2  pb-0 rounded-3xl"
          />
          <div className="flex flex-col p-2">
            <h3 className="text-white text-xl font-bold">Schedule</h3>
            <p className="text-gray-400 text-sm line-clamp-3">Select available time slots based on staff availability and existing appointments. This feature ensures that scheduling is accurate, preventing conflicts and optimizing your service workflow</p>
          </div>
        </div>
        <div className="w-90 h-75 bg-gray-800 rounded-2xl">
          <Image
            alt=""
            src="/responsive.jpg"
            width={380}
            height={350}
            className="p-2  pb-0 rounded-3xl"
          />
          <div className="flex flex-col p-2">
            <h3 className="text-white text-xl font-bold">Responsive</h3>
            <p className="text-gray-400 text-sm line-clamp-3">A fully responsive application designed to work seamlessly across all devices, ensuring an optimal user experience on desktops, tablets, and smartphones</p>
          </div>
        </div>
        <div className="w-90 h-75 bg-gray-800 rounded-2xl">
          <Image
            alt=""
            src="/social.jpg"
            width={380}
            height={350}
            className="p-2  pb-0 rounded-3xl"
          />
          <div className="flex flex-col p-2">
            <h3 className="text-white text-xl font-bold">External Integration</h3>
            <p className="text-gray-400 text-sm line-clamp-3">Seamless integrations with external APIs, including social login and cloud-based image storage solutions such as AWS, to enhance functionality and user experience</p>
          </div>
        </div>

      </div>
    </section>
  );
}
