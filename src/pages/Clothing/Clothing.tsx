//import React from 'react'
import { RootState} from "../../Global state/store";
import { useSelector } from "react-redux";
import BarNavigation from "../../components/BarNavigation/BarNavigation";
import QueryFetchedJewelry from "../../QueryFetched/QueryFetchedJewelry";
//import SelectedClothing from "../../components/SelectedClothing/SelectedClothing";

// type QueryProps = {
//   jewelry?: boolean;
// };

 

function Clothing() {

  const chosedCategory = useSelector((state: RootState) => state.category.value);

  return (
    <div className=" flex h-full w-full justify-center">
      <BarNavigation />
      <div className=" mt-20 h-full w-[1000px] border-emerald-700 bg-slate-400">
        <h2 className=" text-center">Clothing</h2>
        {chosedCategory === "JEWELRY" && <QueryFetchedJewelry/>}
      </div>
    </div>
  );
}

export default Clothing;


// fetch("https://fakestoreapi.com/products/category/jewelery")
//   .then((res) => res.json())
//   .then((json) => console.log(json));