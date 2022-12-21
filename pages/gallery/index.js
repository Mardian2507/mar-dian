import Layout from "@components/Layout";
import ParallaxHero from "components/ParallaxHero";
import CardPost from "components/CardPost";
import { useState } from "react";
import mockPosts from "/utils/posts.json";
import Link from "next/link";

export default function Gallery() {
  const [posts, setPost] = useState(mockPosts);

  return (
    <Layout title="Gallery Mardian">
      <div className="w-full h-full">
        <div className="w-full">
          <ParallaxHero />
        </div>

        <div className="container px-1 lg:px-4 flex flex-col justify-center items-center">
          <h2
            className="mt-7 text-center tracking-widest  text-primary uppercase"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Gallery
          </h2>

          <div className="grid grid-cols-3 gap-1 lg:grid-cols-5 lg:gap-2 mt-10 mb-10">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-1 shadow-xl rounded-md hover:scale-105 ease-in duration-300"
              >
                <Link href={`/gallery/${post.id}`}>
                  <CardPost {...post} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
