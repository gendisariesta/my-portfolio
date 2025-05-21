import About from "@/components/section/about";
import Hero from "@/components/section/hero";
import Project from "@/components/section/project";
import Skill from "@/components/section/skill";
import Experience from "@/components/section/experience";
import Contact from "@/components/section/contact";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Project />
    <Skill />
    <Experience />
    <Contact/>
    </>
  );
}
