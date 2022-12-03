import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta
          property="Custom"
          name="description"
          content="Portfolio Mardian Suherman"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col md:max-w-3xl lg:max-w-7xl mx-auto">
        <Navbar />
        <main className="flex-grow dark:bg-slate-800 dark:text-slate-50 bg-slate-100 px-4 pt-20">
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
}
