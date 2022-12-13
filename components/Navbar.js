import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import BtnClose from "./svgs/btnClose";
import Github from "./svgs/github";
import Humberger from "./svgs/humberger";
import Instagram from "./svgs/instagram";
import Linkedin from "./svgs/linkedin";
import Moon from "./svgs/moon";
import Resume from "./svgs/resume";
import Sun from "./svgs/sun";
import Whatsapp from "./svgs/whatsapp";
import HomeIcon from "./svgs/homeIcon";
import ProjectsIcon from "./svgs/projectsIcon";
import ContactIcon from "./svgs/contactIcon";
import Gallery from "./svgs/gallery";
import SkillsIcon from "./svgs/skillsIcon";

const menus = [
  { href: "/", text: "Home", icn: HomeIcon },
  { href: "/gallery", text: "Gallery", icn: Gallery },
  { href: "/skills", text: "Skills", icn: SkillsIcon },
  { href: "/projects", text: "Projects", icn: ProjectsIcon },
  { href: "/contact", text: "Contact", icn: ContactIcon },
];

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

const navDowns = [
  {
    href: "/gallery",
    img: Gallery,
  },
  {
    href: "/skills",
    img: SkillsIcon,
  },
  {
    href: "/",
    img: HomeIcon,
  },
  {
    href: "/projects",
    img: ProjectsIcon,
  },
  {
    href: "/contact",
    img: ContactIcon,
  },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 50) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav className="container">
      {/* Navbar */}
      <div
        className={
          shadow
            ? "w-full  lg:max-w-7xl fixed z-10 shadow-xl py-1 px-[13px] md:px-[11px] bg-white/70 dark:bg-slate-800/70 backdrop-blur md:py-1 "
            : "w-full  lg:max-w-7xl fixed z-10 py-1 px-[13px] md:px-[11px] md:py-1 "
        }
      >
        <div className="flex flex-row justify-between items-center mx-auto">
          {/* Mobile Version */}
          <div
            className={`fixed z-20 w-full min-h-screen bg-slate-900/90 top-0 transition-all md:hidden ${
              nav ? "left-0" : "-left-full"
            }`}
          >
            <div className=" w-3/4 backdrop-blur bg-amber-400/80 min-h-screen md:hidden">
              <div className="flex flex-row p-5 justify-between md:hidden">
                <Image
                  src="/assets/logoMe.webp"
                  alt="Mardian Suherman Logo"
                  width="180"
                  height="180"
                  className="bg-cover md:hidden"
                  priority
                />
                <div className="flex items-center">
                  <button
                    className="cursor-pointer shadow-lg shadow-slate-600 rounded-md border-[#5651e5] border-2"
                    onClick={() => {
                      setNav(false);
                    }}
                  >
                    <BtnClose />
                  </button>
                </div>
              </div>

              <div className="pt-8 flex flex-row p-5 md:hidden">
                <h3 className="text-center border-l-2 border-r-2 px-1 border-[#5651e5]">
                  Let&#39;s build something together
                </h3>
              </div>

              <div className="container">
                <ul className="flex flex-col pt-8 space-y-2 px-5 md:hidden">
                  {menus.map((menu, index) => (
                    <li className="md:uppercase" key={index}>
                      <Link href={menu.href}>
                        <div
                          className={`text-2xl cursor-pointer ${
                            router.asPath === menu.href
                              ? "text-[#5651e5] "
                              : "text-slate-50 "
                          }`}
                        >
                          <div className=" p-4 flex flex-row">
                            <p className="px-6 ">
                              <menu.icn
                                className={` ${
                                  router.asPath === menu.href
                                    ? "animate-ping "
                                    : "animate-none "
                                }`}
                              />
                            </p>
                            <p className="">{menu.text}</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-12 px-5 mb-4 md:hidden">
                <span>Let&#39;s conect: </span>
              </div>

              <div className="container">
                <ul className="px-5 md:hidden flex justify-between">
                  {icons.map((icon, index) => (
                    <li key={index} className="text-center">
                      <Link href={icon.href}>
                        <div className="flex justify-center mb-2 ">
                          <icon.img className="cursor-pointer shadow-lg shadow-slate-600 rounded-md border-[#5651e5] border-2" />
                        </div>
                        <div className="text-xs m-auto dark:text-white/90">
                          {icon.text}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* End Mobile Version */}

          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src="/assets/logoMe.webp"
                alt="MAR-DIAN logo"
                width="100"
                height="30"
                priority
                className=" bg-cover "
              />
            </Link>
          </div>
          {/* End Logo */}

          {/* Dekstop Version */}
          <div className="container hidden md:block">
            <ul className="flex md:pt-0 md:flex-row md:justify-end md:space-y-0 lg:space-x-5 md:px-0">
              {menus.map((menu, index) => (
                <li className="md:uppercase" key={index}>
                  <Link href={menu.href}>
                    <div
                      className={`text-2xl md:text-sm cursor-pointer ${
                        router.asPath === menu.href
                          ? "text-[#5651e5]  "
                          : "text-black dark:text-slate-50 "
                      }`}
                    >
                      <div className="md:relative group md:text-center p-4 md:p-2 flex flex-row md:flex-col">
                        <p className="px-6 md:group-hover:invisible">
                          <menu.icn />
                        </p>
                        <p className="md:absolute inset-x-0 text-center md:pt-1 md:invisible group-hover:visible  group-hover:text-[#5651e5] dark:group-hover:text-slate-50">
                          {menu.text}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/*End Dekstop Version */}

          {/* Togle DarkMode */}
          <div className="flex flex-auto md:justify-end">
            {currentTheme === "dark" ? (
              <button
                className="bg-black-700 text-white hover:bg-black rounded-md border-[#5651e5] border-2"
                onClick={() => setTheme("light")}
              >
                <Moon />
              </button>
            ) : (
              <button
                className="bg-gray-100 rounded-md border-[#5651e5] border-2 hover:bg-gray-300"
                onClick={() => setTheme("dark")}
              >
                <Sun />
              </button>
            )}
          </div>
          {/* End Togle DarkMode */}

          {/* Humberger Menu */}
          <div>
            <button
              className="md:hidden dark:text-slate-50"
              onClick={() => {
                setNav(!nav);
              }}
            >
              <Humberger alt="humbergerMenu" />
            </button>
          </div>
          {/* End Humberger Menu */}
        </div>
      </div>
      {/* End Navbar */}

      {/* NavDown */}
      <div className="fixed z-[5] bottom-0 left-0 right-0 flex justify-between max-w-[330px] mx-auto py-5 md:hidden">
        <ul className="flex flex-row mx-auto rounded-full backdrop-blur shadow-lg shadow-gray-400 dark:shadow-gray-100">
          {navDowns.map((navDown, index) => (
            <li
              className=" justify-between text-slate-900 dark:text-slate-50 mx-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
              key={index}
            >
              <Link href={navDown.href}>
                <navDown.img
                  className={` ${
                    router.asPath === navDown.href
                      ? "text-[#5651e5] "
                      : "text-slate-50 "
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* End NavDon */}
    </nav>
  );
}
