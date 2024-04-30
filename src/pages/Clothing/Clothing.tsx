//import React from 'react'
//import { RootState} from "../../Global state/store";
//import { useSelector } from "react-redux";
import BarNavigation from "../../components/BarNavigation/BarNavigation";
import QueryFetchedJewelry from "../../QueryFetched/QueryFetchedJewelry";
import QueryFetchedWomen from "../../QueryFetched/QueryFetchedWomen";
//import SelectedClothing from "../../components/SelectedClothing/SelectedClothing";
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

  //const chosedCategory = useSelector((state: RootState) => state.category.value);

  return (
    <div className=" flex h-full w-full justify-center">
      <BarNavigation />
      <div className=" mt-20 h-full w-[1000px] border-emerald-700 bg-slate-400">
        <h2 className=" text-center">Clothing</h2>
        {/* {chosedCategory === "JEWELRY" && <QueryFetchedJewelry/>} */}
        { ComponentToRender ? <ComponentToRender /> : null}
      </div>
    </div>
  );
}

export default Clothing;


// fetch("https://fakestoreapi.com/products/category/jewelery")
//   .then((res) => res.json())
//   .then((json) => console.log(json));