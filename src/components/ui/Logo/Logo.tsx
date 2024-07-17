import { Link } from "react-router-dom";

type ColorProps = {
  color: "white" | "black",
};


function Logo( {color= "white"}: ColorProps ) {
  return (
    <p
      style={{ color: `${color}` }}
      className="p-3 pl-5 text-2xl font-bold italic drop-shadow-md sm:text-3xl"
    >
      <Link to="/">Online_shop</Link>
    </p>
  );
}

export default Logo;