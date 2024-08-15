import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoTrashOutline } from "react-icons/io5";
import { TfiMinus, TfiPlus } from "react-icons/tfi";
import {
  addingProductToCart,
  deletingProductFromCart,
  productQuantitySubtraction,
} from "../../Global state/cart/cartSlice";
import { AppDispatch, RootState } from "../../Global state/store";
import CartNavBar from "./CartNavBar";
import OrderSummary from "./OrderSummary";


type CartItemType = {
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

  const cartQuantity = useSelector(
    (state: RootState) => state.cart.cartQuantity,
  );

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex h-full min-h-dvh w-full max-w-[1500px] flex-col items-center">
      <CartNavBar color="black" />
      <div className="mt-10 h-full w-full max-w-[1400px] pl-5 lg:pl-20">
        <div className="mb-10 text-left text-2xl font-medium">
          YOUR CART ({cartQuantity})
        </div>
        <div className="mb-10 flex h-full flex-col gap-5 md:justify-start">
          {cartList.map((p: CartItemType) => (
            <div key={p?.id} className="flex h-full pr-5 md:w-full">
              <Link to={`/product/${p?.id}`}>
                <div key={p?.id} className="w-[100px] md:w-[140px]">
                  <img
                    src={p?.image}
                    className="h-[130px] min-w-[100px] bg-white object-contain py-2 md:h-[180px] md:w-[140px] md:py-4"
                    loading="lazy"
                  />
                </div>
              </Link>
              <div className="relative flex min-w-[100px] flex-col pl-2 md:w-[700px] md:pl-7">
                <div className="md:flex md:w-full md:justify-between">
                  <div className="flex justify-between ">
                    <Link to={`/product/${p?.id}`}>
                      <h6 className="w-[300px] truncate text-ellipsis max-[480px]:w-[150px] sm:w-[420px]">
                        {p?.title}
                      </h6>
                    </Link>
                    {/* mobile view */}
                    <button
                      onClick={() => dispatch(deletingProductFromCart(p?.id))}
                      className="pl-3 md:hidden"
                    >
                      <IoTrashOutline size={20} title="delete" />
                    </button>
                  </div>
                  <div className="flex pt-3 md:pt-0 ">
                    {p?.productQuantity >= 2 ? (
                      <p className="mr-2">{p?.productQuantity}x</p>
                    ) : (
                      ""
                    )}
                    <h5 className="whitespace-nowrap font-semibold">
                      {p?.price?.toFixed(2)} USD
                    </h5>
                  </div>
                </div>
                <div>
                  {/* desktop view */}
                  <button
                    onClick={() => dispatch(deletingProductFromCart(p?.id))}
                    className="hidden text-sm font-normal text-slate-400 md:inline-block md:pt-5"
                  >
                    Remove
                  </button>
                </div>
                <div className="absolute bottom-3 md:bottom-10">
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
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default FullCart;
