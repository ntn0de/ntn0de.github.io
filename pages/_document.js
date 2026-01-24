import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="apple-touch-icon"
          href="/favicon.png"
          type="image/png"
        />
      </Head>
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-3YYQL3HBTR"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3YYQL3HBTR');
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
