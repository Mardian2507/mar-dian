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

const menus = [
  { href: "/", text: "home" },
  { href: "/about", text: "about" },
  { href: "/skills", text: "skills" },
  { href: "/projects", text: "projects" },
  { href: "/contact", text: "contact" },
];

const icons = [
  {
    href: "https://www.instagram.com/m_ardi_an/?hl=en",
    img: Instagram,
  },
  {
    href: "https://www.linkedin.com/in/mardian-suherman-6a054a183/",
    img: Linkedin,
  },
  {
    href: "https://github.com/Mardian2507",
    img: Github,
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
    <nav
      className={
        shadow
          ? "w-full fixed z-10 shadow-xl py-3 px-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur md:py-4 lg:max-w-7xl ease-in-out duration-100"
          : "w-full fixed z-10 py-3 px-4 md:py-4 lg:max-w-7xl"
      }
    >
      <div className="flex flex-row justify-between items-center mx-auto">
        <div>
          <Link href="/">
            <Image
              src="/assets/logoMe.webp"
              alt="Mardian Suherman Icon"
              width="100"
              height="30"
              priority
              className=" bg-cover"
            />
          </Link>
        </div>

        <div
          className={`fixed w-full h-screen md:h-full bg-slate-900/90 top-0 transition-all md:static md:bg-transparent ${
            nav ? "left-0" : "-left-full"
          }`}
        >
          <div className=" w-3/4 h-full md:w-full md:flex-row-reverse bg-amber-300 md:bg-transparent">
            <div className="flex flex-row p-5 justify-between md:hidden">
              <Image
                src="/assets/logoMe.webp"
                alt="Mardian Suherman Logo"
                width="180"
                height="180"
                className="bg-cover"
                priority
              />

              <button
                className="cursor-pointer"
                onClick={() => {
                  setNav(false);
                }}
              >
                <BtnClose />
              </button>
            </div>

            <div className="pt-8 flex flex-row p-5 md:hidden">
              <h3 className="text-center">
                Let&#39;s build something together
              </h3>
            </div>

            <ul className="flex flex-col pt-8 space-y-2 px-5 md:pt-0 md:flex-row md:justify-end md:space-x-10  md:space-y-0 ">
              {menus.map((menu, index) => (
                <li className="md:uppercase" key={index}>
                  <Link href={menu.href}>
                    <div
                      className={`text-2xl md:text-sm cursor-pointer ${
                        router.asPath === menu.href
                          ? "text-[#5651e5] border-b-4 border-[#5651e5]"
                          : "text-black dark:text-slate-50 hover:border-b-4 transition-all"
                      }`}
                    >
                      <h3 className="pt-2">{menu.text}</h3>{" "}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-12 px-5 md:hidden">
              <span className="">Let&#39;s conect: </span>
            </div>

            <ul className="flex flex-row pt-2 px-5 justify-between md:hidden">
              {icons.map((icon, index) => (
                <li key={index}>
                  <Link href={icon.href}>
                    <icon.img />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-auto">
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

        <button
          className="md:hidden dark:text-slate-50"
          onClick={() => {
            setNav(!nav);
          }}
        >
          <Humberger />
        </button>
      </div>
    </nav>
  );
}
