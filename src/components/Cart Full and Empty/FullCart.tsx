import { IoTrashOutline } from "react-icons/io5";
import { addingProductToCart, deletingProductFromCart, productQuantitySubtraction } from "../../Global state/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Global state/store";
import { TfiMinus } from "react-icons/tfi";
import { TfiPlus } from "react-icons/tfi";

type ItemType = {
  id: number;
  description: string;
  image: string;
  title: string;
  price: number;
  category: string;
  productQuantity: number;
};

function FullCart() {
    
  const cartList = useSelector((state: RootState) => state.cart.myCart);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="mb-10 flex flex-col gap-5 md:justify-start">
      {cartList.map((p: ItemType) => (
        <div key={p?.id} className="flex pr-5">
          <div key={p?.id} className="w-[100px] md:w-[140px]">
            <img
              src={p?.image}
              className="h-[130px] min-w-[100px] bg-white object-contain py-1 md:h-[180px] md:w-[140px]"
            />
          </div>
          <div className=" relative flex min-w-[100px] flex-col pl-2">
            <div className=" flex justify-between ">
              <h6 className="truncate text-ellipsis ">{p?.title}</h6>
              <button
                onClick={() => dispatch(deletingProductFromCart(p?.id))}
                className="pl-3"
              >
                <IoTrashOutline size={20} title="delete" />
              </button>
            </div>
            <div className=" flex pt-3">
              {p?.productQuantity >= 2 ? (
                <span className="mr-2">{p?.productQuantity}x</span>
              ) : (
                ""
              )}
              <h5 className="  font-semibold">{p?.price} USD</h5>
            </div>
            <div className=" absolute bottom-3">
              <button
                onClick={() => dispatch(productQuantitySubtraction(p))}
              >
                <TfiMinus size={15} />
              </button>
              <span className="px-3">{p?.productQuantity}</span>
              <button onClick={() => dispatch(addingProductToCart(p))}>
                <TfiPlus size={15} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FullCart;
