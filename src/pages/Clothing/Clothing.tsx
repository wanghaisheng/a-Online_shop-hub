import { Link, useParams } from "react-router-dom";
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


  return (
    <div className=" flex h-full w-full flex-col items-center justify-center">
      <BarNavigationWhiteBg color="black" />
      <div className=" mb-24 mt-28 flex h-full max-w-[1000px] flex-col items-center justify-center">
        <h2 className="mb-16 text-center font-bold uppercase italic">
          {category}
        </h2>

        {ComponentToRender ? (
          <ComponentToRender />
        ) : (
          <div>
            <h3>Ups! Sorry, something went wrong...</h3>
            <p className="p-5">Please go to Home page</p>
            <button className="rounded-xl bg-black px-9 py-4 text-lg text-white">
              <Link to="/">Home Page</Link>
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Clothing;
