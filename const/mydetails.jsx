
export const contractAddress = "0xe20b31df6137F2e559255A40d5f270d568896eB5";
export const typeNFT="edition-drop";
export const tokenId = 1;
export const chainId = "goerli";
export const truncateAddress = (address) => {
  return (
    address.substring(0, 6) + "..." + address.substring(address.length - 4)
  );
};
