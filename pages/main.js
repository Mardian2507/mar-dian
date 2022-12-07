import Github from "components/svgs/github";
import Instagram from "components/svgs/instagram";
import Linkedin from "components/svgs/linkedin";
import Resume from "components/svgs/resume";
import Whatsapp from "components/svgs/whatsapp";
import Image from "next/image";
import Link from "next/link";

const icons = [
  {
    href: "https://www.linkedin.com/in/mardian-suherman-6a054a183/",
    img: Linkedin,
  },
  {
    href: "https://github.com/Mardian2507",
    img: Github,
  },
  {
    href: "https://www.linkedin.com/in/mardian-suherman-6a054a183/",
    img: Instagram,
  },
  {
    href: "whatsapp://send?text=Assalamualaikum&phone=+6285659467422",
    img: Whatsapp,
  },
  {
    href: "",
    img: Resume,
  },
];

export default function Main() {
  return (
    <div className="container lg:max-w-7xl ">
      <div
        id="hero"
        className="flex w-full lg:max-w-7xl justify-center items-center min-h-screen dark:bg-slate-600 dark:text-slate-50 bg-slate-100 "
      >
        {/* <div className="w-full absolute lg:max-w-7xl top-0 bottom-0 bg-white/80 dark:bg-black/60 " /> */}
        <div className="px-5 z-[2] flex justify-center items-center w-full">
          <div className="m-auto">
            <div>
              <p
                className="uppercase text-sm tracking-widest text-gray-600 dark:text-slate-50"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                LET&#39;S BUILD SOMETHING TOGETHER
              </p>
              <h1
                className="py-4 text-gray-700 dark:text-slate-200"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Hi, I&#39;m <span className="text-[#5651e5]"> Mardian</span>
              </h1>
              <h1
                className="py-2 text-gray-700 dark:text-slate-200"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                A Front-End Web Developer
              </h1>
              <p
                className="py-4 text-gray-600 dark:text-slate-200"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                I&#39;m focused on building responsive front-end web
                applications integrating back-end technologies.
              </p>

              <div className="flex justify-between max-w-[330px] md:max-w-md  mx-auto py-4">
                <ul className="flex flex-row mx-auto">
                  {icons.map((icon, index) => (
                    <li
                      className=" justify-between rounded-full shadow-lg shadow-gray-400 p-4 mx-1 md:p-6 md:mx-2 cursor-pointer hover:scale-110 ease-in duration-300"
                      data-aos="zoom-in-up"
                      data-aos-duration="1000"
                      key={index}
                    >
                      <Link href={icon.href}>
                        <icon.img />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="flex w-full lg:max-w-7xl justify-center items-center min-h-screen dark:bg-slate-800 dark:text-slate-50 bg-slate-100 "
      >
        <div className="pt-10 pb-20 px-5 md:px-24">
          <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <p
                className="uppercase text-xl tracking-widest text-[#5651e5]"
                data-aos="fade-down-left"
                data-aos-duration="1000"
              >
                About
              </p>
              <h2
                className="py-4"
                data-aos="fade-down-left"
                data-aos-duration="1000"
              >
                Who I Am
              </h2>
              <p
                className="py-2 text-black dark:text-slate-50"
                data-aos="fade-up-right"
                data-aos-duration="2000"
              >
                I specialize in building mobile responsive front-end UI
                applications that connect with API&#39;s and other backend
                technologies. I&#39;m passionate about learning new technologies
                and understand there is more than one way to accomplish a task.
                Though I am most proficient in building front-end applications
                using HTML, CSS, Javascript, and React, I am a quick learner and
                can pick up new tech stacks as needed. I believe that being a
                great developer is not using one specific language, but choosing
                the best tool for the job.
              </p>

              <Link href="/projects">
                <p
                  className="py-2 pb-5 text-slate-900 dark:text-slate-300 underline cursor-pointer text-center md:text-start"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  Check out some of my latest projects.
                </p>
              </Link>
            </div>

            <div
              className="w-fit h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4  hover:scale-105 ease-in duration-300"
              data-aos="zoom-in-down"
              data-aos-duration="2000"
            >
              <Image
                src="/assets/mar-dian.webp"
                width="200"
                height="300"
                className="rounded-xl"
                alt="logo about"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
