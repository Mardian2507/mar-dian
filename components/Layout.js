import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NavDown from "./NavDown";

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
      <div className="flex flex-col lg:max-w-7xl mx-auto ">
        <Navbar />
        <main className="flex-grow dark:bg-slate-800 dark:text-slate-50 bg-slate-100 ">
          {props.children}
        </main>
        <NavDown />
        <Footer />
      </div>
    </>
  );
}
