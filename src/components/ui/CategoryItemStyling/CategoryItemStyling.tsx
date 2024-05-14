import { Link } from "react-router-dom";
import FavoriteBtn from "../Favorite Button/FavoriteBtn";
import SizesHoverForCart from "../SizesHoverForCart/SizesHoverForCart";

type ItemType = {
  id: number;
  description: string;
  image: string;
  title: string;
  price: number;
  category: string;
};

function CategoryItemStyling({ item }: { item: ItemType }) {
  return (
    <div
      key={item.id}
      className="group relative h-[500px] w-full max-w-[300px] lg:h-[550px] lg:max-w-[450px]"
    >
      <SizesHoverForCart />
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          className=" h-[380px] w-full max-w-[300px] border-[1px] border-transparent bg-white bg-cover bg-center bg-no-repeat object-contain py-5 hover:border-[1px] hover:border-slate-600 lg:h-[500px] lg:max-w-[450px]"
        />

        <h6 className=" truncate">{item.title}</h6>
        <h5 className="font-bold">{item.price} USD</h5>
      </Link>
      <FavoriteBtn item={item} />
    </div>
  );
}

export default CategoryItemStyling;
