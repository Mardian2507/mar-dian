import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <meta content="#5651e5" name="theme-color" />
        <meta content="#5651e5" name="msapplication-navbutton-color" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="#5651e5" name="apple-mobile-web-app-status-bar-style" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className=" dark:bg-black bg-slate-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
