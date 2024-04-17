//import React from 'react'
import { CgMenuLeft } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
//import { GoHeartFill } from "react-icons/go";  <GoHeartFill />;
import { BsCart4 } from "react-icons/bs";


function BarNavigation() {
  return (
    <header className=" fixed top-0 z-10 flex h-16 w-full ">
      <nav className="flex h-full w-full items-center justify-between p-2">
        <div className="flex">
          <CgMenuLeft size={40} className=" text-white drop-shadow-md" />
          <p
            style={{ textShadow: "1px 1px 2px black" }}
            className="  pl-5 text-4xl font-bold  italic text-white"
          >
            Online_shop
          </p>
        </div>
        <div className="flex pr-2">
          <GoHeart size={30} className=" text-white drop-shadow-md cursor-pointer" />
          <BsCart4 size={30} className=" ml-5 text-white drop-shadow-md cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}

export default BarNavigation;