//import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import Logo from "../../components/ui/Logo/Logo";
import TransparentBtnNavigation from "../../components/ui/TransparentBtnNavigation/TransparentBtnNavigation";
import { GoHeart } from "react-icons/go";

function Cart() {
  return (
    <div className="flex h-full w-full max-w-[1500px] flex-col items-center justify-center bg-amber-300">
      <section className=" flex h-14 w-full items-center justify-between p-2">
        <TransparentBtnNavigation link="/">
          <BsArrowLeft size={32} className="mt-5 cursor-pointer text-black" />
        </TransparentBtnNavigation>
        <Logo color="black" />
        <div className="mt-2">
          <TransparentBtnNavigation link="/favorite">
            <GoHeart
              title="Favorite"
              size={30}
              className="cursor-pointer"
              fill="black"
            />
          </TransparentBtnNavigation>
        </div>
      </section>
      <div className="mt-20 h-full w-full max-w-[1400px] bg-lime-200">
        <div className=" mb-10 text-left">Your cart ()</div>
        <div>Lista z rzeczami</div>
      </div>
    </div>
  );
}

export default Cart;
