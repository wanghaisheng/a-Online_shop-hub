//import React from 'react'
import { Link } from "react-router-dom";

function Logo() {
  return (
    <p
      style={{ textShadow: "1px 1px 2px black" }}
      className="p-4  pl-5 text-3xl font-bold  italic text-white"
    >
      <Link to="/">Online_shop</Link>
    </p>
  );
}

export default Logo;