import { NavLink } from "react-router-dom";

function NavLinksHome( {title, link}) {
  return (
    <NavLink to={link}>
      <article>
        <h1 className="absolute right-1/2 top-1/2 block -translate-y-1/2 translate-x-1/2 transform cursor-pointer text-white">
          {title}
        </h1>
        <p
          className="absolute right-1/2 top-1/2 block -translate-y-1/2 translate-x-1/2 transform cursor-pointer border-b-2 text-xl font-normal text-white"
          style={{ marginTop: "60px", textDecorationThickness: "1.5px" }}
        >
          View all
        </p>
      </article>
    </NavLink>
  );
}

export default NavLinksHome;