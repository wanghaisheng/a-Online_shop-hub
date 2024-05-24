import { BsArrowLeft } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { useSelector } from "react-redux";
import { RootState } from "../../Global state/store";
import Logo from "../../components/ui/Logo/Logo";
import TransparentBtnNavigation from "../../components/ui/TransparentBtnNavigation/TransparentBtnNavigation";
import FullCart from "../../components/Cart Full and Empty/FullCart";
import EmptyCart from "../../components/Cart Full and Empty/EmptyCart";
import { useEffect } from "react";


function Cart() {

  const cartList = useSelector((state: RootState) => state.cart.myCart);
  const cartQuantity = useSelector((state: RootState) => state.cart.cartQuantity);
  const favoriteList = useSelector((state: RootState) => state.favorite.myFavorite);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);


  return (
    <div className="flex h-full min-h-dvh w-full max-w-[1500px] flex-col items-center">
      <section className=" flex h-14 w-full items-center justify-between ">
        <TransparentBtnNavigation link="/">
          <BsArrowLeft size={32} className="mt-5 cursor-pointer text-black" />
        </TransparentBtnNavigation>
        <Logo color="black" />
        <div className="relative mt-2 pr-2"> 
          <TransparentBtnNavigation link="/favorite">
            <GoHeart
              title="Favorite"
              size={30}
              className="cursor-pointer "
              fill="black"
            />
          </TransparentBtnNavigation>
          {favoriteList.length > 0 ? (
            <span
              className="absolute bottom-[17px] right-[18px] flex h-5 w-5 items-center justify-center rounded-full border-[1px] border-white 
            bg-black text-xs font-semibold text-white"
            >
              {favoriteList.length}
            </span>
          ) : (
            ""
          )}
        </div>
      </section>
      <div className="mt-10 h-full w-full max-w-[1400px] pl-5 lg:pl-20">
        <div className=" mb-10 text-left text-2xl font-medium">Your cart ({cartQuantity})</div>
        {cartList?.length > 0 ? <FullCart /> : <EmptyCart />}
      </div>
    </div>
  );
}

export default Cart;
