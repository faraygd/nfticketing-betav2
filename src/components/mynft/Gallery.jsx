import React from "react";
import {
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useMetamask,
  useNFTs,
} from "@thirdweb-dev/react";
const Gallery = () => {
  const { contract: editionDrop } = useContract(
    "0xc0A426810ba6557919C53F61752870bBb08e9ee0",
    "edition-drop"
  );
  const truncateAddress = (address) => {
    return (
      address.substring(0, 6) + "..." + address.substring(address.length - 4)
    );
  };
  const { data: nfts } = useNFTs(editionDrop?.nft, {
    start: 0,
    count: 10,
  });
  console.log({ data : nfts});
  return (
    <>
      {nfts && nfts?.length > 0 && (
        <div className={styles.cards}>
          {nfts
            .filter(
              (nft) =>
                nft.owner !== "0x0000000000000000000000000000000000000000"
            )
            .map((nft) => (
              <div key={nft.metadata.id.toString()}>
                <h1>{nft.metadata.name}</h1>
                <ThirdwebNftMedia
                  metadata={nft.metadata}
                />
                <p>
                  owned by{" "}
                  {address && nft.owner === address
                    ? "you"
                    : truncateAddress(nft.owner)}
                </p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Gallery;
