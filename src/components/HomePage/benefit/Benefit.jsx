import React from "react";
import Feature from "./Feature";

export const Benefit = () => {
  return (
    <section className="mt-32 md:mt-56" id="benefit" data-aos="fade-up">
      <div className="container px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <h1 className="font-extrabold mx-auto text-center max-w-2xl text-4xl tracking-tight leading-none xl:text-6xl md:text-5xl text-white">
          Benefit
        </h1>
        {/* Feature */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          <Feature
            title="Chain Agnostic"
            img="/images/icon-chain-agnostic.png"
            description="Invest in projects across the most known blockchains such as Ethereum, Avalanche, Binance SmartChain, Solana, Polygon, Cherry Network and more."
          />
          <Feature
            title="Chain Agnostic"
            img="/images/icon-secure-transactions.png"
            description="Funds are secured by Seedling's state-of-the-art security protocols and best practises. Money is released from the decentralized escrow only when a sale is complete."
          />
          <Feature
            title="Chain Agnostic"
            img="/images/icon-compliant-investment.png"
            description="Projects proposed on Seedling undergo rigorous legal tests to provide a transparent and legal investment experience to both founders and users."
          />
        </div>
      </div>
    </section>
  );
};
