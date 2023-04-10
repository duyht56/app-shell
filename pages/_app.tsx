/* eslint-disable @typescript-eslint/no-explicit-any */
import '@/styles/globals.scss';
import '../styles/_main.scss';
import 'swiper/swiper-bundle.min.css';
import ErrorBoundary from '../components/ErrorBoundary';
import { AppProps } from 'next/app';

export function reportWebVitals(metric: unknown) {
  console.log(metric);
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps}></Component>
    </ErrorBoundary>
  );
}
