import Layout from "@/components/Layout";
import Image from "next/image";

export default function Gallery() {
  return (
    <Layout title="Gallery Mardian">
      <div id="gallery" className="relative h-[1500px] inset-y-20">
        <Image
          alt="bg1"
          src="/assets/img/bg.png"
          width="3000"
          height="3000"
          className="bg-cover w-full absolute"
        />
        <Image
          alt="bgStone"
          src="/assets/img/bgstone.png"
          width="3000"
          height="3000"
          className="bg-cover w-full absolute"
        />
        <Image
          alt="bird"
          src="/assets/img/bird.png"
          width="3000"
          height="3000"
          className="bg-cover w-full absolute"
        />
        <Image
          alt="me"
          src="/assets/img/me.png"
          width="3000"
          height="3000"
          className="bg-cover w-full absolute"
        />
        <Image
          alt="my"
          src="/assets/img/my.png"
          width="3000"
          height="3000"
          className="bg-cover w-full absolute"
        />
      </div>
    </Layout>
  );
}
