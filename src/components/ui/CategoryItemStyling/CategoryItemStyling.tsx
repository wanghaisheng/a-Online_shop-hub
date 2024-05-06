import { Link } from "react-router-dom";


type ItemType = {
  id: number;
  description: string;
  image: string;
  title: string;
  price: number;
  category: string;
};


function CategoryItemStyling({ item }: {item: ItemType}) {
  return (
    <div
      key={item.id}
      className="h-[500px] w-full max-w-[300px]   
          lg:h-[550px] lg:max-w-[450px]"
    >
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          className="h-[450px] w-full max-w-[300px] border-2 border-transparent bg-cover bg-center bg-no-repeat hover:border-2 hover:border-slate-600 lg:h-[500px] lg:max-w-[450px]"
        />
        <h6 className=" truncate">{item.title}</h6>
        <h5 className="font-bold">{item.price} USD</h5>
      </Link>
    </div>
  );
}

export default CategoryItemStyling;
