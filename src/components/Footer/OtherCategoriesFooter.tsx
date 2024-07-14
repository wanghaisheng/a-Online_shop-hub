import { Link } from "react-router-dom";


function OtherCategoriesFooter() {
  return (
    <>
      <div className=" h-[30px] w-full text-center">
        <h3>OTHER CATEGORIES</h3>
      </div>
      <section className=" mt-7 w-dvw border-b-[2px] border-t-[2px] p-[15px] text-center">
        <button>
          <h3 className=" px-3 text-black">
            <Link to="/clothing/women">WOMEN</Link>
          </h3>
        </button>
        <button>
          <h3 className=" border-x-[2px] px-3 text-black ">
            <Link to="/clothing/men">MEN</Link>
          </h3>
        </button>
        <button>
          <h3 className=" px-3 text-black">
            <Link to="/clothing/jewelry">JEWELRY</Link>
          </h3>
        </button>
      </section>
    </>
  );
}

export default OtherCategoriesFooter;
