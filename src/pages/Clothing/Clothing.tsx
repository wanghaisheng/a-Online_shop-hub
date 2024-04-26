//import React from 'react'
import { useQuery } from "@tanstack/react-query";

import BarNavigation from "../../components/BarNavigation/BarNavigation";

type JewelryType = {
  id: number;
  description: string;
  image: string;
  title: string;
  price: number;
};

const fetchJewelry = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/jewelery",
  );
  if (!response.ok) {
    //console.log(Error);
    throw new Error(response.statusText);
  }
  const jewelryData = await response.json();
  //console.log(jewerlyData);
  return jewelryData;
};


function Clothing() {

  const fetchedJewelry = useQuery({
    queryKey: ["jewelry"],
    queryFn: fetchJewelry,
  });

  if (fetchedJewelry.isError) {
    return <h3>{JSON.stringify(fetchedJewelry.error.message)}</h3>
  }

  return (
    <div className=" flex h-full w-full justify-center">
      <BarNavigation />
      <div className=" mt-20 h-full w-[1000px] border-emerald-700 bg-slate-400">
        <h2 className=" text-center">Clothing</h2>
        {
          fetchedJewelry?.data?.map((item: JewelryType) => (
            <div key={item.id}>
              {item.title}
              <img src={item.image} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Clothing;


// fetch("https://fakestoreapi.com/products/category/jewelery")
//   .then((res) => res.json())
//   .then((json) => console.log(json));