import { NavLink } from "react-router-dom";

//here must be all categories our store have to navlink them and for routing
type NavLinksHomeProps = {
  title: string;
  link: "/clothing/women" | "/clothing/jewelry" | "/clothing/men";
};


function NavLinksHome({ title, link }: NavLinksHomeProps) {

  return (
    <NavLink to={link}>
      <article>
        <h1 className="absolute right-1/2 top-1/2 block -translate-y-1/2 translate-x-1/2 transform cursor-pointer text-white">
          {title}
        </h1>
        <p
          className="absolute right-1/2 top-1/2 block -translate-y-1/2 translate-x-1/2 transform cursor-pointer border-b-2 text-lg font-normal text-white"
          style={{ marginTop: "70px", textDecorationThickness: "1.5px" }}
        >
          View all
        </p>
      </article>
    </NavLink>
  );
}

export default NavLinksHome;
