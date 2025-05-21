"use client"
import { useEffect } from "react";

export default function Navbar() {
    useEffect(() => {
        const elements = document.querySelectorAll('.animate-on-load');
        elements.forEach((el, i) => {
            setTimeout(() => {
                el.classList.add('animate-in');
            }, i * 150); // Adjust delay per element
        });
    }, []);
    return (
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-transparent sm:items-baseline w-full">
            <div className="border-2 border-black rounded-full px-4 py-1 animate-on-load">
                <a href="#" className="text-lg no-underline text-black mx-2 animate-on-load">Goolaya</a>
            </div>
            <div className="border-2 border-black rounded-full px-4 py-1 animate-on-load">
                <a href="#about" className="text-lg no-underline text-black hover:text-[#a28834] mx-2 animate-on-load">About</a>
                <a href="#project" className="text-lg no-underline text-black hover:text-[#a28834] mx-2 animate-on-load">Project</a>
                <a href="#skill" className="text-lg no-underline text-black hover:text-[#a28834] mx-2 animate-on-load">Skill</a>
                <a href="#experience" className="text-lg no-underline text-black hover:text-[#a28834] mx-2 animate-on-load">Experience</a>
            </div>
        </nav>
    );
}