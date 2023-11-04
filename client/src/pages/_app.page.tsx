import "~/styles/reset.css";
import "~/styles/global.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="take-cantik.com"
        description="take-cantikの個人ページ"
        canonical="https://take-cantik.com/"
        openGraph={{
          site_name: "take-cantik.com",
          title: "take-cantik",
          type: "website",
          url: "https://take-cantik.com/",
          description: "take-cantikの個人ページ",
          images: [{ url: "https://take-cantik.com/images/take-cantik.jpg" }],
        }}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
