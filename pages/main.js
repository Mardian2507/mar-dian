import Github from "components/svgs/github";
import Linkedin from "components/svgs/linkedin";
import Resume from "components/svgs/resume";
import Whatsapp from "components/svgs/whatsapp";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <>
      <div className="w-full fixed lg:max-w-7xl top-0 bottom-0 bg-white/60 dark:bg-black/60 " />
      <div
        id="hero"
        className=" flex justify-center items-center bg-bg1 bg-cover bg-no-repeat bg-center min-h-screen bg-fixed"
      >
        <div className="pt-20 px-10 z-[2]">
          <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
              <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-slate-50">
                LET&#39;S BUILD SOMETHING TOGETHER
              </p>
              <h1 className="py-4 text-gray-700 dark:text-slate-200">
                Hi, I&#39;m <span className="text-[#5651e5]"> Mardian</span>
              </h1>
              <h1 className="py-2 text-gray-700 dark:text-slate-200">
                A Front-End Web Developer
              </h1>
              <p className="py-4 text-gray-600 dark:text-slate-200 sm:max-w-[70%] m-auto">
                I&#39;m focused on building responsive front-end web
                applications integrating back-end technologies.
              </p>
              <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                <Link
                  href="https://www.linkedin.com/in/mardian-suherman-6a054a183/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Linkedin />
                  </div>
                </Link>
                <Link
                  href="https://github.com/Mardian2507"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Github />
                  </div>
                </Link>
                <Link href="whatsapp://send?text=Assalamualaikum&phone=+6285659467422">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Whatsapp />
                  </div>
                </Link>
                <Link href="">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Resume />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className=" flex justify-center items-center bg-bg2 bg-cover bg-no-repeat bg-center min-h-screen bg-fixed"
      >
        <div className="pt-20 px-10 z-[2]">
          <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <p className="uppercase text-xl tracking-widest text-[#5651e5]">
                About
              </p>
              <h2 className="py-4">Who I Am</h2>
              <p className="py-2 text-black dark:text-slate-50">
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
                <p className="py-2 text-gray-600 underline cursor-pointer">
                  Check out some of my latest projects.
                </p>
              </Link>
            </div>
            <div className="w-fit h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 mb-4">
              <Image
                src="/assets/logo1.webp"
                width="200"
                height="300"
                className="rounded-xl"
                alt="logo about"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="skills" className=" flex justify-center items-center ">
        <h2 className="pt-20 px-5 z-[2]">
          about Lorem100Magna laboris laborum sunt adipisicing nostrud cillum
          nostrud cillum
          <br />
          <br />
          <Link href="/about"> about</Link>
        </h2>
      </div>

      <div id="" className="pt-60">
        SKILLS Lorem100Magna laboris laborum sunt adipisicing nostrud cillum
        nostrud cillum. Ipsum et tempor culpa nostrud ullamco eu qui do irure
        esse. Irure nulla veniam amet consequat nisi voluptate enim sunt laboris
        anim exercitation consequat labore. Sunt labore nisi eu amet ipsum Lorem
        eiusmod mollit in veniam veniam ipsum sit. Ipsum dolore exercitation
        nulla eu. Reprehenderit consequat laborum dolore laborum cillum
        adipisicing amet incididunt aute qui aliquip minim. Consequat ullamco
        aliquip laboris quis mollit eu mollit magna. Mollit id aliqua eiusmod
        officia ea sunt. Velit tempor eiusmod id veniam eu enim ipsum officia
        adipisicing adipisicing. Pariatur eu cillum aliqua laborum sunt. Officia
        irure sunt magna laborum elit. Lorem excepteur culpa qui sit enim id.
        Eiusmod dolore ad ullamco Lorem veniam excepteur laborum minim non
        commodo sit consequat enim. Nisi anim adipisicing ea incididunt.
        Consequat cupidatat mollit labore voluptate pariatur consequat labore.
        Aliqua mollit velit non velit in duis anim elit do occaecat cillum id
        voluptate reprehenderit. Incididunt id id id est. Nostrud labore anim
        cillum minim sunt reprehenderit adipisicing ut cillum. Mollit ipsum elit
        velit adipisicing est amet Lorem adipisicing commodo voluptate sit
        occaecat. In labore in exercitation esse cillum non duis duis. Veniam eu
        dolor irure qui est cillum ut in tempor do do Lorem nisi est. Et
        deserunt quis ullamco tempor minim Lorem excepteur Lorem consectetur
        labore Lorem tempor amet dolor. Qui qui aute excepteur laboris cillum.
        Dolor consequat excepteur labore nulla eiusmod ex consectetur. In non
        deserunt adipisicing aliqua sint adipisicing. Dolore dolor enim aute
        anim culpa aliquip nostrud voluptate sint ullamco id et. Reprehenderit
        id id sint sunt pariatur. Et eiusmod id consectetur mollit qui pariatur
        officia anim. Dolor Lorem consequat aliquip nulla id laborum excepteur
        ut sunt ea veniam dolore irure. Aute adipisicing esse ea eu eu culpa
        veniam cupidatat eiusmod nostrud. Pariatur non anim enim duis est
        commodo. Et eiusmod nulla officia deserunt et ad elit. Aliquip eu irure
        elit officia consequat pariatur anim nostrud ad fugiat. Irure qui
        eiusmod id duis aute. Consequat laboris ullamco nostrud anim veniam non.
        Do adipisicing elit ullamco veniam adipisicing velit occaecat. Mollit
        veniam laborum consequat ut consequat quis magna consequat do aliquip
        qui eu culpa. Ad minim occaecat ad do ipsum culpa. Laborum aliquip
        exercitation occaecat minim adipisicing consectetur. Culpa id non
        eiusmod dolore ex dolore consequat ex veniam aliquip veniam aliqua.
        Cillum excepteur minim ipsum amet deserunt nulla velit anim elit qui.
        Fugiat quis sint excepteur ex. Excepteur exercitation ad pariatur nulla
        aute proident sunt enim anim nostrud fugiat ut tempor nisi. Id esse
        cupidatat reprehenderit cillum mollit ipsum enim magna enim fugiat Lorem
        est ex irure. Eiusmod commodo velit cupidatat occaecat irure occaecat et
        commodo duis velit dolor ea dolor consectetur. Commodo amet sunt nisi
        aliqua velit mollit aute ullamco aliqua consectetur cupidatat magna.
        Nulla laborum mollit eiusmod ipsum sunt dolor ipsum incididunt deserunt.
        Cillum sit elit elit non ad commodo dolor culpa. Do do est ad ex ea
        veniam nulla esse deserunt. Aute eu sit irure aute incididunt dolor qui
        officia elit anim ipsum cupidatat. Reprehenderit veniam adipisicing
        magna consequat non laborum eiusmod est. Non est veniam elit minim est
        excepteur id excepteur anim eiusmod dolore officia do pariatur. Elit
        amet consectetur veniam ipsum et id. Proident eu velit sit non ad amet
        officia labore dolor ipsum veniam pariatur. Irure id cillum qui anim
        cillum ea laborum eiusmod nostrud exercitation. Duis officia consequat
        laborum non occaecat commodo cupidatat sit minim fugiat. Sint magna
        magna consectetur cillum consequat mollit fugiat in dolor aliquip
        occaecat ad.
      </div>

      <div id="projects" className="pt-60">
        PROJECTS Lorem100Magna laboris laborum sunt adipisicing nostrud cillum
        nostrud cillum. Ipsum et tempor culpa nostrud ullamco eu qui do irure
        esse. Irure nulla veniam amet consequat nisi voluptate enim sunt laboris
        anim exercitation consequat labore. Sunt labore nisi eu amet ipsum Lorem
        eiusmod mollit in veniam veniam ipsum sit. Ipsum dolore exercitation
        nulla eu. Reprehenderit consequat laborum dolore laborum cillum
        adipisicing amet incididunt aute qui aliquip minim. Consequat ullamco
        aliquip laboris quis mollit eu mollit magna. Mollit id aliqua eiusmod
        officia ea sunt. Velit tempor eiusmod id veniam eu enim ipsum officia
        adipisicing adipisicing. Pariatur eu cillum aliqua laborum sunt. Officia
        irure sunt magna laborum elit. Lorem excepteur culpa qui sit enim id.
        Eiusmod dolore ad ullamco Lorem veniam excepteur laborum minim non
        commodo sit consequat enim. Nisi anim adipisicing ea incididunt.
        Consequat cupidatat mollit labore voluptate pariatur consequat labore.
        Aliqua mollit velit non velit in duis anim elit do occaecat cillum id
        voluptate reprehenderit. Incididunt id id id est. Nostrud labore anim
        cillum minim sunt reprehenderit adipisicing ut cillum. Mollit ipsum elit
        velit adipisicing est amet Lorem adipisicing commodo voluptate sit
        occaecat. In labore in exercitation esse cillum non duis duis. Veniam eu
        dolor irure qui est cillum ut in tempor do do Lorem nisi est. Et
        deserunt quis ullamco tempor minim Lorem excepteur Lorem consectetur
        labore Lorem tempor amet dolor. Qui qui aute excepteur laboris cillum.
        Dolor consequat excepteur labore nulla eiusmod ex consectetur. In non
        deserunt adipisicing aliqua sint adipisicing. Dolore dolor enim aute
        anim culpa aliquip nostrud voluptate sint ullamco id et. Reprehenderit
        id id sint sunt pariatur. Et eiusmod id consectetur mollit qui pariatur
        officia anim. Dolor Lorem consequat aliquip nulla id laborum excepteur
        ut sunt ea veniam dolore irure. Aute adipisicing esse ea eu eu culpa
        veniam cupidatat eiusmod nostrud. Pariatur non anim enim duis est
        commodo. Et eiusmod nulla officia deserunt et ad elit. Aliquip eu irure
        elit officia consequat pariatur anim nostrud ad fugiat. Irure qui
        eiusmod id duis aute. Consequat laboris ullamco nostrud anim veniam non.
        Do adipisicing elit ullamco veniam adipisicing velit occaecat. Mollit
        veniam laborum consequat ut consequat quis magna consequat do aliquip
        qui eu culpa. Ad minim occaecat ad do ipsum culpa. Laborum aliquip
        exercitation occaecat minim adipisicing consectetur. Culpa id non
        eiusmod dolore ex dolore consequat ex veniam aliquip veniam aliqua.
        Cillum excepteur minim ipsum amet deserunt nulla velit anim elit qui.
        Fugiat quis sint excepteur ex. Excepteur exercitation ad pariatur nulla
        aute proident sunt enim anim nostrud fugiat ut tempor nisi. Id esse
        cupidatat reprehenderit cillum mollit ipsum enim magna enim fugiat Lorem
        est ex irure. Eiusmod commodo velit cupidatat occaecat irure occaecat et
        commodo duis velit dolor ea dolor consectetur. Commodo amet sunt nisi
        aliqua velit mollit aute ullamco aliqua consectetur cupidatat magna.
        Nulla laborum mollit eiusmod ipsum sunt dolor ipsum incididunt deserunt.
        Cillum sit elit elit non ad commodo dolor culpa. Do do est ad ex ea
        veniam nulla esse deserunt. Aute eu sit irure aute incididunt dolor qui
        officia elit anim ipsum cupidatat. Reprehenderit veniam adipisicing
        magna consequat non laborum eiusmod est. Non est veniam elit minim est
        excepteur id excepteur anim eiusmod dolore officia do pariatur. Elit
        amet consectetur veniam ipsum et id. Proident eu velit sit non ad amet
        officia labore dolor ipsum veniam pariatur. Irure id cillum qui anim
        cillum ea laborum eiusmod nostrud exercitation. Duis officia consequat
        laborum non occaecat commodo cupidatat sit minim fugiat. Sint magna
        magna consectetur cillum consequat mollit fugiat in dolor aliquip
        occaecat ad.
      </div>

      <div id="contact" className="pt-60">
        CONTACT Lorem100Magna laboris laborum sunt adipisicing nostrud cillum
        nostrud cillum. Ipsum et tempor culpa nostrud ullamco eu qui do irure
        esse. Irure nulla veniam amet consequat nisi voluptate enim sunt laboris
        anim exercitation consequat labore. Sunt labore nisi eu amet ipsum Lorem
        eiusmod mollit in veniam veniam ipsum sit. Ipsum dolore exercitation
        nulla eu. Reprehenderit consequat laborum dolore laborum cillum
        adipisicing amet incididunt aute qui aliquip minim. Consequat ullamco
        aliquip laboris quis mollit eu mollit magna. Mollit id aliqua eiusmod
        officia ea sunt. Velit tempor eiusmod id veniam eu enim ipsum officia
        adipisicing adipisicing. Pariatur eu cillum aliqua laborum sunt. Officia
        irure sunt magna laborum elit. Lorem excepteur culpa qui sit enim id.
        Eiusmod dolore ad ullamco Lorem veniam excepteur laborum minim non
        commodo sit consequat enim. Nisi anim adipisicing ea incididunt.
        Consequat cupidatat mollit labore voluptate pariatur consequat labore.
        Aliqua mollit velit non velit in duis anim elit do occaecat cillum id
        voluptate reprehenderit. Incididunt id id id est. Nostrud labore anim
        cillum minim sunt reprehenderit adipisicing ut cillum. Mollit ipsum elit
        velit adipisicing est amet Lorem adipisicing commodo voluptate sit
        occaecat. In labore in exercitation esse cillum non duis duis. Veniam eu
        dolor irure qui est cillum ut in tempor do do Lorem nisi est. Et
        deserunt quis ullamco tempor minim Lorem excepteur Lorem consectetur
        labore Lorem tempor amet dolor. Qui qui aute excepteur laboris cillum.
        Dolor consequat excepteur labore nulla eiusmod ex consectetur. In non
        deserunt adipisicing aliqua sint adipisicing. Dolore dolor enim aute
        anim culpa aliquip nostrud voluptate sint ullamco id et. Reprehenderit
        id id sint sunt pariatur. Et eiusmod id consectetur mollit qui pariatur
        officia anim. Dolor Lorem consequat aliquip nulla id laborum excepteur
        ut sunt ea veniam dolore irure. Aute adipisicing esse ea eu eu culpa
        veniam cupidatat eiusmod nostrud. Pariatur non anim enim duis est
        commodo. Et eiusmod nulla officia deserunt et ad elit. Aliquip eu irure
        elit officia consequat pariatur anim nostrud ad fugiat. Irure qui
        eiusmod id duis aute. Consequat laboris ullamco nostrud anim veniam non.
        Do adipisicing elit ullamco veniam adipisicing velit occaecat. Mollit
        veniam laborum consequat ut consequat quis magna consequat do aliquip
        qui eu culpa. Ad minim occaecat ad do ipsum culpa. Laborum aliquip
        exercitation occaecat minim adipisicing consectetur. Culpa id non
        eiusmod dolore ex dolore consequat ex veniam aliquip veniam aliqua.
        Cillum excepteur minim ipsum amet deserunt nulla velit anim elit qui.
        Fugiat quis sint excepteur ex. Excepteur exercitation ad pariatur nulla
        aute proident sunt enim anim nostrud fugiat ut tempor nisi. Id esse
        cupidatat reprehenderit cillum mollit ipsum enim magna enim fugiat Lorem
        est ex irure. Eiusmod commodo velit cupidatat occaecat irure occaecat et
        commodo duis velit dolor ea dolor consectetur. Commodo amet sunt nisi
        aliqua velit mollit aute ullamco aliqua consectetur cupidatat magna.
        Nulla laborum mollit eiusmod ipsum sunt dolor ipsum incididunt deserunt.
        Cillum sit elit elit non ad commodo dolor culpa. Do do est ad ex ea
        veniam nulla esse deserunt. Aute eu sit irure aute incididunt dolor qui
        officia elit anim ipsum cupidatat. Reprehenderit veniam adipisicing
        magna consequat non laborum eiusmod est. Non est veniam elit minim est
        excepteur id excepteur anim eiusmod dolore officia do pariatur. Elit
        amet consectetur veniam ipsum et id. Proident eu velit sit non ad amet
        officia labore dolor ipsum veniam pariatur. Irure id cillum qui anim
        cillum ea laborum eiusmod nostrud exercitation. Duis officia consequat
        laborum non occaecat commodo cupidatat sit minim fugiat. Sint magna
        magna consectetur cillum consequat mollit fugiat in dolor aliquip
        occaecat ad.
      </div>
    </>
  );
}
