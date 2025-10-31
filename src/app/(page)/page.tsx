import { Metadata } from "next";
import MainSection from "./main_section";
import Project from "./projects";
import Services from "./services";
import Connect from "./connect";

export const metadata: Metadata = {
  title: "About me",
};

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black">
      <MainSection />
      <Project />
      <Services />
      <Connect />
    </main>
  );
}
