//import React from 'react'
import { CgMenuLeft } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
//import { GoHeartFill } from "react-icons/go";  <GoHeartFill />;
import { BsCart4 } from "react-icons/bs";
import TransparentBtnNavigation from "../ui/TransparentBtnNavigation/TransparentBtnNavigation";
import Logo from "../ui/Logo/Logo";

function BarNavigation() {
  return (
    <header className=" fixed top-0 z-10 flex h-16 w-full ">
      <nav className="flex h-full w-full items-center justify-between p-2">
        <div className="flex">
          <TransparentBtnNavigation link="/">
            <CgMenuLeft size={40} className=" text-white drop-shadow-md" />
          </TransparentBtnNavigation>
          <Logo />
        </div>
        <div className="flex pr-2">
          <TransparentBtnNavigation link="/favorite">
            <GoHeart
              size={30}
              className=" cursor-pointer text-white drop-shadow-md"
            />
          </TransparentBtnNavigation>
          <TransparentBtnNavigation link="/cart">
            <BsCart4
              size={30}
              className=" cursor-pointer text-white drop-shadow-md"
            />
          </TransparentBtnNavigation>
        </div>
      </nav>
    </header>
  );
}

export default BarNavigation;
