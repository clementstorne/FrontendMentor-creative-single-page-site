"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleClickOnMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={clsx(
        "w-full h-27.5 px-6 py-10 flex justify-between items-center fixed top-0 left-0 right-0",
        "md:h-44.5 md:pr-0 md:pl-9.75"
      )}
    >
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
          className="cursor-pointer md:hidden"
          onClick={handleClickOnMenu}
        />
      ) : (
        <Image
          src={"/icon-hamburger.svg"}
          alt="Open menu"
          width={24}
          height={18}
          priority={true}
          className="cursor-pointer md:hidden"
          onClick={handleClickOnMenu}
        />
      )}

      <nav
        className={clsx(
          isMenuOpen &&
            "fixed top-27.5 right-6.5 bg-gray text-white pt-8 px-6.5 pb-7",
          !isMenuOpen && "hidden",
          "md:bg-red md:static md:w-109.5 md:h-44.5 md:py-14.25 md:pr-10 md:pl-8.25"
        )}
      >
        <ul
          className={clsx(
            "flex flex-col justify-center items-center space-y-6 text-white",
            "md:flex-row items-center md:space-y-0 md:space-x-5 md:text-xs"
          )}
        >
          <li className="inline-block cursor-pointer hover:font-bold">About</li>
          <li className="inline-block cursor-pointer hover:font-bold">
            Service
          </li>
          <li className="inline-block cursor-pointer hover:font-bold">
            Projects
          </li>
          <li>
            <Button
              variant="primary"
              className={clsx(
                "px-11 py-5 text-sm",
                "md:bg-gray md:hover:bg-gray-hover md:ml-2 md:px-4.5 md:py-5.5"
              )}
            >
              Schedule a Call
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
