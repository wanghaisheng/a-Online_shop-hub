import { useQuery } from "@tanstack/react-query";
import { fetchJewelry } from "../URLsForFetching/UrlsFetching";
import { Link } from "react-router-dom";

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
    <div>
      {fetchedJewelry?.data?.map((item: JewelryType) => (
        <div key={item.id}>
          <Link to={`/product/${item.id}`}>
            {item.title}
            <img src={item.image} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default QueryFetchedJewelry;
