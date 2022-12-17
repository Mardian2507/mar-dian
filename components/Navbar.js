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
import SearchIcon from "./svgs/searchIcon";

const menus = [
  { href: "/", text: "Home", icon: HomeIcon },
  { href: "/gallery", text: "Gallery", icon: Gallery },
  { href: "/skills", text: "Skills", icon: SkillsIcon },
  { href: "/projects", text: "Projects", icon: ProjectsIcon },
  { href: "/contact", text: "Contact", icon: ContactIcon },
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

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);
  const [shadow, setShadow] = useState(false);
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
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
            ? "w-full lg:max-w-7xl sticky transition-all duration-500 z-40  py-2 md:py-1 px-[13px] md:px-[47px] "
            : "w-full lg:max-w-7xl fixed transition-all duration-500 z-40 shadow-xl py-2 md:py-1 px-[13px] md:px-[47px]  backdrop-blur "
        }
      >
        <div className="relative flex flex-row justify-between items-center mx-auto">
          {/* Mobile Version */}
          <div
            className={`fixed z-50 z w-full h-screen bg-secondary/90 top-0 transition-all duration-300 md:hidden ${
              nav ? "left-0" : "-left-full"
            }`}
          >
            <div
              className={`fixed z-50 z w-3/4 h-screen backdrop-blur rounded-r-lg bg-amber-400/80 top-0 transition-all duration-700 md:hidden ${
                nav ? "left-0" : "-left-full"
              }`}
            >
              <div className="flex flex-row p-5 justify-between md:hidden">
                <Image
                  src="/assets/logoMe.webp"
                  alt="Mardian Suherman Logo"
                  width="180"
                  height="69"
                  className="bg-cover md:hidden"
                  priority
                />
                <div className="flex items-center">
                  <button
                    className=" shadow-lg shadow-slate-600 rounded-md border-primary border-2"
                    onClick={() => {
                      setNav(false);
                      document.body.style.overflow = "unset";
                    }}
                  >
                    <BtnClose />
                  </button>
                </div>
              </div>
              <div className="pt-8 flex flex-row p-5 md:hidden">
                <h3 className="text-center border-l-2 border-r-2 px-1 border-primary">
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
                              ? "text-primary "
                              : "text-light "
                          }`}
                        >
                          <div
                            className=" p-4 flex flex-row"
                            onClick={() => {
                              setNav(false);
                              document.body.style.overflow = "unset";
                            }}
                          >
                            <p className="px-6 ">
                              <menu.icon
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
                          <icon.img className="cursor-pointer shadow-lg shadow-slate-600 rounded-md border-primary border-2" />
                        </div>
                        <div className="text-xs m-auto dark:text-light">
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
                height="39"
                priority
                className=" bg-cover ml-[-3px]"
              />
            </Link>
          </div>
          {/* End Logo */}

          {/* Dekstop Version */}
          <div className="container hidden md:block">
            <ul className="flex md:pt-0 md:px-0 md:flex-row md:justify-end md:space-y-0 lg:space-x-0 ">
              {menus.map((menu, index) => (
                <li className="md:uppercase" key={index}>
                  <Link href={menu.href}>
                    <div
                      className={`md:text-base font-bold cursor-pointer ${
                        router.asPath === menu.href
                          ? "text-primary"
                          : "text-secondary dark:text-light "
                      }`}
                    >
                      <div className="md:relative group md:text-center flex flex-row px-5">
                        <p className="md:px-1 lg:px-3 p-1 md:group-hover:invisible">
                          <menu.icon />
                        </p>
                        <p className="md:absolute inset-x-0 text-center md:pt-1 md:invisible group-hover:visible  group-hover:text-secondary dark:group-hover:text-light">
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
          <div className="flex flex-auto md:justify-end items-center ">
            {currentTheme === "dark" ? (
              <button
                className="flex items-center md:px-2 hover:bg-black rounded-md "
                onClick={() => setTheme("light")}
              >
                <span className="text-xs px-1 text-secondary dark:text-light">
                  dark
                </span>
                <div className="dark:text-light transform -scale-x-100">
                  <Moon />
                </div>
              </button>
            ) : (
              <button
                className="flex items-center md:px-2 hover:bg-gray-300 rounded-md"
                onClick={() => setTheme("dark")}
              >
                <span className="text-xs px-1 text-secondary dark:text-light">
                  light
                </span>
                <div className="text-secondary">
                  <Sun />
                </div>
              </button>
            )}
          </div>
          {/* End Togle DarkMode */}

          {/* Bg Search */}
          <div className="px-3">
            <div className="flex items-center">
              <button
                className="flex items-center text-secondary dark:text-light dark:hover:bg-secondary hover:bg-gray-300 rounded-md md:border-primary md:border-2"
                onClick={() => setSearch(!search)}
              >
                <span className="text-xs px-1 text-secondary dark:text-light">
                  Search...
                </span>
                <div className="">
                  <SearchIcon />
                </div>
              </button>
            </div>
            <div
              className={`absolute w-full lg:w-3/4 right-0 px-11 transition-all ${
                search ? `top-[9px] md:top-[2px]` : `-top-40`
              }`}
            >
              <button
                className="absolute top-[6px] mx-1 md:mx-2 cursor-pointer text-secondary dark:text-light"
                onClick={() => setSearch(false)}
              >
                <BtnClose />
              </button>

              <input
                className="text-secondary dark:text-light bg-light dark:bg-secondary  border-primary border-2 rounded-lg w-full px-10 py-2 lg:py-1 md:px-20 text-xs lg:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Search..."
              />

              <button
                className="absolute top-[6px] mx-[-28px] cursor-pointer text-secondary dark:text-light"
                onClick={() => setSearch(false)}
              >
                <SearchIcon />
              </button>
            </div>
          </div>
          {/* End Bg Search */}

          {/* Humberger Menu */}
          <div className="flex items-center">
            <button
              className="md:hidden dark:text-light flex items-center"
              onClick={() => {
                setNav(!nav);
                if (typeof window != "undefined" && window.document) {
                  document.body.style.overflow = "hidden";
                }
              }}
            >
              <span className="text-xs px-1 text-secondary dark:text-light md:hidden">
                Menu
              </span>
              <div>
                <Humberger />
              </div>
            </button>
          </div>
          {/* End Humberger Menu */}
        </div>
      </div>
      {/* End Navbar */}

      {/* NavDown */}
      <div className="fixed z-30 bottom-0 left-0 right-0 max-w-[330px] mx-auto py-5 md:hidden">
        <ul className="flex flex-row mx-auto rounded-lg backdrop-blur shadow-lg shadow-gray-400 dark:shadow-gray-100">
          {menus.map((menu, index) => (
            <li
              className=" justify-between text-secondary dark:text-light m-auto p-1 cursor-pointer"
              key={index}
            >
              <Link href={menu.href}>
                <div
                  className={` ${
                    router.asPath === menu.href
                      ? "text-primary "
                      : "text-secondary dark:text-light"
                  }`}
                >
                  <div className="text-center">
                    <p className="inline-block justify-center pt-1 mb-[-5px]">
                      <menu.icon className="w-6" />
                    </p>
                    <p className="text-xs w-12">{menu.text}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* End NavDon */}
    </nav>
  );
}
