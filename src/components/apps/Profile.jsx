import React from "react";
import { BsDiscord, BsGlobe, BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
export const Profile = () => {
  return (
    <div className="max-w-[360px]">
      <div
        className="bg-gray-100 object-cover w-[260px] h-[250px] mx-auto md:mx-0"
      />
      <div className="py-4">
        <h3 className="font-bold text-gray-700 text-xl text-center md:text-left">NFTicketing Project</h3>
        <p className="text-gray-700 text-center md:text-left mt-2">
          Example of NFTicketing
        </p>
        <div className="mt-2 flex justify-center md:justify-start">
          <Link href="/" className="flex gap-4">
            <BsTwitter />
            <BsGlobe/>
            <BsDiscord/>
          </Link>
        </div>
      </div>
      
    </div>
  );
};
