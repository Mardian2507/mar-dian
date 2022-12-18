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

export default function Gallery() {
  return (
    <Layout title="Gallery Mardian">
      <div className="w-full h-full justify-center items-center ">
        <ParallaxHero />

        <div className="container px-5">
          <h2
            className="sticky top-2 pt-2 text-center tracking-widest  text-primary backdrop-blur rounded-lg uppercase"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Gallery
          </h2>

          <p data-aos="zoom-in-up" data-aos-duration="1000">
            lorem200Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
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
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
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
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
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
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
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
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
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
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
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
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
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
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
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
