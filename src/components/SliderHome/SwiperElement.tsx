import { Link } from "react-router-dom";
import useFetchingProduct from "../../Custom Hooks/useFetchingProduct";


type dataIndexProps = {
  productId: string;
};


function SwiperElement({ productId }: dataIndexProps) {
    
  const { data, isLoading, isError, error } = useFetchingProduct(productId);

  //console.log(data);

  if (isLoading) {
    return <h3>Loading product...</h3>;
  }

  if (isError) {
    return <h3>{error?.message}</h3>;
  }

  return (
    <>
      <Link to={`/product/${data?.id}`}>
        <img
          src={data?.image}
          alt={data?.title}
          className="h-[85%] w-[300px] bg-white bg-center bg-no-repeat object-contain p-3  "
        />
        <h5 className="bg-white-smoke py-2 font-bold pl-1">
          {data?.price?.toFixed(2)} USD
        </h5>
        <h6 className=" w-auto max-w-[300px] truncate bg-white-smoke pr-8 pl-1">
          {data?.title}
        </h6>
      </Link>
    </>
  );
}

export default SwiperElement;
