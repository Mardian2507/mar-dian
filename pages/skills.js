import Layout from "@components/Layout";
import Image from "next/image";
import Html from "@public/assets/skills/html.png";
import Css from "@public/assets/skills/css.png";
import Javascript from "@public/assets/skills/javascript.png";
import ReactImg from "@public/assets/skills/react.png";
import Tailwind from "@public/assets/skills/tailwind.png";
import Firebase from "@public/assets/skills/firebase.png";
import Github from "@public/assets/skills/github1.png";
import NextJS from "@public/assets/skills/nextjs.png";

export default function Skills() {
  return (
    <Layout title="Skills Mardian">
      <div id="skills" className="w-full min-h-screen">
        <div className="lg:max-w-7xl m-auto px-2 py-16 flex flex-col justify-center">
          <h2
            className="pt-2 text-center tracking-widest uppercase text-primary"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Skills
          </h2>
          <h2 className="py-4" data-aos="flip-right" data-aos-duration="1000">
            What I Can Do
          </h2>

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
