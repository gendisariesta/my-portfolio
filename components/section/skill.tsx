"use client"
import { useEffect } from "react";

export default function Skill() {
    useEffect(() => {
        const cards = document.querySelectorAll(".card-animation");
        const title = document.querySelectorAll(".animate-on-scroll")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        el.dataset.timeoutId && clearTimeout(el.dataset.timeoutId);
                        const timeoutId = setTimeout(() => {
                            el.classList.add("card-animation-in");
                        }, i * 300);
                        el.dataset.timeoutId = timeoutId;
                        entry.target.classList.add("animate-in");
                    } else {
                        entry.target.classList.remove("card-animation-in");
                        entry.target.classList.remove("animate-in");
                    }
                });
            },
            { threshold: 0.1 }
        );
        cards.forEach((el) => observer.observe(el));
        title.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-container" id="skill">
            <h1 className="text-[64px] font-[--font-bodoni] text-left mb-[2rem] mt-3 animate-on-scroll">My Skill</h1>
            <div className="flex gap-5">
                <div className="bg-yellow w-90 h-100 rounded-4xl p-7 card-animation">
                    <h1 className="text-[22px] font-[Poppins] mb-4 font-semibold">Hard Skill</h1>
                    <ul>
                        <li className="mb-2 text-[18px] font-[Poppins]">Critical Thinking</li>
                        <li className="mb-2 text-[18px] font-[Poppins]">Analytical Thinking</li>
                        <li className="mb-2 text-[18px] font-[Poppins]">Problem Solving</li>
                        <li className="mb-2 text-[18px] font-[Poppins]">Teamwork</li>
                        <li className="mb-2 text-[18px] font-[Poppins]">Leadership</li>
                        <li className="mb-2 text-[18px] font-[Poppins]">Communication</li>
                    </ul>
                </div>
                <div className="bg-blue w-210 h-100 rounded-4xl p-7 card-animation">
                    <h1 className="text-[22px] font-[Poppins] mb-2 font-semibold">Soft Skill</h1>
                    <div className="flex w-full gap-5">
                        <div className="mr-[3rem]">
                            <h1 className="text-[18px] font-[Poppins] mb-2 font-semibold">Language</h1>
                            <ul>
                                <li className="mb-2 text-[18px] font-[Poppins]">PHP</li>
                                <li className="mb-2 text-[18px] font-[Poppins]">Python</li>
                                <li className="mb-2 text-[18px] font-[Poppins]">Javascript</li>
                                <li className="mb-2 text-[18px] font-[Poppins]">HTML</li>
                                <li className="mb-2 text-[18px] font-[Poppins]">CSS</li>
                                <li className="mb-2 text-[18px] font-[Poppins]">SQL</li>
                                <li className="mb-2 text-[18px] font-[Poppins]">React Js</li>
                            </ul>
                        </div>
                        <div className="mr-[3rem]">
                            <h1 className="text-[18px] font-[Poppins] mb-2 font-semibold">Framework</h1>
                            <ul>
                                <li className="mb-2 text-[18px] font-[Poppins]">Bootstrap</li>
                                <li className="mb-2 text-[18px] font-[Poppins]">Tailwind</li>
                                <li className="mb-2 text-[18px] font-[Poppins]">Laravel</li>
                                <li className="mb-2 text-[18px] font-[Poppins]">Codeigniter</li>
                                <li className="mb-2 text-[18px] font-[Poppins]">FuelPHP</li>
                                <li className="mb-2 text-[18px] font-[Poppins]">Django</li>
                                <li className="mb-2 text-[18px] font-[Poppins]">Flask</li>
                                <li className="mb-2 text-[18px] font-[Poppins]">NEXT Js</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-[18px] font-[Poppins] mb-2 font-semibold">Tools and Technologies</h1>
                            <ul>
                                <li className="mb-2 text-[18px] font-[Poppins]">Visual Studio Code</li>
                                <li className="mb-2 text-[18px] font-[Poppins]">Figma</li>
                                <li className="mb-2 text-[18px] font-[Poppins]">Git (github, gitlab, bitbucket)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}