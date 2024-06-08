import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import BarNavigationWhiteBg from "../../components/BarNavigation/BarNavigationWhiteBg";
import ProductItemStyling from "../../components/ui/ProductItemStyling/ProductItemStyling";
import ErrorInfoBtn from "../../components/ui/ErrorInfoBtn/ErrorInfoBtn";

// import useFetchingProduct from "../../Custom Hooks/useFetchingProduct";
// import FavoriteBtn from "../../components/ui/Favorite Button/FavoriteBtn";
// import AddingToCartBtn from "../../components/ui/Cart Buttons/AddingToCartBtn";

function Product() {
  // product is from memory of react router - App component <Route path="/product/:product" element={<Product />} /> and
  //<Link to={`/product/${item?.id}`}> in CategoryItemStyling
  const { product } = useParams();

  const productId = product || null ? product : null;

  // tu sparwadzam czy jest prawidłowe i product lub null daje komunikat o błędzie (osobny komponent) i dopiero przekazuje props z id prawidłowym

  //calling custom hook useFetchingProduct and forwarding string with specific product id from link props from QueryFetchedMen and so on...

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // const { data, isLoading, isError, error } = useFetchingProduct(singleProduct);

  //   if (isLoading) {
  //     return <h3 className="pt-32">Loading product...</h3>;
  //   }

  //   if (isError) {
  //     return <h4>{error.message}</h4>;
  //   }

  return (
    <div className=" flex h-full w-full flex-col items-center justify-center">
      <BarNavigationWhiteBg color="black" />

      {productId ? (
        <ProductItemStyling productId={productId} />
      ) : (
        <ErrorInfoBtn />
      )}

      {/* <div className=" mb-10 mt-32 flex h-full max-w-[1000px] flex-col items-center justify-center">
        <div className="flex h-full w-full max-w-[550px] flex-col items-center justify-center sm:max-w-[600px] lg:h-[550px] lg:max-w-[950px] lg:flex-row lg:items-start px-7">
          <img
            src={data?.image}
            className="h-[400px] w-full max-w-[300px] bg-white bg-center bg-no-repeat object-contain p-8 lg:h-[500px] lg:max-w-[400px]"
            loading="lazy"
          />
          <div className="lg:pl-5">
            <h2 className=" text-xl md:text-3xl pt-3 lg:pt-0">{data?.title}</h2>
            <h3 className="pt-3 text-right font-sans md:text-2xl text-xl">
              {data?.price?.toFixed(2)} USD
            </h3>
            <p className="mb-1 font-sans">in Stock</p>
            <div className="relative mt-14 ">
              <AddingToCartBtn item={data} />
              <FavoriteBtn item={data} />
            </div>
            <p className="mb-10 mt-10">
              <span className=" font-semibold">Product description:</span>{" "}
              <span className="font-sans text-sm">{data?.description}</span>
            </p>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}

export default Product;
