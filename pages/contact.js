import Layout from "@/components/Layout";
import Image from "next/image";

export default function Contact() {
  return (
    <Layout title="Contact Mardian">
      <div id="contact" className="min-h-screen">
        <h1 className="text-3xl font-bold underline pt-20">page Contact</h1>
        <Image
          alt="loh"
          src="https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4000&q=80"
          width={1024}
          height={1024}
          className="w-full"
        />
      </div>
    </Layout>
  );
}
