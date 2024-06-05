import { useDispatch } from "react-redux";
import { addingProductToCart, triggerPingOnceCartAnimation } from "../../../Global state/cart/cartSlice";
import { AppDispatch } from "../../../Global state/store";
import { ItemType } from "../../../types/types";

// type ItemType = {
//   id: number;
//   description: string;
//   image: string;
//   title: string;
//   price: number;
//   category: string;
// };


function AddingToCartBtn({ item }: { item: ItemType }) {

const dispatch = useDispatch<AppDispatch>();

const handleAddingToCart = () => {
  dispatch(addingProductToCart(item));
  dispatch(triggerPingOnceCartAnimation());
}

  return (
    <button 
    onClick={handleAddingToCart}
    className="rounded-xl bg-cyan-400  p-2 px-5 font-bold text-white hover:bg-cyan-500 font-sans">
      ADD TO CART
    </button>
  );
}

export default AddingToCartBtn;