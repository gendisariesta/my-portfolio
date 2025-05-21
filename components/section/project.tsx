"use client"
import Image from "next/image";
import CarouselVertical from "../carousel-vertical";
import { useEffect } from "react";

const projects = [
    {
        description: "This is project is for write your quran's journal.You can read quran too in this website. The API i use in from https://equran.id/apidev/v2",
        tool: ['PHP', 'Laravel', 'Mysql', 'Bootstrap'],
        image1: "./project1.PNG",
        image2: "./project2.PNG",
        link: "https://stresspredict.goolaya.my.id/",
    },
    {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In perferendis quae repellat facere optio officiis porro! Necessitatibus, magnam ea similique qui quis rem quod temporibus eum, veritatis voluptatem saepe illum.",
        tool: ['PHP', 'Laravel', 'Mysql', 'Bootstrap'],
        image1: "./project3.PNG",
        image2: "./project4.PNG",
        link: "https://stresspredict.goolaya.my.id/",
    }
]
export default function Project() {
   useEffect(() => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
            } else {
              entry.target.classList.remove("animate-in");
            }
          });
        },
        { threshold: 0.1 }
      );
  
      elements.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
    return (
        <div className="project-container" id="project">
            <h1 className="text-[64px] font-[--font-bodoni] text-center mb-[2rem] mt-3 animate-on-scroll">Let's See My Project</h1>
            <CarouselVertical data={projects} />
        </div>
    );
}
