import { useState } from "react";
import Logo from '../../../public/images/Logo.svg'
import Image from "next/image";

export const HeaderApps = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="bg-black">
      <div className="w-full container mx-auto flex justify-between items-center py-6 px-4">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};