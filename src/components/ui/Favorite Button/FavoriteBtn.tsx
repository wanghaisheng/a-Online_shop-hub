import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Global state/store";
import { GoHeart, GoHeartFill } from "react-icons/go";
import {
  addingFavorite,
  deletingFavorite,
  triggerPingOnceAnimation,
} from "../../../Global state/favorite/favoriteSlice";
import { ItemType } from "../../../types/types";


function FavoriteBtn({ item }: { item: ItemType }) {
  const dispatch = useDispatch<AppDispatch>();

  //we get the current state and check whether a given item is already there
  const isFavorite = useSelector((state: RootState) =>
    state.favorite.myFavorite.some((favItem) => favItem?.id === item?.id),
  );

  //handleStateFavorite uses item directly from the outer scope of the FavoriteBtn function
  const handleStateFavorite = () => {
    if (isFavorite) {
      dispatch(deletingFavorite(item?.id));
    } else {
      dispatch(addingFavorite(item));
    }
    dispatch(triggerPingOnceAnimation());
  };

  return (
    <button className="absolute right-2 top-2" onClick={handleStateFavorite}>
      {isFavorite ? (
        <GoHeartFill
          size={26}
          className="cursor-pointer fill-red-600 transition duration-500"
          //dodać animacje!!!!!!!!!!!!!!!!
        />
      ) : (
        <GoHeart size={26} className="cursor-pointer" title="Add to Favorite" />
      )}
    </button>
  );
}

export default FavoriteBtn;
