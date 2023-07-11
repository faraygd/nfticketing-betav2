
export const contractAddress = "0xb2A6A5b64D92834B2c90Cf115A9Bb643EC9274Bc";
export const typeNFT="edition-drop";
export const tokenId = "0";
export const chainId = "goerli";
export const truncateAddress = (address) => {
  return (
    address.substring(0, 6) + "..." + address.substring(address.length - 4)
  );
};
