import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import BarNavigation from "../../components/BarNavigation/BarNavigation";
import ProductItemStyling from "../../components/ui/ProductItemStyling/ProductItemStyling";
import ErrorInfoBtn from "../../components/ui/ErrorInfoBtn/ErrorInfoBtn";


function Product() {
  // product is from memory of react router - App component <Route path="/product/:product" element={<Product />} /> and
  //<Link to={`/product/${item?.id}`}> in CategoryItemStyling
  const { product } = useParams();

  const productId = product ? product : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);


  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <BarNavigation color="black" bgWhite={true} />
      {productId ? (
        <ProductItemStyling productId={productId} />
      ) : (
        <ErrorInfoBtn />
      )}
      <Footer />
    </div>
  );
}

export default Product;
