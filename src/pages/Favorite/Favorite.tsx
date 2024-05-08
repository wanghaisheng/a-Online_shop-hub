import { RootState} from "../../Global state/store";
import { useSelector } from "react-redux";

import BarNavigation from "../../components/BarNavigation/BarNavigation";
import Footer from "../../components/Footer/Footer";


function Favorite() {

 const favoriteList = useSelector((state: RootState) => state.favorite.myFavorite);

 //console.log(favoriteList);


  return (
    <div className=" flex h-full w-full flex-col items-center justify-center">
      <BarNavigation />
      <div className="mt-20">
        Favorite
        <div>Your wish list ({favoriteList.length})</div>
        <div>{favoriteList.map(el => (
          <div key={el.id}>
            <h3>{el.title}</h3>
          </div>
        ))}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Favorite;
