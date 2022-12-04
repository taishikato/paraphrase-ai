import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Manrope } from "@next/font/google";
import "../styles/globals.css";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { NotificationsProvider } from "@mantine/notifications";

const manrope = Manrope({ subsets: ["latin"] });

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <GoogleAnalytics
        trackPageViews={process.env.NEXT_PUBLIC_PROD === "true"}
      />
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>
          Paraphrase AI - The paraphrasing tool for web content that wows
        </title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪄</text></svg>"
        ></link>
        <meta property="og:type" content="website" key="og-type" />
        <meta
          property="og:image"
          content="https://paraphraseai.app/ogp-image.png"
          key="og-image"
        />
        <meta property="og:locale" content="en_US" key="og-locale" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:description"
          content="The paraphrasing tool for web content that wows"
          key="og-description"
        />
        <meta
          property="og:title"
          content="Paraphrase AI - The paraphrasing tool for web content that wows"
          key="og-title"
        />
        <meta
          property="og:url"
          content="https://paraphraseai.app"
          key="og-url"
        />
        <meta
          name="description"
          content="The paraphrasing tool for web content that wows"
          key="description"
        />
        <link rel="canonical" key="canonical" href="https://paraphraseai.app" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <NotificationsProvider position="top-right">
          <div className={manrope.className}>
            <Component {...pageProps} />
          </div>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
