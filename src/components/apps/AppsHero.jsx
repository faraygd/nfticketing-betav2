import React from "react";
import { Profile } from './Profile'
import { MintingBox } from './MintingBox'

export const AppsHero = (title, description) => {
  return (
    <section>
      <div className="flex relative justify-center w-full h-[400px]">
        <img
          className="h-full w-screen object-cover"
          src="https://images.unsplash.com/photo-1680120603076-c086ec523217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="cover-image"
        ></img>
        <div className="flex flex-wrap gap-6 top-[60%] absolute container mx-auto justify-between md:flex flex-rows">
          <div className="mx-auto bg-red-10 md:mx-0 px-4">
            <Profile />
          </div>
          <div className="px-4 mx-auto md:mx-0 pb-20">
            <MintingBox />
          </div>
        </div>
      </div>
    </section>
  );
};
