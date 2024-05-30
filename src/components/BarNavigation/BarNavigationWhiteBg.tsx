import { CgMenuLeftAlt } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import TransparentBtnNavigation from "../ui/TransparentBtnNavigation/TransparentBtnNavigation";
import Logo from "../ui/Logo/Logo";
import Menu from "../Menu/Menu";
import { useEffect, useState } from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Global state/store";
import {
  resetPingOnceAnimation,
  resetPingOnceCartAnimation,
} from "../../Global state/cart/cartSlice";

type ColorProps = {
  color: "white" | "black";
};

function BarNavigationWhiteBg({ color = "white" }: ColorProps) {
  const [openMenu, setOpenMenu] = useState(false);

  const cartQuantity = useSelector(
    (state: RootState) => state.cart.cartQuantity,
  );

  const favoriteList = useSelector(
    (state: RootState) => state.favorite.myFavorite,
  );

  const dispatch = useDispatch();
  const animatePingOnce = useSelector(
    (state: RootState) => state.cart.animationPingOnce,
  );

  const animatePingOnceCart = useSelector(
    (state: RootState) => state.cart.animationPingOnceCart,
  );

  useEffect(() => {
    if (animatePingOnce) {
      setTimeout(() => {
        dispatch(resetPingOnceAnimation());
      }, 1500); // Duration of the animation
    }
  }, [animatePingOnce, dispatch]);

  useEffect(() => {
    if (animatePingOnceCart) {
      setTimeout(() => {
        dispatch(resetPingOnceCartAnimation());
      }, 1500); // Duration of the animation
    }
  }, [animatePingOnceCart, dispatch]);

  const handlingOpenMenu = () => {
    setOpenMenu(true);
  };

  const handlingClosingMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <header className=" fixed top-0 z-10 flex h-14 w-full bg-white-smoke">
        <nav className="flex h-full w-full items-center justify-between p-2">
          <div className="flex">
            {/* MENU */}
            <button
              className="cursor-pointer bg-transparent p-4 pl-0 duration-300 hover:scale-110"
              onClick={handlingOpenMenu}
            >
              <CgMenuLeftAlt
                size={33}
                title="Menu"
                className="cursor-pointer drop-shadow-md"
                color={`${color}`}
              />
            </button>

            <span className="hidden sm:block">
              <Logo color={color} />
            </span>
          </div>
          <div className="flex items-center">
            {/* FAVORITE ICON */}
            <TransparentBtnNavigation link="/favorite">
              <GoHeart
                title="Favorite"
                size={28}
                className="relative cursor-pointer drop-shadow-md"
                fill={`${color}`}
              />
            </TransparentBtnNavigation>
            {favoriteList.length > 0 ? (
              <span
                className={`absolute bottom-[14px] right-20 flex h-5 w-5 items-center justify-center rounded-full border-[1px] border-white 
            bg-black text-xs font-semibold text-white ${animatePingOnce ? "animate-pingOnce" : ""}`}
              >
                {favoriteList.length}
              </span>
            ) : (
              ""
            )}
            <TransparentBtnNavigation link="/cart">
              {/* CART ICON */}
              <LiaShoppingBagSolid
                title="cart"
                size={30}
                className="relative cursor-pointer drop-shadow-md"
                fill={`${color}`}
                // style={{ paddingBottom: "2px" }}
              />
            </TransparentBtnNavigation>
            {cartQuantity > 0 ? (
              <span
                className={`absolute bottom-3 right-5 flex h-5 w-5 items-center justify-center rounded-full border-[1px] 
            border-white bg-black text-xs font-semibold text-white ${animatePingOnceCart ? "animate-pingOnceCart" : ""}`}
              >
                {cartQuantity}
              </span>
            ) : (
              ""
            )}
          </div>
        </nav>
      </header>
      {/* MENU */}
      {openMenu && <Menu closingMenu={handlingClosingMenu} />}
    </>
  );
}

export default BarNavigationWhiteBg;
