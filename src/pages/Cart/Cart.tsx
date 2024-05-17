import { BsArrowLeft } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { useSelector } from "react-redux";
import { RootState } from "../../Global state/store";
import Logo from "../../components/ui/Logo/Logo";
import TransparentBtnNavigation from "../../components/ui/TransparentBtnNavigation/TransparentBtnNavigation";
import FullCart from "../../components/Cart Full and Empty/FullCart";
import EmptyCart from "../../components/Cart Full and Empty/EmptyCart";


function Cart() {

  const cartList = useSelector((state: RootState) => state.cart.myCart);
  const cartQuantity = useSelector((state: RootState) => state.cart.cartQuantity)

  return (
    <div className="flex h-full w-full max-w-[1500px] flex-col items-center justify-center bg-amber-300">
      <section className=" flex h-14 w-full items-center justify-between ">
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
      <div className="mt-10 h-full w-full max-w-[1400px] bg-lime-200 pl-5 lg:pl-20">
        <div className=" mb-10 text-left">Your cart ({cartQuantity})</div>
        {
          cartList?.length > 0 ? <FullCart /> : <EmptyCart />
        }
      </div>
    </div>
  );
}

export default Cart;
