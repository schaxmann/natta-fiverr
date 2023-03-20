import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en" style={{ height: "100vh", backgroundColor: "black" }}>
        <link rel="stylesheet" href="https://use.typekit.net/nya7rrg.css" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#000000" />
        {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      /> */}

        <Head />
        <body style={{ position: "fixed", height: "100vh" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
