import { useQuery } from "@tanstack/react-query";
import { fetchJewelry } from "../URLsForFetching/UrlsFetching";
//import { Link } from "react-router-dom";
import CategoryItemStyling from "../components/ui/CategoryItemStyling/CategoryItemStyling";

type JewelryType = {
  id: number;
  description: string;
  image: string;
  title: string;
  price: number;
  category: string;
};

function QueryFetchedJewelry() {
  const fetchedJewelry = useQuery({
    queryKey: ["jewelry"],
    queryFn: fetchJewelry,
  });

  //console.log(fetchedJewelry);

  if (fetchedJewelry.isError) {
    return <h3>{JSON.stringify(fetchedJewelry.error.message)}</h3>;
  }

  return (
    <div className="grid h-full w-full grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 lg:gap-16">
      {fetchedJewelry?.data?.map((item: JewelryType) => (
        <CategoryItemStyling item={item} key={item.id}/>
        // <div
        //   key={item.id}
        //   className="h-[500px] w-full max-w-[300px] border-2 border-transparent hover:border-2 hover:border-black 
        //   lg:h-[550px] lg:max-w-[450px]"
        // >
        //   <Link to={`/product/${item.id}`}>
        //     <img
        //       src={item.image}
        //       className="h-[450px] w-full max-w-[300px] bg-cover bg-center bg-no-repeat lg:h-[500px] lg:max-w-[450px]"
        //     />
        //     <h6 className=" truncate pl-1">{item.title}</h6>
        //     <h5 className=" font-bold pl-1">{item.price} USD</h5>
        //   </Link>
        // </div>
      ))}
    </div>
  );
}

export default QueryFetchedJewelry;
