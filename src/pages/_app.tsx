import "@/styles/globals.css";
import "@/styles/pages.scss";
import "@/styles/components.scss";
import type { AppProps } from "next/app";
import PageContent from "./layouts/PageContent";

export default function App({ Component, pageProps }: AppProps) {
  return <PageContent><Component {...pageProps}/></PageContent>;
}
