//import React from 'react'
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
      <button className=" bg-transparent p-4 duration-500 hover:scale-125">
        {children}
      </button>
    </NavLink>
  );
}

export default TransparentBtnNavigation;
