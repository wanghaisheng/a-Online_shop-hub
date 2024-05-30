import styles from "./emptyCart.module.css";
import CartNavBar from "./CartNavBar";

function EmptyCart() {
  return (
    <div
      className={` relative flex h-full min-h-dvh w-full flex-col items-center ${styles.bgImage}`}
    >
      <CartNavBar color="white" />
      <div className=" absolute bottom-0 left-0 right-0 top-0 bg-slate-600 opacity-35"></div>
      <div className=" absolute bottom-0 left-0 right-0 top-0 bg-white bg-opacity-10 backdrop-blur-[0.6px]"></div>
      <div className="relative z-40 mt-24 flex h-full w-full max-w-[1400px] flex-col pl-5 md:mt-10 lg:pl-20">
        <h2 className="relative mb-4 mt-32 text-5xl text-white">
          YOUR BASKET IS
        </h2>
        <h2 className="relative mb-8 text-5xl text-white">EMPTY</h2>
        <p className=" pr-2 text-lg font-light text-white md:text-xl">
          Fill it with clothes and accessories from our collection!
        </p>
      </div>
    </div>
  );
}

export default EmptyCart;
