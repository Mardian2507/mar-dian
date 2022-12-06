import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NextNProgress />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
