import Layout from "@components/Layout";
import Image from "next/image";
import ParallaxHero from "components/ParallaxHero";
import Html from "@public/assets/skills/html.png";
import Css from "@public/assets/skills/css.png";
import Javascript from "@public/assets/skills/javascript.png";
import ReactImg from "@public/assets/skills/react.png";
import Tailwind from "@public/assets/skills/tailwind.png";
import Firebase from "@public/assets/skills/firebase.png";
import Github from "@public/assets/skills/github1.png";
import NextJS from "@public/assets/skills/nextjs.png";
import CardPost from "components/CardPost";
import { useState } from "react";

export default function Gallery() {
  const [posts, setPost] = useState([
    {
      id: 1,
      thumbnail: "/assets/mar-dian.webp",
      places: "Bandung",
      date: "25/07/2023",
      postTitle: "backpak judul",
      shortDescription: "ini deskripsi",
    },
    {
      id: 2,
      thumbnail: "/assets/mar-dian.webp",
      places: "Bandung",
      date: "25/07/2023",
      postTitle: "backpak judul",
      shortDescription: "ini deskripsi",
    },
    {
      id: 3,
      thumbnail: "/assets/mar-dian.webp",
      places: "Bandung",
      date: "25/07/2023",
      postTitle: "backpak judul",
      shortDescription: "ini deskripsi",
    },
    {
      id: 4,
      thumbnail: "/assets/mar-dian.webp",
      places: "Bandung",
      date: "25/07/2023",
      postTitle: "backpak judul",
      shortDescription: "ini deskripsi",
    },
    {
      id: 5,
      thumbnail: "/assets/mar-dian.webp",
      places: "Bandung",
      date: "25/07/2023",
      postTitle: "backpak judul",
      shortDescription: "ini deskripsi",
    },
    {
      id: 6,
      thumbnail: "/assets/mar-dian.webp",
      places: "Bandung",
      date: "25/07/2023",
      postTitle: "backpak judul",
      shortDescription: "ini deskripsi",
    },
    {
      id: 7,
      thumbnail: "/assets/mar-dian.webp",
      places: "Bandung",
      date: "25/07/2023",
      postTitle: "backpak judul",
      shortDescription: "ini deskripsi",
    },
    {
      id: 8,
      thumbnail: "/assets/mar-dian.webp",
      places: "Bandung",
      date: "25/07/2023",
      postTitle: "backpak judul",
      shortDescription: "ini deskripsi",
    },
    {
      id: 9,
      thumbnail: "/assets/mar-dian.webp",
      places: "Bandung",
      date: "25/07/2023",
      postTitle: "backpak judul",
      shortDescription: "ini deskripsi",
    },
  ]);

  return (
    <Layout title="Gallery Mardian">
      <div className="w-full h-full justify-center items-center ">
        <div>
          <ParallaxHero />
        </div>

        <div className="container px-5">
          <h2
            className="sticky z-10 top-2 pt-2 text-center tracking-widest  text-primary backdrop-blur rounded-lg uppercase"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Gallery
          </h2>

          <div className="grid grid-cols-4">
            {posts.map((post) => (
              <div key={post.id}>
                <CardPost {...post} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-1 lg:grid-cols-4 md:gap-8">
            <div className="p-2 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                <div
                  className="m-auto"
                  data-aos="flip-up"
                  data-aos-duration="2000"
                >
                  <Image src={Html} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className="p-2 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                <div
                  className="m-auto"
                  data-aos="flip-up"
                  data-aos-duration="2000"
                >
                  <Image src={Css} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div className="p-2 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                <div
                  className="m-auto"
                  data-aos="flip-up"
                  data-aos-duration="2000"
                >
                  <Image src={Javascript} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
            <div className="p-2 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                <div
                  className="m-auto"
                  data-aos="flip-up"
                  data-aos-duration="2000"
                >
                  <Image src={ReactImg} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>React</h3>
                </div>
              </div>
            </div>
            <div className="p-2 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                <div
                  className="m-auto"
                  data-aos="flip-up"
                  data-aos-duration="2000"
                >
                  <Image src={Tailwind} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>
            <div className="p-2 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                <div
                  className="m-auto"
                  data-aos="flip-up"
                  data-aos-duration="2000"
                >
                  <Image src={Firebase} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Firebase</h3>
                </div>
              </div>
            </div>
            <div className="p-2 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                <div
                  className="m-auto"
                  data-aos="flip-up"
                  data-aos-duration="2000"
                >
                  <Image src={Github} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Github</h3>
                </div>
              </div>
            </div>
            <div className="p-2 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                <div
                  className="m-auto"
                  data-aos="flip-up"
                  data-aos-duration="2000"
                >
                  <Image src={NextJS} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Next</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
