import React from "react";
import { firacode } from "../const/constantes";
import Link from "next/link";
const NavbarItems = ({ number, text }) => {
  return (
    <Link href={`#${text.toLowerCase()}`}>
      <p
        className={`text-LightSlate ${firacode.className} text-[13px] hover:text-Green transition-colors duration-500 hover:cursor-pointer`}
      >
        <span className="text-Green mr-1 ">{number}.</span>
        {text}
      </p>
    </Link>
  );
};

export default NavbarItems;
