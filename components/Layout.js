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

        <div className="flex-grow bg-slate-100 dark:bg-slate-800 text-secondary dark:text-light  ">
          {props.children}
        </div>

        <Footer />
      </div>
    </>
  );
}
