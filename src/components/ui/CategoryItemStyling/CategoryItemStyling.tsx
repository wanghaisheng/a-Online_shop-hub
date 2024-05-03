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
      className="h-[500px] w-full max-w-[300px] border-2 border-transparent hover:border-2 hover:border-black 
          lg:h-[550px] lg:max-w-[450px]"
    >
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          className="h-[450px] w-full max-w-[300px] bg-cover bg-center bg-no-repeat lg:h-[500px] lg:max-w-[450px]"
        />
        <h6 className=" truncate pl-1">{item.title}</h6>
        <h5 className=" pl-1 font-bold">{item.price} USD</h5>
      </Link>
    </div>
  );
}

export default CategoryItemStyling;
