import { Html, Main, NextScript } from 'next/document';
import Head from 'next/head';

export default function MyDocument() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <title>KD | Portfolio</title>
      </Head>
      <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
