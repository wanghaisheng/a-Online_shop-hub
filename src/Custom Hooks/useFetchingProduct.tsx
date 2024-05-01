import { useQuery } from "@tanstack/react-query";

const fetchProduct = async (product: string) => {
  const response = await fetch(`https://fakestoreapi.com/products/${product}`);
  if (!response.ok) {
    //console.log(Error);
    throw new Error(response.statusText);
  }
  const productData = await response.json();
  //console.log(productData);
  return productData;
};

function useFetchingProduct(product: string) {
  return useQuery({
    queryKey: ["product", product],
    queryFn: () => fetchProduct(product),
  });
}

export default useFetchingProduct;
