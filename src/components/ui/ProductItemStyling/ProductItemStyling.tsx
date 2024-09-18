import useFetchingProduct from "../../../Custom Hooks/useFetchingProduct";
import FavoriteBtn from "../Favorite Button/FavoriteBtn";
import AddingToCartBtn from "../Cart Buttons/AddingToCartBtn";

type ProductIdForFetching = {
  productId: string;
};

function ProductItemStyling({ productId }: ProductIdForFetching) {
  //calling custom hook useFetchingProduct and forwarding string with specific product id from link props from Product component
  const { data, isLoading, isError, error } = useFetchingProduct(productId);

  if (isLoading) {
    return <h3 className="pb-24 pt-44">Loading product...</h3>;
  }

  if (isError) {
    return <h4>{error.message}</h4>;
  }

  return (
    <div className="mb-10 mt-24 flex h-full max-w-[1000px] flex-col items-center justify-center grow">
      <div className="flex h-full w-full max-w-[550px] flex-col items-center justify-center px-7 sm:max-w-[600px] lg:h-[550px] lg:max-w-[950px] lg:flex-row lg:items-start">
        <img
          src={data?.image}
          className="h-[400px] w-full max-w-[300px] bg-white bg-center bg-no-repeat object-contain p-8 lg:h-[500px] lg:max-w-[400px]"
          loading="lazy"
        />
        <div className="lg:pl-5">
          <h2 className="pt-3 text-xl md:text-3xl lg:pt-0">{data?.title}</h2>
          <h3 className="pt-3 text-right font-sans text-xl md:text-2xl">
            {data?.price?.toFixed(2)} USD
          </h3>
          <p className="mb-1 font-sans">in Stock</p>
          <div className="relative mt-14">
            <AddingToCartBtn item={data} />
            <FavoriteBtn item={data} />
          </div>
          <p className="mb-10 mt-10">
            <span className="font-semibold">Product description:</span>{" "}
            <span className="font-sans text-sm">{data?.description}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductItemStyling;
