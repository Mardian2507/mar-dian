import Layout from "@components/Layout";
import ParallaxHero from "components/ParallaxHero";
import CardPost from "components/CardPost";
import { useState } from "react";
import mockPosts from "/utils/posts.json";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "config/firebase";
import LogOut from "components/LogOut";
import GoogleLogin from "components/GoogleLogin";
import PageLoading from "components/PageLoading";

export default function Gallery() {
  const [user] = useAuthState(auth);

  // console.log(user);

  const [posts, setPost] = useState(mockPosts);

  return (
    <Layout title="Mardian Gallery">
      <div className="min-h-screen">
        <PageLoading />
        <div className="w-full h-full">
          <div className="w-full">
            {/* <ParallaxHero /> */}
            {user ? <ParallaxHero /> : null}
          </div>

          <div className="px-1 lg:px-4 flex flex-col justify-center items-center">
            <h2 className="mt-7 mb-5 text-center tracking-widest  text-primary uppercase">
              Gallery
            </h2>

            {user ? <LogOut /> : <GoogleLogin />}

            <div className="grid grid-cols-3 gap-0 lg:grid-cols-6 lg:gap-1 mt-5 mb-20 ">
              {posts.map((post) => (
                <Tilt
                  key={post.id}
                  perspective={500}
                  scale={0.9}
                  className="tilt-card group p-1 shadow-xl rounded-md hover:scale-105 ease-in duration-300 flex items-center justify-center text-center"
                >
                  <Link href={`/gallery/${post.title}`}>
                    <CardPost {...post} />
                  </Link>
                  <span className="hidden md:block tilt-text px-3 text-secondary text-shadow-light text-[4px] group-hover:text-xl group-hover:font-bold">
                    {post.title}
                  </span>
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
