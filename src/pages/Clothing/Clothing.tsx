import BarNavigation from "../../components/BarNavigation/BarNavigation";
import Footer from "../../components/Footer/Footer";
import QueryFetchedJewelry from "../../QueryFetched/QueryFetchedJewelry";
import QueryFetchedMen from "../../QueryFetched/QueryFetchedMen";
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
    men: QueryFetchedMen,
  };

  const ComponentToRender = category ? categoryComponents[category] || null : null;


  //dorobić komponent zwracany w razie błędu w return patrz niżej zamiast null

  
  return (
    <div className=" flex h-full w-full justify-center flex-col items-center">
      <BarNavigation />
      <div className=" mt-20 h-full max-w-[1000px] flex flex-col items-center justify-center mb-20">
        <h2 className="text-center mb-10 text-lg uppercase font-bold italic">{category}</h2>
        { ComponentToRender ? <ComponentToRender /> : null}
      </div>
      <Footer />
    </div>
  );
}

export default Clothing;
