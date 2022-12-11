import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) {
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
      <div className="flex flex-col lg:max-w-7xl mx-auto">
        <Navbar />

        <div className="px-4 md:p-10 flex-grow bg-slate-100 dark:bg-slate-800 dark:text-slate-50  ">
          {props.children}
        </div>

        <Footer />
      </div>
    </>
  );
}
