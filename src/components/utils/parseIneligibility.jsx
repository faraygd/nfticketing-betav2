import { ClaimEligibility } from "@thirdweb-dev/sdk/evm";

export function parseIneligibility(reasons, quantity) {

  if (!reasons.length) {
    return "";
  }

  const reason = reasons[0];

  if (
    reason === ClaimEligibility.Unknown ||
    reason === ClaimEligibility.NoActiveClaimPhase ||
    reason === ClaimEligibility.NoClaimConditionSet
  ) {
    return <span>This drop is not ready to be minted.</span>;
  } else if (reason === ClaimEligibility.NotEnoughTokens) {
    return <span>You don't have enough currency to mint.</span>;
  } else if (reason === ClaimEligibility.AddressNotAllowed) {
    if (quantity > 1) {
      return <span>You are not eligible to mint {quantity} tokens.</span>;
    }

    return <span>You are not eligible to mint at this time.</span>;
  }

  return <span>{reason}</span>;
}
