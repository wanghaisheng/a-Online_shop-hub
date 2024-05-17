import { useParams } from "react-router-dom";
import useFetchingProduct from "../../Custom Hooks/useFetchingProduct";
import BarNavigation from "../../components/BarNavigation/BarNavigation";
import Footer from "../../components/Footer/Footer";
import FavoriteBtn from "../../components/ui/Favorite Button/FavoriteBtn";
import AddingToCartBtn from "../../components/ui/Cart Buttons/AddingToCartBtn";
import { useEffect } from "react";

function Product() {

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, []);

  const { product } = useParams();

  const singleProduct = product ? product : "1";  //zostawiamy tak czy dać co innego??????

  //calling custom hook useFetchingProduct and forwarding string with specific product id from link props from QueryFetchedMen and so on...
  const { data, isError, error } = useFetchingProduct(singleProduct);

  if (isError) {
    return <h4>{error.message}</h4>;
  }

  return (
    <div className=" flex h-full w-full flex-col items-center justify-center">
      <BarNavigation color="black" />
      <div className=" mb-10 mt-32 flex h-full max-w-[1000px] flex-col items-center justify-center">
        <div className="flex h-full w-full max-w-[300px] flex-col items-center justify-center sm:max-w-[600px] lg:h-[550px] lg:max-w-[950px] lg:flex-row lg:items-start">
          <img
            src={data?.image}
            className="h-[400px] w-full max-w-[300px] bg-white bg-center bg-no-repeat object-contain lg:h-[500px] lg:max-w-[450px]"
          ></img>
          <div className="lg:pl-5">
            <h2 className="">{data?.title}</h2>
            <h2 className=" text-right">{data?.price} USD</h2>
            <p className="mb-1">in Stock</p>
            <div className="relative mt-14 ">
              <AddingToCartBtn item={data} />
              {/* <button className="mr-20 rounded-lg bg-cyan-400  p-2 px-5 font-medium text-white hover:bg-cyan-500">
                ADD TO CART
              </button> */}
              <FavoriteBtn item={data} />
            </div>
            <p className="mt-10">
              <span className=" font-semibold">Product description:</span> {data?.description}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
