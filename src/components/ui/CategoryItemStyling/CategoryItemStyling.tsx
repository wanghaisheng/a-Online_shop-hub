import { Link } from "react-router-dom";
import { useState } from "react";
import FavoriteBtn from "../Favorite Button/FavoriteBtn";
import FilterClothing from "../../FilterClothing/FilterClothing";
import { ItemType } from "../../../types/types";

interface ProductsArrayProps {
  products: ItemType[];
}

function CategoryItemStyling({ products }: ProductsArrayProps) {
  //console.log(products);

  // function CategoryItemStyling({ item }: { item: ItemType }) {
  const [filter, setFilter] = useState<string | null>(null);

  const handleSorting = (newFilter: string | null) => {
    setFilter(newFilter);
  };

  //slice() creates copie of the original array to avoid mutating the original array
  const filteredProductsInClothing = products.slice().sort((a, b) => {
    switch (filter) {
      case "price-ascending":
        return a.price - b.price;
      case "price-descending":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <>
      <FilterClothing onSorting={handleSorting} />
      <div className="grid h-full w-full grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 lg:gap-16">
        {filteredProductsInClothing?.map((item: ItemType) => (
          // <CategoryItemStyling item={item} key={item.id} />
          // stare
          <div
            key={item?.id}
            className="group relative w-full max-w-[300px] lg:h-[550px] lg:max-w-[400px]"
          >
            <Link to={`/product/${item?.id}`}>
              <img
                src={item?.image}
                className=" h-[380px] w-full max-w-[300px] rounded-[2px] border-[1px] border-transparent bg-white bg-cover bg-center bg-no-repeat object-contain p-5 hover:border-[1px] hover:border-slate-600 lg:h-[500px] lg:max-w-[450px]"
              />
              <h6 className=" truncate">{item?.title}</h6>
              <h5 className="font-bold">{item?.price?.toFixed(2)} USD</h5>
            </Link>
            <FavoriteBtn item={item} />
          </div>
          // stare
        ))}
      </div>
    </>
  );
}

export default CategoryItemStyling;
