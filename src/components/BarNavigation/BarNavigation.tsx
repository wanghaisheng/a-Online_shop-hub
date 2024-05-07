import { CgMenuLeft } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
//import { GoHeartFill } from "react-icons/go";  <GoHeartFill />;
import { BsCart4 } from "react-icons/bs";
import TransparentBtnNavigation from "../ui/TransparentBtnNavigation/TransparentBtnNavigation";
import Logo from "../ui/Logo/Logo";
import Menu from "../Menu/Menu";
import { useState } from "react";

function BarNavigation() {

  const [openMenu, setOpenMenu] = useState(false);


  

  const handlingOpenMenu = () => {
    setOpenMenu(true);
  };

  const handlingClosingMenu = () => {
    setOpenMenu(false); 
  };

  return (
    <>
      <header className=" fixed top-0 z-10 flex h-16 w-full ">
        <nav className="flex h-full w-full items-center justify-between p-2">
          <div className="flex">
            {/* MENU */}
            <button
              className="cursor-pointer bg-transparent p-4 duration-300 hover:scale-110"
              onClick={handlingOpenMenu}
            >
              <CgMenuLeft
                size={40}
                title="Menu"
                className=" text-white drop-shadow-md"
              />
            </button>

            <span className="hidden sm:block">
              <Logo />
            </span>
          </div>
          <div className="flex pr-2">
            <TransparentBtnNavigation link="/favorite">
              <GoHeart
                title="Favorite"
                size={30}
                className=" cursor-pointer text-white drop-shadow-md"
              />
            </TransparentBtnNavigation>
            <TransparentBtnNavigation link="/cart">
              <BsCart4
                title="cart"
                size={30}
                className=" cursor-pointer text-white drop-shadow-md"
              />
            </TransparentBtnNavigation>
          </div>
        </nav>
      </header>
      {/* MENU */}
      {openMenu && <Menu closingMenu={handlingClosingMenu} />}
    </>
  );
}

export default BarNavigation;
