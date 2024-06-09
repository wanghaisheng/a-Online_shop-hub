import { useQuery } from "@tanstack/react-query";
import { fetchMen } from "../URLsForFetching/UrlsFetching";
import { useEffect } from "react";
import CategoryItemStyling from "../components/ui/CategoryItemStyling/CategoryItemStyling";
//import { ItemType } from "../types/types";


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
    // <div className="grid h-full w-full grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 lg:gap-16">
    //   {fetchedMen?.data?.map((item: ItemType) => (
    // <CategoryItemStyling item={item} key={item.id} />
    //   ))}
    // </div>
  );
}

export default QueryFetchedMen;
