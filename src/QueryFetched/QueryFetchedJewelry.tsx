import { useQuery } from "@tanstack/react-query";
import { fetchJewelry } from "../URLsForFetching/UrlsFetching";

type JewelryType = {
  id: number;
  description: string;
  image: string;
  title: string;
  price: number;
};

function QueryFetchedJewelry() {
  const fetchedJewelry = useQuery({
    queryKey: ["jewelry"],
    queryFn: fetchJewelry,
  });

  if (fetchedJewelry.isError) {
    return <h3>{JSON.stringify(fetchedJewelry.error.message)}</h3>;
  }

  return (
    <div>
      {fetchedJewelry?.data?.map((item: JewelryType) => (
        <div key={item.id}>
          {item.title}
          <img src={item.image} />
        </div>
      ))}
    </div>
  );
}

export default QueryFetchedJewelry;
