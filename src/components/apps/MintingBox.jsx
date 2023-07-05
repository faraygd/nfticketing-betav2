import {
  useContract,
  useTotalCirculatingSupply,
  useActiveClaimConditionForWallet,
  useClaimConditions,
  useClaimerProofs,
  useClaimIneligibilityReasons,
  Web3Button,
  useAddress,
  useContractMetadata,
} from "@thirdweb-dev/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BigNumber, utils } from "ethers";
import { useMemo, useState } from "react";
import { parseIneligibility } from '../utils/parseIneligibility';
import { contractAddress, tokenId, typeNFT } from "../../../const/mydetails";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
export const MintingBox = ({ spinningBubbles }) => {
  const address = useAddress();
  const [quantity, setQuantity] = useState(1);
  const { contract: editionDrop } = useContract(contractAddress, typeNFT);
  const { data: contractMetadata } = useContractMetadata(editionDrop);
  const claimConditions = useClaimConditions(editionDrop);
  const activeClaimCondition = useActiveClaimConditionForWallet(
    editionDrop,
    address,
    tokenId
  );
  const claimerProofs = useClaimerProofs(editionDrop, address || "", tokenId);
  const claimIneligibilityReasons = useClaimIneligibilityReasons(
    editionDrop,
    {
      quantity,
      walletAddress: address || "",
    },
    tokenId
  );

  const claimedSupply = useTotalCirculatingSupply(editionDrop, tokenId);

  const totalAvailableSupply = useMemo(() => {
    try {
      return BigNumber.from(activeClaimCondition.data?.availableSupply || 0);
    } catch {
      return BigNumber.from(1_000_000);
    }
  }, [activeClaimCondition.data?.availableSupply]);

  const numberClaimed = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0).toString();
  }, [claimedSupply]);

  const numberTotal = useMemo(() => {
    const n = totalAvailableSupply.add(BigNumber.from(claimedSupply.data || 0));
    if (n.gte(1_000_000)) {
      return "";
    }
    return n.toString();
  }, [totalAvailableSupply, claimedSupply]);

  const priceToMint = useMemo(() => {
    const bnPrice = BigNumber.from(
      activeClaimCondition.data?.currencyMetadata.value || 0
    );
    return `${utils.formatUnits(
      activeClaimCondition.data?.currencyMetadata.decimals || 18
    )} ${activeClaimCondition.data?.currencyMetadata.symbol}`;
  }, [
    activeClaimCondition.data?.currencyMetadata.decimals,
    activeClaimCondition.data?.currencyMetadata.symbol,
    activeClaimCondition.data?.currencyMetadata.value,
    quantity,
  ]);

  const maxClaimable = useMemo(() => {
    let bnMaxClaimable;
    try {
      bnMaxClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimableSupply || 0
      );
    } catch (e) {
      bnMaxClaimable = BigNumber.from(1_000_000);
    }

    let perTransactionClaimable;
    try {
      perTransactionClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimablePerWallet || 0
      );
    } catch (e) {
      perTransactionClaimable = BigNumber.from(1_000_000);
    }

    if (perTransactionClaimable.lte(bnMaxClaimable)) {
      bnMaxClaimable = perTransactionClaimable;
    }

    const snapshotClaimable = claimerProofs.data?.maxClaimable;

    if (snapshotClaimable) {
      if (snapshotClaimable === "0") {
        // allowed unlimited for the snapshot
        bnMaxClaimable = BigNumber.from(1_000_000);
      } else {
        try {
          bnMaxClaimable = BigNumber.from(snapshotClaimable);
        } catch (e) {
          // fall back to default case
        }
      }
    }

    let max;
    if (totalAvailableSupply.lt(bnMaxClaimable)) {
      max = totalAvailableSupply;
    } else {
      max = bnMaxClaimable;
    }

    if (max.gte(1_000_000)) {
      return 1_000_000;
    }
    return max.toNumber();
  }, [
    claimerProofs.data?.maxClaimable,
    totalAvailableSupply,
    activeClaimCondition.data?.maxClaimableSupply,
    activeClaimCondition.data?.maxClaimablePerWallet,
  ]);

  const isSoldOut = useMemo(() => {
    try {
      return (
        (activeClaimCondition.isSuccess &&
          BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
            0
          )) ||
        numberClaimed === numberTotal
      );
    } catch (e) {
      return false;
    }
  }, [
    activeClaimCondition.data?.availableSupply,
    activeClaimCondition.isSuccess,
    numberClaimed,
    numberTotal,
  ]);

  const canClaim = useMemo(() => {
    return (
      activeClaimCondition.isSuccess &&
      claimIneligibilityReasons.isSuccess &&
      claimIneligibilityReasons.data?.length === 0 &&
      !isSoldOut
    );
  }, [
    activeClaimCondition.isSuccess,
    claimIneligibilityReasons.data?.length,
    claimIneligibilityReasons.isSuccess,
    isSoldOut,
  ]);

  const isLoading = useMemo(() => {
    return (
      activeClaimCondition.isLoading || claimedSupply.isLoading || !editionDrop
    );
  }, [activeClaimCondition.isLoading, editionDrop, claimedSupply.isLoading]);

  const buttonLoading = useMemo(
    () => isLoading || claimIneligibilityReasons.isLoading,
    [claimIneligibilityReasons.isLoading, isLoading]
  );
  const buttonText = useMemo(() => {
    if (isSoldOut) {
      return "Sold Out";
    }

    if (canClaim) {
      const pricePerToken = BigNumber.from(
        activeClaimCondition.data?.currencyMetadata.value || 0
      );
      if (pricePerToken.eq(0)) {
        return "Buy (Free)";
      }
      return `Buy (${priceToMint})`;
    }
    if (claimIneligibilityReasons.data?.length) {
      return parseIneligibility(claimIneligibilityReasons.data, quantity);
    }
    if (buttonLoading) {
      return "Checking eligibility...";
    }

    return "Claiming not available";
  }, [
    isSoldOut,
    canClaim,
    claimIneligibilityReasons.data,
    buttonLoading,
    activeClaimCondition.data?.currencyMetadata.value,
    priceToMint,
    quantity,
  ]);
  return (
    <div className="w-[250px]">
      {isLoading ? (
        <div className="">
          <Skeleton count={1} baseColor="#202020" highlightColor="#444" width={250} height={300} />
        </div>
      ) : (
        <div className="bg-black border border-outline">
          <Image src={contractMetadata?.image} width={200} height={200} alt="NFTicketing" className="mx-auto mt-4"/>
          {/* <div className="bg-gray-100 w-full h-[250px]"/> */}
          <div className="text-center bg-black text-white">
            <div className="flex"></div>
            {claimedSupply ? (
              <div className="text-center items-center py-4">
                <div className="flex"></div>
                <p>Minted</p>
                <p>
                  <b>{numberClaimed}</b>
                  {" / "}
                  {numberTotal || "∞"}
                </p>
              </div>
            ) : (
              <h2>....</h2>
            )}
            {claimConditions.data?.length === 0 ||
            claimConditions.data?.every(
              (cc) => cc.maxClaimableSupply === "0"
            ) ? (
              <div>
                <h2>
                  This drop is not ready to be minted yet. (No claim condition
                  set)
                </h2>
              </div>
            ) : (
              <>
                <div className="flex flex-row items-center justify-center ml-4">
                  <button
                    className="cursor-pointer w-10 h-10 text-3xl bg-transparent text-white"
                    onClick={() => setQuantity(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    className="text-black bg-none w-12 text-center rounded-sm"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  {/* <h4>{quantity}</h4> */}

                  <button
                    className="cursor-pointer w-10 h-10 text-3xl bg-transparent ml-4"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity >= maxClaimable}
                  >
                    +
                  </button>
                </div>

                <div className="flex flex-row items-center justify-center mt-6">
                  {isSoldOut ? (
                    <div className="mb-6">
                      <Web3Button
                        contractAddress={editionDrop?.getAddress() || ""}
                        theme="dark"
                        action={async (cntr) => {
                          await cntr.erc1155.claim(tokenId, quantity)}
                        }
                        isDisabled={!canClaim || buttonLoading}
                        onError={(err) => {
                          toast.error("Ticket Purchase Process Error");
                        }}
                        onSuccess={() => {
                          setQuantity(1);
                          toast.success(
                            "Ticket Purchase Process Successful, Check your transaction"
                          );
                        }}
                      >
                        {buttonLoading ? "Loading..." : buttonText}
                      </Web3Button>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <Web3Button
                        contractAddress={editionDrop?.getAddress() || ""}
                        action={async(cntr) => await cntr.erc1155.claim(tokenId, quantity)}
                        theme="dark"
                        isDisabled={!canClaim || buttonLoading}
                        onError={(err) => {
                          toast.error("Ticket Purchase Process Error");
                        }}
                        onSuccess={(result) => {
                          setQuantity(1);
                          toast.success('Transaction completed');
      
                        }}
                      >
                        {buttonLoading ? "Loading..." : buttonText}
                      </Web3Button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <div></div>
    </div>
  );
};
