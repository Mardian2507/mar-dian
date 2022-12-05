import Link from "next/link";
import ContactIcon from "./svgs/contactIcon";
import HomeIcon from "./svgs/homeIcon";
import ProjectsIcon from "./svgs/projectsIcon";
import SkillsIcon from "./svgs/skillsIcon";

const icons = [
  {
    href: "/",
    img: HomeIcon,
  },
  {
    href: "/skills",
    img: SkillsIcon,
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

export default function NavDown() {
  return (
    <>
      <div className="fixed z-[5] bottom-0 left-0 right-0 flex justify-between max-w-[330px] mx-auto py-5 md:hidden">
        <ul className="flex flex-row mx-auto rounded-full backdrop-blur shadow-lg shadow-gray-100">
          {icons.map((icon, index) => (
            <li
              className=" justify-between text-slate-900 dark:text-slate-50 mx-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
              key={index}
            >
              <Link href={icon.href}>
                <icon.img />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
