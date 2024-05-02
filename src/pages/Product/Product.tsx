import { useParams } from "react-router-dom";
import useFetchingProduct from "../../Custom Hooks/useFetchingProduct";
import BarNavigation from "../../components/BarNavigation/BarNavigation";

function Product() {
  const { product } = useParams();

  const singleProduct = product ? product : "1";

  //calling custom hook useFetchingProduct and forwarding string with specific product id from link props from QueryFetchedMen and so on...
  const { data, isError, error } = useFetchingProduct(singleProduct);

  if (isError) {
    return <h4>{error.message}</h4>;
  }

  return (
    <div>
      <BarNavigation />
      <div>{data?.title}</div>
    </div>
  );
}

export default Product;
