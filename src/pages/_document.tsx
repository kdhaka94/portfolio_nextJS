import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }
  render() {
    return (
      <Html lang="en">
        <Head><title>KD | Portfolio</title></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}