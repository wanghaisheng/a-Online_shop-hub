import { Link } from "react-router-dom";


type ColorProps = {
  color: "white" | "black"
};


function Logo( {color= "white"}: ColorProps ) {
  return (
    <p
      style={{ color: `${color}` }}
      className="p-4 pl-5 text-3xl font-bold italic"
    >
      <Link to="/">Online_shop</Link>
    </p>
  );
}

export default Logo;