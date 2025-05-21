"use client"
import { useEffect } from "react";
import { Mail, Phone, Linkedin, GitHub, Download } from "react-feather";

export default function Contact() {
    useEffect(() => {
        const cards = document.querySelectorAll(".card-animation");
        const title = document.querySelectorAll(".animate-on-scroll")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    const el = entry.target as HTMLElement;

                    if (entry.isIntersecting) {
                        if (el.dataset.timeoutId) {
                            clearTimeout(parseInt(el.dataset.timeoutId));
                        }

                        const timeoutId = setTimeout(() => {
                            el.classList.add("card-animation-in");
                        }, i * 300);

                        el.dataset.timeoutId = timeoutId.toString();

                        el.classList.add("animate-in");
                    } else {
                        el.classList.remove("card-animation-in");
                        el.classList.remove("animate-in");
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
        <div className="contact-container">
            <h1 className="text-[64px] font-[--font-bodoni] text-left mb-4 mt-3 animate-on-scroll">Contact Me</h1>
            <div className="mb-5 grid grid-cols-3">
                <div className="flex items-center gap-3 mb-3 card-animation">
                    <i className="p-2 border-2 rounded-full"><Mail size={20} /></i>
                    <a href="mailto:gendispragitaputri@gmail.com" className="font-[Poppins] text-[16px]"> gendispragitaputri@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 mb-3 card-animation">
                    <i className="p-2 border-2 rounded-full"><Phone size={20} /></i>
                    <a href="https://wa.me/+6289620458687" className="font-[Poppins] text-[16px] mb-2" target="blank">+6289620458687</a>
                </div>
                <div className="flex items-center gap-3 mb-3 card-animation">
                    <i className="p-2 border-2 rounded-full"><Download size={20} /></i>
                    <a href="./gendiscv.pdf" className="font-[Poppins] text-[16px] mb-2" target="blank">My Resume</a>
                </div>
                <div className="flex items-center gap-3 mb-3 card-animation">
                    <i className="p-2 border-2 rounded-full"><GitHub size={20} /></i>
                    <a href="https://github.com/gendisariesta" className="font-[Poppins] text-[16px] mb-2" target="blank">gendisariesta</a>
                </div>
                <div className="flex items-center gap-3 mb-3 card-animation">
                    <i className="p-2 border-2 rounded-full"><Linkedin size={20} /></i>
                    <a href="https://id.linkedin.com/in/gendisariesta" className="font-[Poppins] text-[16px] mb-2" target="blank">@gendisariesta</a>
                </div>

            </div>
        </div>
    )
}