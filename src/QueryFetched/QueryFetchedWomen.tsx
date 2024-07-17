import { useQuery } from "@tanstack/react-query";
import { fetchWomen } from "../URLsForFetching/UrlsFetching";
import { useEffect } from "react";
import CategoryItemStyling from "../components/ui/CategoryItemStyling/CategoryItemStyling";


function QueryFetchedWomen() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["women"],
    queryFn: fetchWomen,
  });

  //console.log(data);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isLoading) {
    return <h3>Loading women's clothing...</h3>;
  }

  if (isError) {
    return <h3>{error?.message}</h3>;
  }

  return (
    <CategoryItemStyling products={data} />
  );
}

export default QueryFetchedWomen;
