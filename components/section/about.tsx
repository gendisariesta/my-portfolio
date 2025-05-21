"use client"
import { useEffect } from "react";
import Image from "next/image";

export default function About() {
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
    <div className="about-container grid grid-cols-3" id="about">
      <div className="place-self-center place-items-center mr-[3rem]">
        <Image
          src="/gendis-image.png"
          alt="Picture of the author"
          width={450}
          height={450}
          blurDataURL="data:..."
          placeholder="blur"
          className="animate-on-scroll"
        />
        <div className="border-1 border-black rounded-full w-fit px-3 mt-4 animate-on-scroll">
          <p className="text-center font-[--font-bodoni] text-[24px] font-bold">
            Gendis Ariesta Pragitaputri
          </p>
        </div>
      </div>
      <div className="col-span-2 ">
        <h1 className="text-[64px] font-[--font-bodoni] animate-on-scroll">About Me</h1>
        <hr className="mb-5 border-t-[2px] animate-on-scroll" />
        <p className="text-justify font-[Poppins] text-[18px] animate-on-scroll">
          I am an Informatics graduate from Universitas Jenderal Soedirman
          with a focus on Information Systems and Artificial Intelligence.
          I have over <span className="bg-[#4682b440]">two years of experience</span> in the IT industry,
          working as a software app production specialist and web developer.
          My work includes developing Android, iOS, and PC applications,
          managing deployment processes, and building web-based dashboards using JavaScript and ReactJS.
        </p>
        <br />
        <p className="text-justify font-[Poppins] text-[18px] animate-on-scroll">
          I am skilled in managing data and proficient in several programming languages including <span className="bg-[#4682b440]">PHP,
            Python, JavaScript, and SQL,</span> as well as frameworks such as CodeIgniter, Laravel, and Django.
          With a strong foundation in both frontend and backend development,
          I am passionate about creating efficient, user-focused digital solutions
          and continuously improving my technical and analytical abilities.
        </p>
      </div>
    </div>
  );
}
