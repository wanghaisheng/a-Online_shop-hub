import { IoTrashOutline } from "react-icons/io5";
import {
  addingProductToCart,
  deletingProductFromCart,
  productQuantitySubtraction,
} from "../../Global state/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Global state/store";
import { TfiMinus } from "react-icons/tfi";
import { TfiPlus } from "react-icons/tfi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


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

  const cartTotalAmount = useSelector(
    (state: RootState) => state.cart.cartTotalAmount,
  );

  const dispatch = useDispatch<AppDispatch>();


  return (
    <div className="mb-10 flex h-full flex-col gap-5 md:justify-start">
      {cartList.map((p: ItemType) => (
        <div key={p?.id} className="flex h-full pr-5 md:w-full">
          <Link to={`/product/${p?.id}`}>
            <div key={p?.id} className="w-[100px] md:w-[140px]">
              <img
                src={p?.image}
                className="h-[130px] min-w-[100px] bg-white object-contain py-1 md:h-[180px] md:w-[140px]"
              />
            </div>
          </Link>
          <div className=" relative flex min-w-[100px] flex-col pl-2 md:w-[700px] md:pl-7">
            <div className="md:flex md:w-full md:justify-between">
              <div className="flex justify-between ">
                <Link to={`/product/${p?.id}`}>
                  <h6 className="truncate text-ellipsis max-[480px]:w-[150px] w-[300px] sm:w-[420px]">
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
              <div className=" flex pt-3 md:pt-0">
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
              <button onClick={() => dispatch(productQuantitySubtraction(p))}>
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
      <div className="flex min-w-[100px] flex-col-reverse md:max-w-[860px] md:flex-row md:justify-between md:pr-5">
        <div className="flex flex-col-reverse items-center md:flex-row">
          <button className="mt-2 flex w-28 items-center justify-center rounded-full bg-gray-800 px-5 py-3 md:mt-0 md:w-40">
            <FcGoogle size={21} />
            <span className="text-lg font-medium leading-none text-white">
              Pay
            </span>
          </button>
          <button className="ml-3 w-[200px] rounded-full bg-cyan-400 py-3 font-semibold uppercase hover:font-bold md:w-[285px]">
            Process Order
          </button>
        </div>
        <div className="mb-5 ml-10 font-bold md:mb-0">
          <div>
            <span>TOTAL</span>
            <span className="ml-3 text-2xl">{cartTotalAmount} USD</span>
          </div>
          <div className="text-sm font-normal text-slate-600">
            Taxes Included
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullCart;
