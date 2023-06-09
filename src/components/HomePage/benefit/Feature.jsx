"use client";

import Image from "next/image";

const Feature = ({ img, description, title }) => {
  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center">
      <Image
        src={img}
        width={100}
        className="items-center justify-center"
        height={100}
        alt="Feature image"
      />
      <h2 className="text-gray-400 max-w-[200px] bg-red-10 text-center p-4 font-semibold">{title}</h2>
      <p className="text-gray-400 max-w-[200px] bg-red-10 text-center">{description}</p>
    </div>
  );
};

export default Feature;
