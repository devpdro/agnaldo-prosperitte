import type { AppProps } from "next/app";

import "src/presentation/styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
