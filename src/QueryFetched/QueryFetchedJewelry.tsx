import { useQuery } from "@tanstack/react-query";
import { fetchJewelry } from "../URLsForFetching/UrlsFetching";
import CategoryItemStyling from "../components/ui/CategoryItemStyling/CategoryItemStyling";
import { useEffect } from "react";
// import { ItemType } from "../types/types";
// import FilterClothing from "../components/FilterClothing/FilterClothing";




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


  return (
    <CategoryItemStyling products={fetchedJewelry?.data} />
    // {/* <div className="grid h-full w-full grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 lg:gap-16">
    //   {fetchedJewelry?.data?.map((item: ItemType) => (
    //     <CategoryItemStyling item={item} key={item.id} />
    //   ))}
    // </div> */}
  );
}

export default QueryFetchedJewelry;
