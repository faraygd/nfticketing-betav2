import React from "react";
import Logo from "../../../../public/images/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { BsTwitter, BsDiscord, BsInstagram } from "react-icons/bs";
import { FooterMenuList } from './FooterMenuList'

export const Footer = () => {
  return (
    <footer className="bg-orange-500 mt-40">
      <div className="container py-6 px-4 mx-auto">
        <div className="flex flex-wrap gap-14 md:justify-center">
          <div className="">
            <Image src={Logo} className="w-48 sm:w-48" alt="Logo" />
            <div className="max-w-lg mt-4 text-gray-300 hidden md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, tsed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="flex gap-6 text-gray-300 mt-4">
              <Link href="/">
                <BsTwitter />
              </Link>
              <Link href="/">
                <BsDiscord />
              </Link>
              <Link href="/">
                <BsInstagram />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-14 pt-2">
            <div>
              <div className="text-gray-300 font-bold text-sm mb-2">
                Resource
              </div>
              <FooterMenuList
                items={[
                  { label: "Docs", href: "/link" },
                  { label: "Features", href: "/link" },
                  { label: "FAQ", href: "/link" },
                  { label: "Press Kit", href: "/link" },
                ]}
              />
            </div>
            <div>
              <div className="text-gray-300 font-bold text-sm mb-2">
                Company
              </div>
              <FooterMenuList
                items={[{ label: "Help Center", href: "/link" }]}
              />
            </div>
            <div className="w-full md:w-auto">
              <div className="text-gray-300 font-bold text-sm mb-2">Apply</div>
              <FooterMenuList
                items={[{ label: "Apply for NFT Ticketing", href: "/link" }]}
              />
            </div>
            <div>
              <div className="text-gray-300 font-bold text-sm mb-2">Links</div>
              <FooterMenuList
                items={[
                  { label: "Privacy Policy", href: "/link" },
                  { label: "Terms or Service", href: "/link" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
