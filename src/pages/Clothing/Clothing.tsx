import BarNavigation from "../../components/BarNavigation/BarNavigation";
import QueryFetchedJewelry from "../../QueryFetched/QueryFetchedJewelry";
import QueryFetchedWomen from "../../QueryFetched/QueryFetchedWomen";
import { useParams } from "react-router-dom";


type ComponentType = React.ComponentType;

type CategoryComponents = {
  [key: string]: ComponentType; 
};

function Clothing() {

  const { category } = useParams();

  const categoryComponents: CategoryComponents = {
    women: QueryFetchedWomen,
    jewelry: QueryFetchedJewelry,
  };

  const ComponentToRender = category ? categoryComponents[category] || null : null;

  
  return (
    <div className=" flex h-full w-full justify-center">
      <BarNavigation />
      <div className=" mt-20 h-full w-[1000px] border-emerald-700 bg-slate-400">
        <h2 className=" text-center">Clothing</h2>
        { ComponentToRender ? <ComponentToRender /> : null}
      </div>
    </div>
  );
}

export default Clothing;
