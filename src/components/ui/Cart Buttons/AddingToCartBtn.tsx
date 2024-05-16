import { useDispatch } from "react-redux";
import { addingProductToCart } from "../../../Global state/cart/cartSlice";
import { AppDispatch } from "../../../Global state/store";


type ItemType = {
  id: number;
  description: string;
  image: string;
  title: string;
  price: number;
  category: string;
};


function AddingToCartBtn({ item }: { item: ItemType }) {

const dispatch = useDispatch<AppDispatch>();

  return (
    <button 
    onClick={() => dispatch(addingProductToCart(item))}
    className="mr-20 rounded-lg bg-cyan-400  p-2 px-5 font-medium text-white hover:bg-cyan-500">
      ADD TO CART
    </button>
  );
}

export default AddingToCartBtn;