import Layout from "@/components/Layout";
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

export default function Contact() {
  return (
    <Layout title="Contact Mardian">
      <div id="contact" className="w-full h-full">
        <div className="lg:max-w-7xl m-auto px-2 py-16 w-full ">
          <h2 className=" pt-2 text-center tracking-widest  text-[#5651e5] uppercase">
            Contact
          </h2>
          <h2 className="py-4">Get In Touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full ">
                <div>
                  <Image
                    src="/assets/mar-dian.webp"
                    width="200"
                    height="300"
                    className="rounded-xl"
                    alt="Contact Mardian"
                  />
                </div>
                <div>
                  <h2 className="py-2">Mardian Suherman</h2>
                  <p>Front-End Developer</p>
                  <p className="py-4">
                    I am available for freelance or full-time positions. Contact
                    me and let&apos;s talk.
                  </p>
                </div>
                <div>
                  <p className="uppercase pt-8">Connect With Me</p>

                  <div className="flex items-center justify-between py-4">
                    <div className="container">
                      <ul className=" flex justify-between">
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
              </div>
            </div>

            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form
                  action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        Phone Number
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows="10"
                      name="message"
                    ></textarea>
                  </div>
                  <button className="w-full p-4 text-black dark:text-white/90 hover:dark:text-black rounded-lg hover:bg-gray-300 mt-4 border-[#5651e5] border-2">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
