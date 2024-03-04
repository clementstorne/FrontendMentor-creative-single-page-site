"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleClickOnMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-[110px] px-6 py-10 flex justify-between items-center fixed top-0 left-0 right-0">
      <Image
        src={"/creative.svg"}
        alt="Creative - Branding & website design agency"
        width={161}
        height={30}
        priority={true}
      />

      {isMenuOpen ? (
        <Image
          src={"/icon-cross.svg"}
          alt="Close menu"
          width={20}
          height={20}
          priority={true}
          className="cursor-pointer"
          onClick={handleClickOnMenu}
        />
      ) : (
        <Image
          src={"/icon-hamburger.svg"}
          alt="Open menu"
          width={24}
          height={18}
          priority={true}
          className="cursor-pointer"
          onClick={handleClickOnMenu}
        />
      )}

      {isMenuOpen ? (
        <nav className="fixed top-[110px] right-[26px] bg-gray text-white pt-8 px-6.5 pb-7">
          <ul className="flex flex-col justify-center items-center space-y-6">
            <li>About</li>
            <li>Service</li>
            <li>Projects</li>
            <li>
              <Button variant="primary" className="px-11 py-5 text-sm">
                Schedule a Call
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
