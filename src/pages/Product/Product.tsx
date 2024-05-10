import { useParams } from "react-router-dom";
import useFetchingProduct from "../../Custom Hooks/useFetchingProduct";
import BarNavigation from "../../components/BarNavigation/BarNavigation";
import Footer from "../../components/Footer/Footer";
import FavoriteBtn from "../../components/ui/Favorite Button/FavoriteBtn";

function Product() {
  const { product } = useParams();

  const singleProduct = product ? product : "1";  //zostawiamy tak czy dać co innego??????

  //calling custom hook useFetchingProduct and forwarding string with specific product id from link props from QueryFetchedMen and so on...
  const { data, isError, error } = useFetchingProduct(singleProduct);

  if (isError) {
    return <h4>{error.message}</h4>;
  }

  return (
    <div className=" flex h-full w-full flex-col items-center justify-center">
      <BarNavigation />
      <div className=" mb-10 mt-32 flex h-full max-w-[1000px] flex-col items-center justify-center">
        <div className="justify-center w-full flex h-full max-w-[300px] flex-col items-center sm:max-w-[600px] lg:h-[550px] lg:max-w-[950px] lg:flex-row lg:items-start">
          <img
            src={data?.image}
            className="h-[400px] w-full max-w-[300px] bg-cover bg-center bg-no-repeat lg:h-[500px] lg:max-w-[450px]"
          ></img>
          <div className="lg:pl-5">
            <h2 className="">{data?.title}</h2>
            <h2 className=" text-right">{data?.price} USD</h2>
            <p className="mb-1">in Stock</p>
            <p>ROZMIARY tabela rozmiarów komponent</p>
            <div className="mt-6 relative ">
              <button className="mr-20 bg-cyan-400 p-2  px-5 rounded-lg text-white font-medium hover:bg-cyan-500">ADD TO CART</button>
              <FavoriteBtn item={data}/>
            </div>
            <p className="mt-6">{data?.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
