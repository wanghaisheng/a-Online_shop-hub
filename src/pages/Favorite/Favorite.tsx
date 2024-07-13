import { RootState } from "../../Global state/store";
import { useSelector } from "react-redux";
import BarNavigation from "../../components/BarNavigation/BarNavigation";
import Footer from "../../components/Footer/Footer";
import FavoriteItemStyling from "../../components/ui/FavoriteItemStyling/FavoriteItemStyling";
import { useEffect } from "react";
import { GoHeart } from "react-icons/go";

function Favorite() {
  const favoriteList = useSelector(
    (state: RootState) => state.favorite.myFavorite,
  );

  //console.log(favoriteList);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className=" flex h-full w-full flex-col items-center justify-center min-h-dvh">
      <BarNavigation color="black" bgWhite={false} visibleHeartIcon={false} />
      <div className="mt-20 h-full max-w-[1500px] ">
        {/* <h2 className=" text-center">Favorite</h2> */}
        {favoriteList.length > 0 ? (
          <div className=" mb-10 mt-10 text-3xl pl-5 font-medium">
            YOUR WISH LIST ({favoriteList.length})
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-20 my-20">
            <h3 className="pb-4 font-bold">Your list is empty</h3>
            <h3 className="font-sans font-normal">start adding products :)</h3>
            <GoHeart
              size={27}
              className="mt-10"
              fill="red"
            />
          </div>
        )}
        <div className=" mb-10 flex flex-wrap items-center justify-center  gap-5 sm:justify-start">
          {favoriteList.map((el) => (
            <FavoriteItemStyling item={el} key={el.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Favorite;
