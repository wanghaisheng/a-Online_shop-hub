import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TransparentBtnNavigationProps = {
  children: ReactNode;
  link: string;
};

function TransparentBtnNavigation({
  children,
  link,
}: TransparentBtnNavigationProps) {
  return (
    <NavLink to={link}>
      <button className="bg-transparent p-3 duration-300 hover:scale-110">
        {children}
      </button>
    </NavLink>
  );
}

export default TransparentBtnNavigation;
