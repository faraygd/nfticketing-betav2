import { ThirdwebProvider } from '@thirdweb-dev/react';
import '../../styles/globals.css'
import { chainId } from '../../const/mydetails';
export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={chainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
