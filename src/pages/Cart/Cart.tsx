import { BsArrowLeft } from "react-icons/bs";
import Logo from "../../components/ui/Logo/Logo";
import TransparentBtnNavigation from "../../components/ui/TransparentBtnNavigation/TransparentBtnNavigation";
import { GoHeart } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Global state/store";
import { IoTrashOutline } from "react-icons/io5";
import { deletingProductFromCart } from "../../Global state/cart/cartSlice";

type ItemType = {
  id: number;
  description: string;
  image: string;
  title: string;
  price: number;
  category: string;
};

function Cart() {

  const dispatch = useDispatch<AppDispatch>();

  const cartList = useSelector((state: RootState) => state.cart.myCart);

  return (
    <div className="flex h-full w-full max-w-[1500px] flex-col items-center justify-center bg-amber-300">
      <section className=" flex h-14 w-full items-center justify-between p-2">
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
      <div className="mt-20 h-full w-full max-w-[1400px] bg-lime-200">
        <div className=" mb-10 text-left">Your cart ({cartList.length})</div>
        <div className="mb-10 flex flex-wrap items-center justify-center  gap-5 sm:justify-start">
          {cartList.map((p: ItemType) => (
            <div key={p?.id}>
              <div key={p?.id} className=" relative">
                <img
                  src={p?.image}
                  className=" h-[360px] w-[277px] bg-white object-contain"
                />
                <h6 className=" absolute bottom-0 left-0 max-w-[200px] truncate text-ellipsis">
                  {p?.title}
                </h6>
                <h5 className=" absolute bottom-0 right-0">{p?.price} USD</h5>
              </div>
              <div className=" flex justify-between pb-5 pl-1 pt-1">
                <button
                  onClick={() => dispatch(deletingProductFromCart(p.id))}
                >
                  <IoTrashOutline size={20} title="delete" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
