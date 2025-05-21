"use client"
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
type CarouselProps = {
  data: any[];
};
export default function CarouselVertical({ data }:CarouselProps) {
    const [curr, setcurr] = useState(0)
    const next = () => setcurr(curr => (curr === data.length - 1 ? 0 : curr + 1));
    const prev = () => setcurr(curr => curr == 0 ? data.length - 1 : curr - 1)
    useEffect(() => {
        const elements = document.querySelectorAll(".animate-on-scroll");
        const card = document.querySelectorAll('.project-animation')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in");
                        entry.target.classList.add("project-animation-in");
                    } else {
                        entry.target.classList.remove("animate-in");
                        entry.target.classList.remove("project-animation-in");
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));
        card.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
    return (
        <div className="flex w-full gap-5 relative pt-5 pb-[3rem] h-[370px] overflow-hidden">
            <div className="absolute bottom-0 flex items-center mt-[2rem]">
                <button className="p-1 rounded-full shadow border-2 mr-2 hover:bg-black">
                    <ChevronLeft onClick={prev} size={30} className="hover:text-white" />
                </button>
                <button className="p-1 rounded-full shadow border-2 ml-2 hover:bg-black">
                    <ChevronRight onClick={next} size={30} className="hover:text-white" />
                </button>
            </div>
            {data.map((project, id) =>(
                <div key={id} className="flex gap-5 min-w-full transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
                    <div className="carousel-body">
                        <p className="carousel-description animate-on-scroll">{project.description}</p>
                        <div className="flex flex-wrap mt-4 carousel-description">
                            {project.tool.map((e, id) =>
                            (
                                <p key={id} className="border-2 border-black rounded-full px-4 py-1 me-2 mt-2 animate-on-scroll">{e}</p>
                            )
                            )}
                        </div>
                    </div>
                    <div className="carousel-img relative">
                        <a href={project.link} target="blank">
                            <img
                                src={project.image1}
                                alt="image"
                                className="project-animation absolute top-0 left-1/4 -translate-x-[40%] rotate-[-6deg] h-[200px] rounded-4xl z-2 shadow-xl"
                            />
                            <img
                                src={project.image2}
                                alt="image"
                                className="project-animation absolute top-10 left-1/2 -translate-x-[15%] rotate-[3deg] h-[200px] rounded-4xl z-1 shadow-lg"
                            />
                        </a>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

{/* <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
                <img src={s} alt="image" />
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="p-1 rounded-full bg-white shadow">
                    <ChevronLeft size={40} />
                </button>
                <button onClick={next} className="p-1 rounded-full bg-white shadow">
                    <ChevronRight size={40} />
                </button>
            </div>
        </div> */}
