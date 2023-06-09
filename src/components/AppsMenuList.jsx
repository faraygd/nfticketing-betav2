import { ConnectWallet } from "@thirdweb-dev/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
export const AppsMenuList = () => {
  return (
    <div>
      <ul className="hidden lg:flex gap-6 items-center">
      <Link
        className="text-gray-400 font-medium text-lg hover:text-gray-200"
        href="/apps"
      >
        Apps
      </Link>
      <Link
        className="text-gray-400 font-medium text-lg hover:text-gray-200"
        href="/mynft"
      >
        MyNFT
      </Link>
      <ConnectWallet theme="white"/>
      </ul>
    </div>
  );
};
