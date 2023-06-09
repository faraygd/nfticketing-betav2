import React from "react";
import {
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useNFTs,
} from "@thirdweb-dev/react";
const Gallery = () => {
  const address = useAddress();
  const { contract: editionDrop } = useContract(
    "0xc0A426810ba6557919C53F61752870bBb08e9ee0",
    "edition-drop"
  );
  const truncateAddress = (address) => {
    return (
      address.substring(0, 6) + "..." + address.substring(address.length - 4)
    );
  };
  const { data: nfts, isLoading: loading } = useNFTs(editionDrop?.nft, {
    start: 0,
    count: 10,
  });
  console.log({ data: nfts });
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        {nfts && nfts?.length > 0 && (
          <div>
            {nfts.map((nft) => (
              <div key={nft.metadata.id.toString()}>
                <h1>{nft.metadata.name}</h1>
                <ThirdwebNftMedia metadata={nft.metadata} />
                <p>owned by {truncateAddress(nft.owner)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
