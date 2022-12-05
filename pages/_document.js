import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
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
