import { useSelector } from "react-redux";
import { RootState } from "../../Global state/store";
import { FcGoogle } from "react-icons/fc";


function OrderSummary() {

const cartTotalAmount = useSelector(
    (state: RootState) => state.cart.cartTotalAmount,
);

  return (
    <div className="flex min-w-[100px] w-full flex-col-reverse md:max-w-[860px] md:flex-row md:justify-between md:pr-5">
      <div className="flex flex-col-reverse items-center md:flex-row mr-2 sm:mr-0">
        <button className="mt-2 flex items-center justify-center rounded-full bg-gray-800 px-5 py-3 font-sans md:mt-0 md:w-40 w-full 
        sm:w-[280px]">
          <FcGoogle size={21} />
          <span className="text-lg font-medium leading-none text-white">
            Pay
          </span>
        </button>
        <button className="md:ml-3 w-full sm:w-[300px] rounded-full bg-cyan-400 py-3 font-sans font-semibold uppercase hover:font-bold md:w-[280px]">
          Process Order
        </button>
      </div>
      <div className="mb-5 ml-2 text-center font-bold md:mb-0 md:ml-10 md:text-right">
        <div>
          <span className="text-xl">TOTAL</span>
          <span className="ml-3 text-3xl">
            {cartTotalAmount.toFixed(2)} USD
          </span>
        </div>
        <div className="pt-1 text-center text-sm font-normal text-slate-600 md:text-left">
          Taxes Included
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;