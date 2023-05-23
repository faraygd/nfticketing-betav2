import React from "react";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";

export const Profile = () => {
  return (
    <div className="max-w-[360px]">
      <img
        className="object-cover w-[260px] h-[250px] mx-auto md:mx-0"
        src="https://gateway.ipfscdn.io/ipfs/QmUmSPFBQiYfNKFMRLUySaEiT3ym7TR82r8fx8CDKHVBP8/4.jpg"
        alt=""
      />
      <div className="py-4">
        <h3 className="font-bold text-gray-700 text-xl text-center md:text-left">Musical Ticket</h3>
        <p className="text-gray-700 text-center md:text-left mt-2">
          Musical ticketing is live, 1000 Unique ticket for SGT Holder
        </p>
        <div className="mt-2 flex justify-center md:justify-start">
          <Link href="/">
            <BsTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};
