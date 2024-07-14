import { useParams } from "react-router-dom";
import BarNavigation from "../../components/BarNavigation/BarNavigation";
import Footer from "../../components/Footer/Footer";
import QueryFetchedJewelry from "../../QueryFetched/QueryFetchedJewelry";
import QueryFetchedMen from "../../QueryFetched/QueryFetchedMen";
import QueryFetchedWomen from "../../QueryFetched/QueryFetchedWomen";
import ErrorInfoBtn from "../../components/ui/ErrorInfoBtn/ErrorInfoBtn";


type ComponentType = React.ComponentType;

type CategoryComponents = {
  [key: string]: ComponentType;
};

function Clothing() {
  const { category } = useParams();

  const categoryComponents: CategoryComponents = {
    women: QueryFetchedWomen,
    jewelry: QueryFetchedJewelry,
    men: QueryFetchedMen,
  };

  const ComponentToRender = category
    ? categoryComponents[category] || null
    : null;


  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <BarNavigation color="black" bgWhite={true} />
      <div className="mb-24 mt-28 flex h-full max-w-[1000px] flex-col items-center justify-center">
        <h2 className="mb-4 text-center font-bold uppercase italic">
          {category}
        </h2>
        {ComponentToRender ? (
          <ComponentToRender />
        ) : (
          <ErrorInfoBtn />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Clothing;
