import { useQuery } from "@tanstack/react-query";
import { fetchMen } from "../URLsForFetching/UrlsFetching";
import { Link } from "react-router-dom";

type MenType = {
  id: number;
  description: string;
  image: string;
  title: string;
  price: number;
  category: string;
};

function QueryFetchedMen() {

  const fetchedMen = useQuery({
    queryKey: ["men"],
    queryFn: fetchMen,
  });

  //console.log(fetchedJewelry);

  if (fetchedMen.isError) {
    return <h3>{JSON.stringify(fetchedMen.error.message)}</h3>;
  }

  return (
    <div>
      {fetchedMen?.data?.map((item: MenType) => (
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

export default QueryFetchedMen;
