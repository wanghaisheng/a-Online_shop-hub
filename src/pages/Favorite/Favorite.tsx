import { RootState} from "../../Global state/store";
import { useSelector } from "react-redux";

import BarNavigation from "../../components/BarNavigation/BarNavigation";
import Footer from "../../components/Footer/Footer";
import FavoriteItemStyling from "../../components/ui/FavoriteItemStyling/FavoriteItemStyling";


function Favorite() {

 const favoriteList = useSelector((state: RootState) => state.favorite.myFavorite);

 //console.log(favoriteList);


  return (
    <div className=" flex h-full w-full flex-col items-center justify-center">
      <BarNavigation color="black" />
      <div className="mt-20 h-full max-w-[1500px] pl-5">
        <h2 className=" text-center">Favorite</h2>
        <div className=" mb-10">Your wish list ({favoriteList.length})</div>
        <div className=" mb-10 flex flex-wrap items-center justify-center  gap-5 sm:justify-start">
          {favoriteList.map((el) => (
            <FavoriteItemStyling item={el} key={el.id} />
            // <div key={el.id}>
            //   <h3>{el.title}</h3>
            // </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Favorite;
