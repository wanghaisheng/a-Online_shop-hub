import { IoTrashOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deletingFavorite } from "../../../Global state/favorite/favoriteSlice";
import { Link } from "react-router-dom";


type ItemType = {
  id: number;
  description: string;
  image: string;
  title: string;
  price: number;
  category: string;
};

function FavoriteItemStyling({ item }: { item: ItemType }) {

  const dispatch = useDispatch();


  return (
    <div>
      <Link to={`/product/${item?.id}`}>
        <div key={item?.id} className=" relative">
          <img src={item?.image} className=" h-[360px] w-[277px]" />
          <h6 className=" absolute bottom-0 left-0 max-w-[200px] truncate text-ellipsis">
            {item?.title}
          </h6>
          <h5 className=" absolute bottom-0 right-0">{item?.price} USD</h5>
        </div>
      </Link>
      <div className=" flex justify-between pb-5 pl-1 pt-1">
        <button onClick={() => dispatch(deletingFavorite(item?.id))}>
          <IoTrashOutline size={20} title="delete" />
        </button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default FavoriteItemStyling;
