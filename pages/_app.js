import "../styles/globals.css";
import "../styles/scss/styles/_includes.scss";
import "../styles/HeroContentArea.scss";
import "swiper/swiper-bundle.min.css";
import ErrorBoundary from "../components/ErrorBoundary";

export function reportWebVitals(metric) {
  console.log(metric);
}

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
