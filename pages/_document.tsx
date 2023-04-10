import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

interface DocumentProps extends DocumentInitialProps {
  pageProps: {
    pageData: {
      brand: string;
      language: string;
    };
  };
}

class CustomDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    let pageProps = null;

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => {
          pageProps = props.pageProps;
          return <App {...props} />;
        },
        enhanceComponent: Component => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, pageProps };
  }

  render() {
    const { brand = 'Electrolux', language } =
      this.props?.pageProps?.pageData || {};

    console.log('This is my page brand:');
    console.log(brand);
    return (
      <Html lang={language} data-theme={brand}>
        <Head>
          {brand === 'Electrolux' && (
            <>
              <link href="/styles/electrolux.css" rel="stylesheet"></link>
              <link rel="stylesheet" href="/fonts/electrolux/font.css" />
            </>
          )}
          {brand === 'aeg' && (
            <>
              <link href="/styles/aeg.css" rel="stylesheet"></link>
              <link rel="stylesheet" href="/fonts/aeg/font.css" />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
