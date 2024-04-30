import { useQuery } from "@tanstack/react-query";
import { fetchWomen } from "../URLsForFetching/UrlsFetching";

type WomenType = {
  id: number;
  description: string;
  image: string;
  title: string;
  price: number;
};

function QueryFetchedWomen() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["women"],
    queryFn: fetchWomen,
  });

  //console.log(data);

  if (isLoading) {
    return <h3>Loading women's clothing...</h3>;
  };

  if (isError) {
    return <h3>{error?.message}</h3>;
  };

  return (
    <div>
      <h1>women's clothing</h1>
      {data?.map((item: WomenType) => (
        <div key={item.id}>
          {item.title}
          <img src={item.image} />
        </div>
      ))}
    </div>
  );
}

export default QueryFetchedWomen;
