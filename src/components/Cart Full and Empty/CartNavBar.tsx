import { useSelector } from "react-redux";
import { RootState } from "../../Global state/store";
import { BsArrowLeft } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import Logo from "../../components/ui/Logo/Logo";
import TransparentBtnNavigation from "../../components/ui/TransparentBtnNavigation/TransparentBtnNavigation";

type colorProps = {
  color: "black" | "white";
};

function CartNavBar({ color }: colorProps) {
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.myFavorite,
  );

  return (
    <section className=" z-40 flex h-14 w-full items-center justify-between">
      <TransparentBtnNavigation link="/">
        <BsArrowLeft
          size={32}
          className="ml-2 mt-2 cursor-pointer"
          fill={`${color}`}
        />
      </TransparentBtnNavigation>
      <Logo color={color} />
      <div className="relative mt-2 pr-2">
        <TransparentBtnNavigation link="/favorite">
          <GoHeart
            title="Favorite"
            size={30}
            className="cursor-pointer "
            fill={`${color}`}
          />
        </TransparentBtnNavigation>
        {favoriteList.length > 0 ? (
          <span
            className="absolute bottom-[17px] right-[18px] flex h-5 w-5 items-center justify-center rounded-full border-[1px] border-white
            bg-black text-xs font-semibold text-white"
          >
            {favoriteList.length}
          </span>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default CartNavBar;
