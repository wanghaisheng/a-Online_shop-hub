import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchJewelry } from "../URLsForFetching/UrlsFetching";
import CategoryItemStyling from "../components/ui/CategoryItemStyling/CategoryItemStyling";

function QueryFetchedJewelry() {
  const fetchedJewelry = useQuery({
    queryKey: ["jewelry"],
    queryFn: fetchJewelry,
  });

  //console.log(fetchedJewelry);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (fetchedJewelry?.isLoading) {
    return <h3>Loading jewelry...</h3>;
  }

  if (fetchedJewelry?.isError) {
    return <h3>{JSON.stringify(fetchedJewelry?.error.message)}</h3>;
  }

  return <CategoryItemStyling products={fetchedJewelry?.data} />;
}

export default QueryFetchedJewelry;
