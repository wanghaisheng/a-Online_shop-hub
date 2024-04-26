
export const fetchJewelry = async () => {
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

