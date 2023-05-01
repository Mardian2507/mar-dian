import Layout from "@components/Layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

const imgSkills = [
  {
    id: 1,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/html.png",
    text: "HTML",
  },
  {
    id: 2,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/css.png",
    text: "CSS",
  },
  {
    id: 3,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/javascript.png",
    text: "JavaScript",
  },
  {
    id: 4,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/react.png",
    text: "React",
  },
  {
    id: 5,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/tailwind.png",
    text: "Tailwind",
  },
  {
    id: 6,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/firebase.png",
    text: "Firebase",
  },
  {
    id: 7,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/github1.png",
    text: "Github",
  },
  {
    id: 8,
    href: "https://github.com/Mardian2507",
    imgSkill: "/assets/skills/nextjs.png",
    text: "NextJS",
  },
];

export default function Skills() {
  return (
    <Layout title="Mardian Skills">
      <div className="w-full min-h-screen">
        <div className="lg:max-w-7xl m-auto px-2 pt-16 flex flex-col justify-center">
          <h2
            className="pt-2 text-center tracking-widest uppercase text-primary z-20"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Skills
          </h2>
          <div className="z-20 pt-4">
            <h2 data-aos="zoom-in-up" data-aos-duration="1000">
              What I Can Do
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 z-20 py-5">
            {imgSkills.map((items) => (
              <div
                key={items.id}
                className="backdrop-blur-xl p-6 shadow-md shadow-black rounded-xl"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <div className="group grid grid-cols-2 gap-4 justify-center items-center hover:scale-105 ease-in duration-300">
                  <div className="m-auto">
                    <Image
                      alt={items.id}
                      src={items.imgSkill}
                      width="250"
                      height="250"
                      className="m-auto group-hover:-rotate-12 ease-in-out duration-300"
                      priority
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center group-hover:scale-125 ease-in duration-300">
                    <h3>{items.text}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
