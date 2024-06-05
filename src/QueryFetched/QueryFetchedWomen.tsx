import { useQuery } from "@tanstack/react-query";
import { fetchWomen } from "../URLsForFetching/UrlsFetching";
import { useEffect } from "react";
import CategoryItemStyling from "../components/ui/CategoryItemStyling/CategoryItemStyling";
import { ItemType } from "../types/types";

// type WomenType = {
//   id: number;
//   description: string;
//   image: string;
//   title: string;
//   price: number;
//   category: string;
// };

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
    <div className="grid h-full w-full grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 lg:gap-16">
      {data?.map((item: ItemType) => (
        <CategoryItemStyling item={item} key={item.id} />
      ))}
    </div>
  );
}

export default QueryFetchedWomen;
