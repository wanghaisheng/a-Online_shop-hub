import { useState } from "react";
import Logo from "../ui/Logo/Logo";
import { GoHeart } from "react-icons/go";
import {
  BsCart4,
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import girlMenu from "../../assets/girlmenu.jpg";


type MenuProps = {
  closingMenu: () => void;
};

function Menu({ closingMenu }: MenuProps) {
  const [closeMenu, setCloseMenu] = useState("block");

  function closeMenuFn() {
    setCloseMenu("none");
  }

  return (
    <div
      className=" fixed left-0 top-0 z-50 h-dvh w-dvw bg-white"
      style={{ display: closeMenu }}
    >
      <div className=" flex h-full w-full lg:justify-between">
        <div>
          <button className="p-5 text-xl ml-4" onClick={closingMenu}>
            X
          </button>
          <div className="flex w-full sm:pl-14 p-6" onClick={() => closeMenuFn()}>
            <Logo color="black"/>
            <div className="flex pt-5 sm:ml-36 ">
              <Link to="/favorite">
                <GoHeart
                  title="Favorite"
                  size={28}
                  className=" ml-5 cursor-pointer fill-black"
                  onClick={() => closeMenuFn()}
                />
              </Link>
              <Link to="/cart">
                <BsCart4
                  title="cart"
                  size={28}
                  className=" ml-7 cursor-pointer fill-black"
                  onClick={() => closeMenuFn()}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start pl-20 pt-28">
            <button>
              <h2
                onClick={() => closeMenuFn()}
                className="pb-5 font-bold text-black hover:underline"
              >
                <Link to="/clothing/women">WOMEN</Link>
              </h2>
            </button>
            <button>
              <h2
                onClick={() => closeMenuFn()}
                className="pb-5 font-bold text-black hover:underline"
              >
                <Link to="/clothing/men">MEN</Link>
              </h2>
            </button>
            <button>
              <h2
                onClick={() => closeMenuFn()}
                className="pb-5 font-bold text-black hover:underline"
              >
                <Link to="/clothing/jewelry">JEWELRY</Link>
              </h2>
            </button>
            <button>
              <h2 className="pb-5 font-bold text-black hover:underline">
                GIFT CARD
              </h2>
            </button>
          </div>
          <div className=" container absolute bottom-6 flex  pl-20">
            <BsFacebook
              size={23}
              className="mr-4  h-[25px] w-[25px] cursor-pointer fill-black hover:fill-sky-500"
            />
            <BsInstagram
              size={23}
              className="mr-4 h-[25px] w-[25px] cursor-pointer hover:fill-pink-400"
            />
            <BsYoutube
              size={25}
              className="mr-4 h-[25px] w-[25px] cursor-pointer hover:fill-red-600"
            />
            <BsTwitterX
              size={23}
              className="mr-4 h-[25px] w-[25px] cursor-pointer hover:fill-amber-400"
            />
            <BsPinterest
              size={23}
              className="h-[25px] w-[25px] cursor-pointer hover:fill-red-600"
            />
          </div>
        </div>
        <img src={girlMenu} className=" relative hidden lg:block"></img>
        <h5 className="absolute bottom-10 right-0 p-10 text-2xl font-bold text-black lg:text-white">
          Discover
        </h5>
        <p className="absolute bottom-4 right-0 p-10 text-lg text-black lg:text-white">
          Our Shop!
        </p>
      </div>
    </div>
  );
}

export default Menu;
