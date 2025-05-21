"use client"
import { useEffect } from "react";
import Navbar from "../navbar";
import ParticleEffect from '../particle-effect';

export default function Hero() {
    useEffect(() => {
        document.querySelectorAll('.animate-on-load').forEach((el, i) => {
            setTimeout(() => {
                el.classList.add('animate-in');
            }, i * 200);
        });
    }, []);

    return (
        <div className="gradient-bg relative">
            <ParticleEffect />
            <Navbar />
            <div className="mt-[6rem] mb-[6rem]">
                <h3 className="text-center font-sans font-light text-5xl font-[Poppins] animate-on-load">Welcome to</h3>
                <h1 className="text-center text-[140px] font-[--font-bodoni] animate-on-load title-hero">MY PORTFOLIO</h1>
            </div>

            <div className="px-4">
                <div className="flex justify-between mb-1">
                    <p className="text-left text-lg animate-on-load">2025</p>
                    <p className="text-right text-lg animate-on-load">gendisariesta</p>
                </div>
                <hr className="border-t-[2px] text-[#3c3c3c] animate-on-load "/>
            </div>
        </div>
    );
}
