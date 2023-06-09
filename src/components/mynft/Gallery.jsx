import { useContract, useOwnedNFTs, useAddress } from "@thirdweb-dev/react";
import NFTCard from "./NFTCard";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Gallery = ({ nft }) => {
  const { contract } = useContract(
    "0xe20b31df6137F2e559255A40d5f270d568896eB5",
    "edition-drop"
  );
  const { data: nfts, isLoading: nftsLoading } = useOwnedNFTs(contract, useAddress());
  useEffect(() => {
    Aos.init();
    console.log("aos", Aos);
  }, []);
  return (
    <div className="bg-[#21130d] min-h-screen h-full py-12">
      <h1 className="text-center font-bold text-2xl text-white mt-12 my-12">
        My NFT
      </h1>
      <div>
      {nftsLoading &&  (
          <div className="mx-auto flex flex-wrap items-center justify-center gap-8">
            {Array.from({ length: nft }).map((_, i) => (
              <div className="!h-60 !w-60 animate-pulse rounded-lg bg-gray-800" />
            ))}
          </div>
        )}
        {nfts && nfts?.length > 0 && (
          <div
            className="flex flex-wrap items-center justify-center gap-8"
            data-aos="fade-up"
          >
            {nfts.map((nft) => (
              <NFTCard nft={nft} key={nft.metadata.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
