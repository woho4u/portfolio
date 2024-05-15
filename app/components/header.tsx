"use client";
import { useState } from "react";
import Navlink from "./Navlink";

interface Props {
  className?: string;
  bgClass?: string;
}

const Header = ({ className, bgClass }: Props) => {
  return (
    <>
      <div className={`w-full ${className} header px-10 py-4`}>
        <div></div>
        <div className="navbar flex">
          <Navlink title="About" bgClass={bgClass} />
          <Navlink title="Contact Me" bgClass={bgClass} />
        </div>
      </div>
    </>
  );
};

export default Header;
