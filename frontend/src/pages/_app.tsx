import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik, Domine } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], variable: '--font-rubik' });
const domine = Domine({ subsets: ["latin"], variable: '--font-domine' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <main className={`${rubik.variable} ${domine.variable}`}>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </div>
  );
}
