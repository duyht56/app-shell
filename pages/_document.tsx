import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { readFileSync } from 'fs';
import { join } from 'path';

interface DocumentProps extends DocumentInitialProps {
  pageProps: {
    pageData: {
      brand: string;
      language: string;
    };
  };
}

class InlineStylesHead extends Head {
  getCssLinks: Head['getCssLinks'] = ({ allFiles }) => {
    const { assetPrefix } = this.context;
    if (!allFiles || allFiles.length === 0) return null;
    return allFiles
      .filter((file: any) => /\.css$/.test(file))
      .map((file: any) => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: readFileSync(join(process.cwd(), '.next', file), 'utf-8'),
          }}
        />
      ));
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
        <InlineStylesHead />
        {/* <Head title="POC">
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
          <meta
            name="description"
            content="Vår utmärkta PerfectCare 600 tvättmaskin med SensiCare System justerar längden på programmet efter tvättmängden, och använder mindre energi och vatten samt förhindrar att plaggen tvättas för länge. Aktiverar de mest ekonomiska programmen för även de minsta tvättmängderna"
          ></meta>
        </Head> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
