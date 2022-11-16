import { Inter } from "@next/font/google";
import "../styles/globals.scss";

//download font
const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
