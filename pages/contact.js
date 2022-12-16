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
          <h2
            className=" pt-2 text-center tracking-widest  text-primary uppercase"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
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
                      <ul
                        className=" flex justify-between"
                        data-aos="zoom-in-up"
                        data-aos-duration="2000"
                      >
                        {icons.map((icon, index) => (
                          <li key={index} className="text-center">
                            <Link href={icon.href}>
                              <div className="flex justify-center mb-2 ">
                                <icon.img className="cursor-pointer shadow-lg shadow-slate-600 rounded-md border-primary border-2" />
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
                  method="POST"
                  action="https://getform.io/f/4986e683-7d49-4f12-94e1-2e5cd581586c"
                  encType="multipart/form-data"
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-1">
                    <div className="flex flex-col">
                      <label for="name">
                        <span
                          className="uppercase text-sm py-2 block after:content-['*'] after:text-danger after:ml-2"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                        >
                          Name
                        </span>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          minlength="2"
                          placeholder="input phone number"
                          className="placeholder:text-slate-400 w-full border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary invalid:text-danger invalid:focus:ring-danger invalid:focus:border-danger peer"
                        />
                        <p className="mt-2 text-sm text-center text-danger invisible peer-invalid:visible">
                          Name Invalid
                        </p>
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label for="phone">
                        <span
                          className="uppercase text-sm py-2 block after:content-['*'] after:text-danger after:ml-2"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                        >
                          Phone Number
                        </span>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          minlength="8"
                          maxlength="14"
                          placeholder="input phone number"
                          className="placeholder:text-slate-400 w-full border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary invalid:text-danger invalid:focus:ring-danger invalid:focus:border-danger peer"
                        />
                        <p className="mt-2 text-sm text-center text-danger invisible peer-invalid:visible">
                          Phone Number Invalid
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col py-1">
                    <label for="email">
                      <span
                        className="uppercase text-sm py-2 block after:content-['*'] after:text-danger after:ml-2"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        Email
                      </span>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="input email"
                        className="placeholder:text-slate-400 w-full border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary invalid:text-danger invalid:focus:ring-danger invalid:focus:border-danger peer"
                      />
                      <p className="mt-2 text-sm text-center text-danger invisible peer-invalid:visible">
                        Email Invalid
                      </p>
                    </label>
                  </div>
                  <div className="flex flex-col py-1">
                    <label for="subject">
                      <span
                        className="uppercase text-sm py-2 block after:content-['*'] after:text-danger after:ml-2"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        Subject
                      </span>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        minlength="2"
                        placeholder="input subject"
                        className="placeholder:text-slate-400 w-full border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary invalid:text-danger invalid:focus:ring-danger invalid:focus:border-danger peer"
                      />
                      <p className="mt-2 text-sm text-center text-danger invisible peer-invalid:visible">
                        Subject Invalid
                      </p>
                    </label>
                  </div>
                  <div className="flex flex-col py-1">
                    <label for="message">
                      <span
                        className="uppercase text-sm py-2 block after:content-['*'] after:text-danger after:ml-2"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                      >
                        Message
                      </span>
                      <textarea
                        id="message"
                        rows="10"
                        name="massage"
                        minlength="2"
                        placeholder="input message"
                        className="placeholder:text-slate-400 w-full border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary invalid:text-danger invalid:focus:ring-danger invalid:focus:border-danger peer"
                      />
                      <p className="mt-2 text-sm text-center text-danger invisible peer-invalid:visible">
                        Message Invalid
                      </p>
                    </label>
                  </div>
                  <button
                    className="w-full p-4 text-black dark:text-white/90 hover:dark:text-black rounded-lg hover:bg-gray-300 mt-4 border-primary border-2"
                    data-aos="zoom-in-up"
                    data-aos-duration="2000"
                  >
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
