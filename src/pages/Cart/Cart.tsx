//import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import Logo from "../../components/ui/Logo/Logo";
import TransparentBtnNavigation from "../../components/ui/TransparentBtnNavigation/TransparentBtnNavigation";

function Cart() {
  return (
    <div className="h-dvh w-dvw bg-white">
      <section className=" flex h-14 w-full items-center justify-between p-2">
        <TransparentBtnNavigation link="/">
          <BsArrowLeft
            size={35}
            className="cursor-pointer text-black drop-shadow-md"
          />
        </TransparentBtnNavigation>
        <Logo color="black"/>
        <div>koszyk</div>
      </section>
      <div>Cart</div>
    </div>
  );
}

export default Cart;
