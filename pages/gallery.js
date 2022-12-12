import Layout from "@/components/Layout";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";

export default function Gallery() {
  return (
    <Layout title="Gallery Mardian">
      <div className="w-full  h-[1500px] justify-center items-center ">
        <div className="overflow-hidden mb-6">
          <ParallaxBanner
            layers={[
              {
                speed: -100,
                children: (
                  <div className=" translate-y-[750px] w-full">
                    <Image
                      alt="bg"
                      src="/assets/img/bg.png"
                      width="3000"
                      height="3000"
                      className="bg-cover "
                      priority
                    />
                  </div>
                ),
              },

              {
                speed: -40,
                children: (
                  <div className=" translate-y-[350px] w-full">
                    <Image
                      alt="bgstone"
                      src="/assets/img/bgstone.png"
                      width="3000"
                      height="3000"
                      className="bg-cover "
                      priority
                    />
                  </div>
                ),
              },
              {
                speed: -50,
                children: (
                  <div className="absolute inset-0 flex items-center justify-end">
                    <h1 className="text-sm p-2  text-white translate-y-[-100px] font-thin">
                      Mar-Dian
                    </h1>
                  </div>
                ),
              },
              {
                translateX: [100, 0],
                speed: 20,
                children: (
                  <div className="absolute translate-x-[-90px] translate-y-[340px]">
                    <Image
                      alt="bird"
                      src="/assets/img/bird.png"
                      width="3000"
                      height="3000"
                      className="bg-cover w-full "
                      priority
                    />
                  </div>
                ),
              },
              {
                speed: -20,
                children: (
                  <div className="absolute translate-y-[180px]">
                    <Image
                      alt="me"
                      src="/assets/img/me.png"
                      width="3000"
                      height="3000"
                      className="bg-cover w-full "
                      priority
                    />
                  </div>
                ),
              },

              {
                speed: -5,
                children: (
                  <div className="absolute  translate-y-[70px]">
                    <Image
                      alt="my"
                      src="/assets/img/my.png"
                      width="3000"
                      height="3000"
                      className="bg-cover w-full "
                      priority
                    />
                  </div>
                ),
              },
            ]}
            className="aspect-[16/12] mt-20"
          />
        </div>
        <div className="container">
          <h2 className="text-center mb-3">MY GALLERY</h2>
          <p>
            lorem200Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            lorem200Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            lorem200Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </Layout>
  );
}
