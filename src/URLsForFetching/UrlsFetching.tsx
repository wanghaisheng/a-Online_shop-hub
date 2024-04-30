//fetching jewelry
export const fetchJewelry = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/jewelery",
  );
  if (!response.ok) {
    //console.log(Error);
    throw new Error(response.statusText);
  }
  const jewelryData = await response.json();
  //console.log(jewelryData);
  return jewelryData;
};

//fetching women's clothing
export const fetchWomen = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing",
  );
  if (!response.ok) {
    //console.log(Error);
    throw new Error(response.statusText);
  }
  const womenData = await response.json();
  //console.log(womenData);
  return womenData;
};



