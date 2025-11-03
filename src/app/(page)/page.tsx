import { Metadata } from "next";
import MainSection from "./main_section";
import Project from "./projects";
import Services from "./services";
import Connect from "./connect";
import Timeline from "./timeline";

export const metadata: Metadata = {
  title: "About me",
};

export default function Home() {
  return (
    <main className="w-full bg-black">
      <MainSection />
      <Project />
      <Timeline />
      <Services />
      <Connect />
    </main>
  );
}
