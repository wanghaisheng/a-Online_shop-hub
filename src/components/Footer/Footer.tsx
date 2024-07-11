import { BsAndroid2, BsApple, BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import ExpandableContainer from "./ExpandableContainer";
import SocialIcons from "../ui/SocialIcons/SocialIcons";
import { footerLinks } from "./FooterLinks";


function Footer() {
  return (
    <footer
      id="footer"
      className="mb-4 flex flex-col items-center justify-center border-t-[2px] pt-12"
    >
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
      <ExpandableContainer />
      <section className="m-10 hidden w-full flex-row items-start justify-evenly md:flex">
        {footerLinks.map((el) => (
          <article className="ml-5 w-[220px] p-5 text-sm" key={el?.title}>
            <h3 className="pb-5">{el?.title}</h3>
            <a
              href="#footer"
              className=" block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline 
            hover:underline-offset-1"
            >
              {el?.line1}
            </a>
            <a
              href="#footer"
              className="block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1 "
            >
              {el?.line2}
            </a>
            <a
              href={el?.url}
              target="_blank"
              className="block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
            >
              {el?.line3}
            </a>
            <a
              href="#footer"
              className="block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
            >
              {el?.line4}
            </a>
          </article>
        ))}
      </section>
      <section className="flex w-dvw flex-wrap justify-evenly border-b-[2px] border-t-[2px] p-8 sm:h-[67px] sm:flex-nowrap sm:p-0">
        <article className="container mx-auto flex h-full items-center justify-center">
          <SocialIcons />
        </article>
        <article className="container mx-auto hidden h-full items-center justify-center border-l-[2px] lg:flex">
          <BsApple size={24} className="mr-1" />
          <p className=" font-medium">app iOS</p>
        </article>
        <article className="container mx-auto hidden h-full items-center justify-center border-x-[2px] lg:flex">
          <BsAndroid2 size={24} className="mr-1 hover:fill-green-600" />
          <p className=" font-medium">app Android</p>
        </article>
        <article className="container mx-auto flex h-full items-center justify-center pt-10 sm:border-l-[2px] sm:pt-0 lg:border-l-0">
          <p className="font-sans italic">
            <span className=" font-[Oswald]">Online_shop</span> | English
          </p>
        </article>
      </section>
      <section className="container mt-10 flex h-full w-full flex-wrap items-center justify-center px-1 font-sans text-[13.5px]">
        <a
          href="https://github.com/RosinskaK"
          target="_blank"
          className="block cursor-pointer pb-1 text-slate-500 hover:text-pink-400 hover:underline hover:underline-offset-1"
        >
          Created by &copy;Kasia Rosińska
        </a>
        <BsDot className="fill-slate-500" />
        <a href="#footer" className="footer-footers">
          Terms & Conditions
        </a>
        <BsDot className="fill-slate-500" />
        <a href="#footer" className="footer-footers">
          Cookies
        </a>
        <BsDot className="fill-slate-500" />
        <a href="#footer" className="footer-footers">
          Privacy policy
        </a>
        <BsDot className="fill-slate-500" />
        <a href="#footer" className="footer-footers">
          Unsubscribe from newsletter
        </a>
      </section>
    </footer>
  );
}

export default Footer;
