
export const contractAddress = "0x16697DC981432c5012C9b2b19CF25C985e3A81A6";
export const typeNFT="edition-drop";
export const tokenId = 0;
export const chainId = "arbitrum";
export const truncateAddress = (address) => {
  return (
    address.substring(0, 6) + "..." + address.substring(address.length - 4)
  );
};
