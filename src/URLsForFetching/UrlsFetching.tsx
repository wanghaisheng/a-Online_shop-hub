//All categories that our store has are listed here

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

//fetching men's clothing
export const fetchMen = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing",
  );
  if (!response.ok) {
    //console.log(Error);
    throw new Error(response.statusText);
  }
  const menData = await response.json();
  //console.log(menData);
  return menData;
};
