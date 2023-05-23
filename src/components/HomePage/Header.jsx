import { useState } from "react";
import Logo from "../../../public/images/Logo.svg"
import Image from "next/image";
import { MenuList } from "../HomePage/MenuList"
import { Sidebar } from "../HomePage/Sidebar";
import { Trigger } from "../Trigger";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="bg-black">
      <div className="w-full container mx-auto flex justify-between items-center py-6 px-4">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" />
        </div>
        <MenuList />

        <Trigger setStatus={setNav} />

        {/* Overlay */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/* Side Drawer Menu */}
        <Sidebar status={nav} setStatus={setNav} />
      </div>
    </header>
  );
}

export default Header