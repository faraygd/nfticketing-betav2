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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-20">
          <Feature
            title="Meet and greets"
            img="/images/artist.png"
            description="NFT Ticket holders can meet and greet with the artist directly without having to wait."
          />
          <Feature
            title="Exclusive Merchandise"
            img="/images/merchandise.png"
            description="Get exclusive merchandise for NFT ticket holders."
          />
          <Feature
            title="Mystery Box"
            img="/images/mystery.png"
            description="NFT Ticket Holders can open a mystery box during the event and get various rewards such as cryptocurrency or merchandise."
          />
        </div>
      </div>
    </section>
  );
};
