
export const contractAddress = "0xc0A426810ba6557919C53F61752870bBb08e9ee0";
export const typeNFT="edition-drop";
export const tokenId = 0;
export const chainId = "mumbai";
export const truncateAddress = (address) => {
  return (
    address.substring(0, 6) + "..." + address.substring(address.length - 4)
  );
};
