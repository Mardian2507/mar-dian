import Github from "components/svgs/github";
import Instagram from "components/svgs/instagram";
import Linkedin from "components/svgs/linkedin";
import Resume from "components/svgs/resume";
import Whatsapp from "components/svgs/whatsapp";
import Image from "next/image";
import Link from "next/link";

const icons = [
  {
    href: "https://www.instagram.com/m_ardi_an/?hl=en",
    img: Instagram,
    text: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/mardian-suherman-6a054a183/",
    img: Linkedin,
    text: "Linkedin",
  },
  {
    href: "https://github.com/Mardian2507",
    img: Github,
    text: "Github",
  },
  {
    href: "whatsapp://send?text=Assalamualaikum&phone=+6285659467422",
    img: Whatsapp,
    text: "WhatsApp",
  },
  {
    href: "",
    img: Resume,
    text: "Resume",
  },
];

export default function Main() {
  return (
    <div className="w-full h-full">
      <div className="relative flex w-full lg:max-w-7xl justify-center items-center min-h-screen">
        <div className="absolute z-0 bg-bg1 dark:bg-bg2 bg-fixed bg-center bg-cover bg-no-repeat left-0 right-0 top-0 bottom-0" />
        <div className="absolute z-10 bg-gradient-to-t from-slate-100 dark:bg-gradient-to-t dark:from-slate-800 left-0 right-0 top-0 bottom-0" />
        <div className="px-5 z-20">
          <p
            className="uppercase text-sm tracking-widest text-gray-800 dark:text-light"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1
            className="py-4 text-gray-700 dark:text-slate-200"
            data-aos="zoom-in-up"
            data-aos-duration="3000"
          >
            Hi, I&#39;m <span className="text-primary"> Mardian</span>
          </h1>
          <h1
            className="py-2 text-gray-700 dark:text-slate-200"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            A Front-End Web Developer
          </h1>
          <p
            className="py-4 pb-10 text-gray-600 dark:text-slate-200"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            I&#39;m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>

          <div className="mx-auto max-w-[320px] md:max-w-full">
            <ul
              className="flex justify-between"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              {icons.map((icon, index) => (
                <li className="group" key={index}>
                  <Link href={icon.href}>
                    <div className="text-center">
                      <div className="rounded-full inline-block shadow-lg shadow-gray-400 p-2 mx-1 md:p-6 md:mx-5 cursor-pointer md:group-hover:animate-bounce">
                        <icon.img />
                      </div>
                      <div className="text-xs flex justify-center dark:text-light">
                        {icon.text}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex w-full lg:max-w-7xl justify-center items-center min-h-screen px-5 py-10 lg:px-14">
        <div className="m-auto md:grid md:px-20 grid-cols-3 gap-8">
          <div className="col-span-2">
            <p
              className="uppercase text-xl tracking-widest text-primary"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              About
            </p>
            <h2
              className="py-4 text-secondary dark:text-light"
              data-aos="zoom-in-down"
              data-aos-duration="1000"
            >
              Who I Am
            </h2>
            <p
              className="py-2 text-secondary dark:text-light"
              data-aos="fade-up"
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
                className="py-2 pb-5 text-secondary dark:text-slate-300 underline cursor-pointer text-center md:text-start"
                // data-aos="fade-left"
                // data-aos-duration="1000"
              >
                Check out some of my latest projects.
              </p>
            </Link>
          </div>

          <div
            className="w-fit h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4  hover:scale-105 ease-in duration-300"
            data-aos="zoom-in"
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
  );
}
