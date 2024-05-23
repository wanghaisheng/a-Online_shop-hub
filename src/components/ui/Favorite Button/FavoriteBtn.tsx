import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go"; 
import { AppDispatch, RootState } from "../../../Global state/store";
import { useDispatch, useSelector } from "react-redux";
import { addingFavorite, deletingFavorite } from "../../../Global state/favorite/favoriteSlice";
import { triggerPingOnceAnimation } from "../../../Global state/cart/cartSlice";


type ItemType = {
  id: number;
  description: string;
  image: string;
  title: string;
  price: number;
  category: string;
};


function FavoriteBtn({item}: {item: ItemType}) {
  const dispatch = useDispatch<AppDispatch>();

  //we get the current state and check whether a given item is already there
  const isFavorite = useSelector((state: RootState) =>
    state.favorite.myFavorite.some((favItem) => favItem?.id === item?.id),
  );

  //nandleStateFavorite uses item directly from the outer scope of the FavoriteBtn function
  const handleStateFavorite = () => {
    if (isFavorite) {
      dispatch(deletingFavorite(item?.id));
    } else {
      dispatch(addingFavorite(item));
    }
    dispatch(triggerPingOnceAnimation());
  };

  return (
    <button className=" absolute right-2 top-2" onClick={handleStateFavorite}>
      {/* <GoHeart size={24} className={isFavorite ? "cursor-pointer text-rose-600" : "cursor-pointer" }/> */}
      {isFavorite ? (
        <GoHeartFill
          size={24}
          className=" cursor-pointer fill-red-600 transition duration-500"
          //dodać animacje!!!!!!!!!!!!!!!!
        />
      ) : (
        <GoHeart size={24} className="cursor-pointer" title="Add to Favorite" />
      )}
    </button>
  );
}

export default FavoriteBtn;
