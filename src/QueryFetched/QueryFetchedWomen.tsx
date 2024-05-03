import { useQuery } from "@tanstack/react-query";
import { fetchWomen } from "../URLsForFetching/UrlsFetching";
import CategoryItemStyling from "../components/ui/CategoryItemStyling/CategoryItemStyling";
//import { Link } from "react-router-dom";

type WomenType = {
  id: number;
  description: string;
  image: string;
  title: string;
  price: number;
  category: string;
};

function QueryFetchedWomen() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["women"],
    queryFn: fetchWomen,
  });

  //console.log(data);

  if (isLoading) {
    return <h3>Loading women's clothing...</h3>;
  }

  if (isError) {
    return <h3>{error?.message}</h3>;
  }

  return (
    <div className="grid h-full w-full grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 lg:gap-16">
      {data?.map((item: WomenType) => (
        <CategoryItemStyling item={item} key={item.id} />
        // <div key={item.id}>
        //   <Link to={`/product/${item.id}`}>
        //     {item.title}
        //     <img src={item.image} />
        //   </Link>
        // </div>
      ))}
    </div>
  );
}

export default QueryFetchedWomen;
