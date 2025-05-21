"use client"
import { useEffect } from "react";

export default function Experience() {
    useEffect(() => {
        const cards = document.querySelectorAll(".card-animation");
        const cardsRight = document.querySelectorAll(".card-animation-right");
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
        cardsRight.forEach((el) => observer.observe(el));
        title.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="experience-container timeline-reveal" id="experience">
            <h1 className="text-[64px] font-[--font-bodoni] text-center mb-[2rem] mt-3 animate-on-scroll">Work Experience</h1>
            <div className="timeline">
                <div className="timeline-content left">
                    <div className="date card-animation">Mei 2023 - Mei 2025</div>
                    <i className="icon fa fa-home"></i>
                    <div className="content card-animation-right">
                        <h2 className="font-[Poppins] font-medium text-[20px]">PT. Enam Kubuku Indonesia</h2>
                        <h2 className="font-[Poppins] font-bold text-[20px]">Software App Production</h2>
                        <ul className="mt-5 ml-4 list-disc">
                            <li className="mb-2 text-[16px] font-[Poppins] text-justify">
                                Compiled Android, iOS, and PC applications using Backoffice tools on Android
                                and Xcode on iOS for more than 5,000 partner companies.</li>
                            <li className="mb-2 text-[16px] font-[Poppins] text-justify">
                                Managed and monitored the application upload process across various platforms
                                such as Google and Apple.</li>
                            <li className="mb-2 text-[16px] font-[Poppins] text-justify">
                                Assisted in developing a web-based application for the 'ruang-presentasi'
                                dashboard page using JavaScript and the React.js framework.</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-content right">
                    <div className="date card-animation-right">Agustus 2021 - Januari 2022</div>
                    <i className="icon fa fa-gift"></i>
                    <div className="content card-animation">
                        <h2 className="font-[Poppins] font-medium text-[20px]">Campaign.com | PT. Uni Tokopo Teknologi</h2>
                        <h2 className="font-[Poppins] font-bold text-[20px]">Web Developer Internship</h2>
                        <ul className="mt-5 ml-4 list-disc">
                            <li className="mb-2 text-[16px] font-[Poppins] text-justify">
                                Developed a web-based admin application using the PHP programming language
                                with the FuelPHP framework, while collaborating with the team using
                                the Agile Sprint development method.</li>
                            <li className="mb-2 text-[16px] font-[Poppins] text-justify">
                                Created and managed landing pages for partner schools and universities.</li>
                            <li className="mb-2 text-[16px] font-[Poppins] text-justify">
                                Built landing pages for global projects using JavaScript
                                with the React.js library and Next.js framework.</li>
                            <li className="mb-2 text-[16px] font-[Poppins] text-justify">
                                Implemented REST APIs in website development to enhance
                                data integration and system functionality.</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-content left">
                    <div className="date me-[-3rem] card-animation">Juni 2017 - Maret 2025</div>
                    <i className="icon fa fa-home"></i>
                    <div className="content card-animation-right">
                        <h2 className="font-[Poppins] font-medium text-[20px]">JUTIF Informatika</h2>
                        <h2 className="font-[Poppins] font-bold text-[20px]">Copyeditor dan Layouter</h2>
                        <ul className="mt-5 ml-4 list-disc">
                            <li className="mb-2 text-[16px] font-[Poppins] text-justify">
                                Edited and revised scientific articles and academic publications
                                to ensure consistency in style, grammar, and accuracy of terminology.</li>
                            <li className="mb-2 text-[16px] font-[Poppins] text-justify">
                                Coordinated with authors and the editorial team to revise and improve
                                the quality of manuscripts before publication.
                            </li>
                            <li className="mb-2 text-[16px] font-[Poppins] text-justify">
                                Managed the final proofreading process prior to publication
                                to ensure high quality and error-free content.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1 className="text-[64px] font-[--font-bodoni] text-center mb-[2rem] mt-3 animate-on-scroll">Achievement</h1>
            <div className="timeline">
                <div className="timeline-content left">
                    <div className="date me-[9rem] card-animation">2022</div>
                    <i className="icon fa fa-home"></i>
                    <div className="content card-animation-right">
                        <h2 className="font-[Poppins] font-bold text-[20px]">Awardee Beasiswa Djarum</h2>
                        <ul className="mt-5 ml-4 list-disc">
                            <li className="mb-2 text-[16px] font-[Poppins] text-justify">
                                Selected as a recipient of the Djarum Beasiswa Plus Scholarship
                                based on academic achievements, leadership, and social contributions.</li>
                            <li className="mb-2 text-[16px] font-[Poppins] text-justify">
                                Actively participated in social initiatives and networking activities
                                with fellow awardees and Djarum Scholarship alumni.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-content right">
                    <div className="date ms-[16rem] card-animation-right">2022</div>
                    <i className="icon fa fa-gift"></i>
                    <div className="content card-animation">
                        <h2 className="font-[Poppins] font-bold text-[20px]">Received funding Student Creativity Program</h2>
                        <ul className="mt-5 ml-4 list-disc">
                            <li className="mb-2 text-[16px] font-[Poppins] text-justify">
                                Project title: “Counseling on New Normal Adaptation in School Environments through Comic Media.”</li>
                            <li className="mb-2 text-[16px] font-[Poppins] text-justify">
                                Responsible for developing the Komik Pintar Android application using the Kodular platform.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}