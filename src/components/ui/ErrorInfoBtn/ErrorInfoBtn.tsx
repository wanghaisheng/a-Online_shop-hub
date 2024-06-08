import { Link } from "react-router-dom";


function ErrorInfoBtn() {
  return (
    <div>
      <h3>Ups! Sorry, something went wrong...</h3>
      <p className="p-5">Please go to Home page</p>
      <button className="rounded-xl bg-black px-9 py-4 text-lg text-white">
        <Link to="/">Home Page</Link>
      </button>
    </div>
  );
}

export default ErrorInfoBtn;