import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CgMenuLeftAlt } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { LiaShoppingBagSolid } from "react-icons/lia";
import TransparentBtnNavigation from "../ui/TransparentBtnNavigation/TransparentBtnNavigation";
import Logo from "../ui/Logo/Logo";
import Menu from "../Menu/Menu";
import { RootState } from "../../Global state/store";
import { resetPingOnceCartAnimation } from "../../Global state/cart/cartSlice";
import { resetPingOnceAnimation } from "../../Global state/favorite/favoriteSlice";
import logo from "/Online_ShopLogo.png";

type BarNavigationProps = {
  color: "white" | "black";
  bgWhite: boolean;
  visibleHeartIcon?: boolean;
};

function BarNavigation({
  color = "white",
  bgWhite = false,
  visibleHeartIcon = true,
}: BarNavigationProps) {

  const [openMenu, setOpenMenu] = useState(false);

  const cartQuantity = useSelector(
    (state: RootState) => state.cart.cartQuantity,
  );
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.myFavorite,
  );

  const dispatch = useDispatch();

  const animatePingOnce = useSelector(
    (state: RootState) => state.favorite.animationPingOnce,
  );
  const animatePingOnceCart = useSelector(
    (state: RootState) => state.cart.animationPingOnceCart,
  );

  useEffect(() => {
    if (animatePingOnce) {
      setTimeout(() => {
        dispatch(resetPingOnceAnimation());
      }, 1000); // Duration of the animation
    }
  }, [animatePingOnce, dispatch]);

  useEffect(() => {
    if (animatePingOnceCart) {
      setTimeout(() => {
        dispatch(resetPingOnceCartAnimation());
      }, 1000); // Duration of the animation
    }
  }, [animatePingOnceCart, dispatch]);

  const handlingOpenMenu = () => {
    setOpenMenu(true);
    //console.log("menu is open");
  };
  const handlingClosingMenu = () => {
    setOpenMenu(false);
    //console.log("menu is closed");
  };

  return (
    <>
      <header
        className={` ${bgWhite ? "bg-white-smoke" : "bg-transparent"} fixed top-0 z-10 flex h-14 w-full bg-transparent`}
      >
        <nav className="flex h-full w-full items-center justify-between">
          <div className="flex items-center justify-center">
            {/* MENU */}
            <button
              className="cursor-pointer bg-transparent p-4 duration-300 hover:scale-110"
              onClick={handlingOpenMenu}
            >
              <CgMenuLeftAlt
                size={33}
                title="Menu"
                className="cursor-pointer drop-shadow-md"
                color={`${color}`}
              />
            </button>

            <span className="sm:hidden">
              <TransparentBtnNavigation link="/">
                <img src={logo} className="h-8 w-8"></img>
              </TransparentBtnNavigation>
            </span>
            <span className="hidden sm:block">
              <Logo color={color} />
            </span>
          </div>
          <div className="flex items-center justify-center">
            {/* FAVORITE ICON */}
            {visibleHeartIcon ? (
              <>
                <TransparentBtnNavigation link="/favorite">
                  <GoHeart
                    title="Favorite"
                    size={23}
                    className="relative cursor-pointer drop-shadow-md"
                    fill={`${color}`}
                  />
                </TransparentBtnNavigation>
                {favoriteList.length > 0 ? (
                  // dot icon that shows amount of items in favorite
                  <span
                    className={`absolute bottom-[13px] right-[53px] flex h-[18px] w-[18px] items-center justify-center rounded-full border-[1px] border-white bg-black text-xs font-semibold text-white ${animatePingOnce ? "animate-pingOnce" : ""}`}
                  >
                    {favoriteList.length}
                  </span>
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            )}
            {/* CART ICON */}
            <TransparentBtnNavigation link="/cart">
              <LiaShoppingBagSolid
                title="cart"
                size={25}
                className="relative cursor-pointer drop-shadow-md"
                fill={`${color}`}
              />
            </TransparentBtnNavigation>
            {cartQuantity > 0 ? (
              // dot icon that shows amount of items added to cart
              <span
                className={`absolute bottom-3 right-[9px] flex h-[18px] w-[18px] items-center justify-center rounded-full border-[1px] 
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

export default BarNavigation;
