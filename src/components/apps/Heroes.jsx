import React from "react";
import { Profile } from './Profile';
import { MintingBox } from './MintingBox';

export const Heroes = (title, description) => {
  return (
    <section>
      <div className="flex relative justify-center w-full h-[400px] bg-gray-500">
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
