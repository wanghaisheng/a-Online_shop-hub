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
    <section className="z-40 flex h-14 w-full items-center justify-between px-5">
      <TransparentBtnNavigation link="/">
        <BsArrowLeft
          size={32}
          className="mt-1 cursor-pointer"
          fill={`${color}`}
        />
      </TransparentBtnNavigation>
      <Logo color={color} />
      <div className="relative">
        <TransparentBtnNavigation link="/favorite">
          <GoHeart
            title="Favorite"
            size={25}
            className="cursor-pointer"
            fill={`${color}`}
          />
        </TransparentBtnNavigation>
        {favoriteList.length > 0 ? (
          // dot icon that shows amount of items in favorite
          <span
            className="absolute bottom-[10px] right-[5px] flex h-[18px] w-[18px] items-center justify-center rounded-full border-[2px] border-white bg-black text-xs font-semibold text-white"
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
