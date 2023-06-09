import { ThirdwebProvider } from '@thirdweb-dev/react';
import '../../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain="goerli">
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
