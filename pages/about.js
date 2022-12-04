import Layout from "@/components/Layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout title="About Mardian">
      <div id="about">
        {/* <Image
          src="`https://images.unsplash.com/photo-1557244056-ac3033d17d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2V4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60`"
          alt="Mardian Suherman Icon"
          width={24}
          height={24}
          priority
          className="rounded-full bg-cover"
        /> */}
        <h1 className="text-3xl font-bold underline">this is About</h1>
      </div>
    </Layout>
  );
}
