import { useParams } from "react-router-dom";
import BarNavigationWhiteBg from "../../components/BarNavigation/BarNavigationWhiteBg";
import Footer from "../../components/Footer/Footer";
import QueryFetchedJewelry from "../../QueryFetched/QueryFetchedJewelry";
import QueryFetchedMen from "../../QueryFetched/QueryFetchedMen";
import QueryFetchedWomen from "../../QueryFetched/QueryFetchedWomen";


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

  //dorobić komponent zwracany w razie błędu w return patrz niżej zamiast null

  return (
    <div className=" flex h-full w-full flex-col items-center justify-center">
      <BarNavigationWhiteBg color="black" />
      <div className=" mb-24 mt-28 flex h-full max-w-[1000px] flex-col items-center justify-center">
        <h2 className="mb-16 text-center font-bold uppercase italic">
          {category}
        </h2>
        {ComponentToRender ? <ComponentToRender /> : null}
      </div>
      <Footer />
    </div>
  );
}

export default Clothing;
