import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Global state/store";
import FullCart from "../../components/Cart Full and Empty/FullCart";
import EmptyCart from "../../components/Cart Full and Empty/EmptyCart";

function Cart() {
  const cartList = useSelector((state: RootState) => state.cart.myCart);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return <>{cartList?.length > 0 ? <FullCart /> : <EmptyCart />}</>;
}

export default Cart;
