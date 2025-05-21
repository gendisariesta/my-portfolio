"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

type Project = {
  description: string;
  tool: string[];
  link: string;
  image1: string;
  image2: string;
};

type CarouselProps = {
  data: Project[];
};

export default function CarouselVertical({ data }: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const next = () =>
    setCurr((curr) => (curr === data.length - 1 ? 0 : curr + 1));
  const prev = () =>
    setCurr((curr) => (curr === 0 ? data.length - 1 : curr - 1));

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll, .project-animation");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "project-animation-in");
          } else {
            entry.target.classList.remove("animate-in", "project-animation-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex w-full gap-5 relative pt-5 pb-[3rem] h-[370px] overflow-hidden">
      <div className="absolute bottom-0 flex items-center mt-[2rem]">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow border-2 mr-2 hover:bg-black"
        >
          <ChevronLeft size={30} className="hover:text-white" />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow border-2 ml-2 hover:bg-black"
        >
          <ChevronRight size={30} className="hover:text-white" />
        </button>
      </div>

      {data.map((project, index) => (
        <div
          key={index}
          className="flex gap-5 min-w-full transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          <div className="carousel-body">
            <p className="carousel-description animate-on-scroll">
              {project.description}
            </p>
            <div className="flex flex-wrap mt-4 carousel-description">
              {project.tool.map((toolItem) => (
                <p
                  key={toolItem}
                  className="border-2 border-black rounded-full px-4 py-1 me-2 mt-2 animate-on-scroll"
                >
                  {toolItem}
                </p>
              ))}
            </div>
          </div>

          <div className="carousel-img relative">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image1}
                alt="project-1"
                className="project-animation absolute top-0 left-1/4 -translate-x-[40%] rotate-[-6deg] h-[200px] rounded-4xl z-2 shadow-xl"
              />
              <img
                src={project.image2}
                alt="project-2"
                className="project-animation absolute top-10 left-1/2 -translate-x-[15%] rotate-[3deg] h-[200px] rounded-4xl z-1 shadow-lg"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
