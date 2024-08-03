import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { LiaShoppingBagSolid } from "react-icons/lia";
import girlMenu from "../../assets/girlmenu.jpg";
import { RootState } from "../../Global state/store";
import Logo from "../ui/Logo/Logo";
import SocialIcons from "../ui/SocialIcons/SocialIcons";

type MenuProps = {
  closingMenu: () => void;
};

function Menu({ closingMenu }: MenuProps) {
  const [closeMenu, setCloseMenu] = useState("block");

  const favoriteList = useSelector(
    (state: RootState) => state.favorite.myFavorite,
  );

  const cartQuantity = useSelector(
    (state: RootState) => state.cart.cartQuantity,
  );

  function closeMenuFn() {
    setCloseMenu("none");
  }

  return (
    <div
      className="fixed left-0 top-0 z-50 h-dvh w-dvw bg-white"
      style={{ display: closeMenu }}
    >
      <div className="flex h-full w-full lg:justify-between">
        <div>
          <button className="ml-4 p-5 text-xl" onClick={closingMenu}>
            X
          </button>
          <div
            className="flex w-full p-6 sm:pl-14"
            onClick={() => closeMenuFn()}
          >
            <Logo color="black" />
            <div className="flex items-center justify-center sm:ml-36">
              <div className="relative">
                <Link to="/favorite">
                  <GoHeart
                    title="Favorite"
                    size={28}
                    className="ml-5 cursor-pointer fill-black"
                    onClick={() => closeMenuFn()}
                  />
                </Link>
                {favoriteList.length > 0 ? (
                  <span
                    className="absolute bottom-0 right-[-5px] flex h-5 w-5 items-center justify-center rounded-full border-[1px] border-white 
            bg-black text-xs font-semibold text-white"
                  >
                    {favoriteList.length}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="relative">
                <Link to="/cart">
                  <LiaShoppingBagSolid
                    title="cart"
                    size={31}
                    className="ml-7 cursor-pointer fill-black"
                    style={{ paddingBottom: "2px" }}
                    onClick={() => closeMenuFn()}
                  />
                </Link>
                {cartQuantity > 0 ? (
                  <span className="absolute bottom-[1px] right-[-5px] flex h-5 w-5 items-center justify-center rounded-full border-[1px] border-white bg-black text-xs font-semibold text-white">
                    {cartQuantity}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start pl-20 pt-28">
            <button onClick={closingMenu}>
              <h2
                onClick={() => closeMenuFn()}
                className="pb-5 font-bold text-black hover:underline"
              >
                <Link to="/clothing/women">WOMEN</Link>
              </h2>
            </button>
            <button onClick={closingMenu}>
              <h2
                onClick={() => closeMenuFn()}
                className="pb-5 font-bold text-black hover:underline"
              >
                <Link to="/clothing/men">MEN</Link>
              </h2>
            </button>
            <button onClick={closingMenu}>
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
          <div className="container absolute bottom-6 flex  pl-20">
            <SocialIcons />
          </div>
        </div>
        <img
          src={girlMenu}
          className="relative hidden lg:block"
          loading="lazy"
        />
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
