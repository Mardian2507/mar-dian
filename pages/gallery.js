import Layout from "@components/Layout";
import Image from "next/image";
import ParallaxHero from "components/ParallaxHero";
import Html from "@public/assets/skills/html.png";
import Css from "@public/assets/skills/css.png";
import Javascript from "@public/assets/skills/javascript.png";
import ReactImg from "@public/assets/skills/react.png";
import Tailwind from "@public/assets/skills/tailwind.png";
import Firebase from "@public/assets/skills/firebase.png";
import Github from "@public/assets/skills/github1.png";
import NextJS from "@public/assets/skills/nextjs.png";
import CardPost from "components/CardPost";
import { useState } from "react";
import mockPosts from "../utils/posts.json";

export default function Gallery() {
  const [posts, setPost] = useState(mockPosts);

  return (
    <Layout title="Gallery Mardian">
      <div className="w-full h-full">
        <div className="w-full">
          <ParallaxHero />
        </div>

        <div className="container px-5 flex flex-col justify-center items-center">
          <h2
            className="sticky z-10 top-2 pt-2 text-center tracking-widest  text-primary backdrop-blur rounded-lg uppercase"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Gallery
          </h2>

          <div className="grid grid-cols-4 gap-1 md:grid-cols-5 md:gap-2 mt-10">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
              >
                <CardPost {...post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
