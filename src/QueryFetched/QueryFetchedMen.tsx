import { useQuery } from "@tanstack/react-query";
import { fetchMen } from "../URLsForFetching/UrlsFetching";
import { useEffect } from "react";
import CategoryItemStyling from "../components/ui/CategoryItemStyling/CategoryItemStyling";


function QueryFetchedMen() {

  const fetchedMen = useQuery({
    queryKey: ["men"],
    queryFn: fetchMen,
  });

  //console.log(fetchedJewelry);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (fetchedMen?.isLoading) {
    return <h3>Loading men's clothing...</h3>;
  }

  if (fetchedMen?.isError) {
    return <h3>{JSON.stringify(fetchedMen?.error.message)}</h3>;
  }

  return (
    <CategoryItemStyling products={fetchedMen?.data} />
  );
}

export default QueryFetchedMen;
