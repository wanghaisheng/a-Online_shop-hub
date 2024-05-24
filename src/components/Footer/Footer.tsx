import {
  BsAndroid2,
  BsApple,
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsYoutube,
  BsPinterest,
  BsDot,
} from "react-icons/bs";
import { Link } from "react-router-dom";


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

      <section className=" m-10 flex  w-full flex-col items-center  justify-center md:flex-row md:items-start md:justify-evenly">
        <article className="ml-5 w-[250px] p-5 text-sm">
          <h3 className="pb-5">Do you need help?</h3>
          <a
            href="#footer"
            className=" block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline 
            hover:underline-offset-1"
          >
            FAQs & Contact Information
          </a>
          <a
            href="#footer"
            className="block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1 "
          >
            Online_shop ID
          </a>
          <a
            href="#footer"
            className="block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
          >
            Guest return
          </a>
          <a
            href="#footer"
            className="block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
          >
            Cookie preferences
          </a>
        </article>

        <article className="ml-5 w-[250px] p-5 text-sm md:ml-10">
          <h3 className=" pb-5">About us</h3>
          <a
            href="#footer"
            className="block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
          >
            Company
          </a>
          <a
            href="#footer"
            className="block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
          >
            Press Room
          </a>
          <a
            href="https://www.linkedin.com/in/katarzyna-rosinska/"
            target="_blank"
            className="block cursor-pointer pb-1 font-sans text-slate-500 hover:text-amber-500 hover:underline hover:underline-offset-1"
          >
            Work with us
          </a>
        </article>

        <article className="ml-5 w-[250px] p-5 text-sm">
          <h3 className="pb-5">Purchase Gift Card</h3>
          <a
            href="#footer"
            className="block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
          >
            Balance Inquiry
          </a>
          <a
            href="#footer"
            className="block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
          >
            Gift card activation
          </a>
          <a
            href="#footer"
            className="block cursor-pointer pb-1 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
          >
            Purchase of Gift Card
          </a>
        </article>
      </section>

      <section className="flex w-dvw flex-wrap justify-evenly border-b-[2px] border-t-[2px] p-8 sm:h-[67px] sm:flex-nowrap sm:p-0">
        <article className="container mx-auto flex h-full items-center justify-center">
          <BsFacebook
            size={23}
            className="mr-4  h-[25px] w-[25px] cursor-pointer hover:fill-sky-500"
          />
          <BsInstagram
            size={23}
            className="mr-4 h-[25px] w-[25px] cursor-pointer hover:fill-pink-400"
          />
          <BsYoutube
            size={25}
            className="mr-4 h-[25px] w-[25px] cursor-pointer hover:fill-red-600"
          />
          <BsTwitterX
            size={23}
            className="mr-4 h-[25px] w-[25px] cursor-pointer hover:fill-amber-400"
          />
          <BsPinterest
            size={23}
            className="h-[25px] w-[25px] cursor-pointer hover:fill-red-600"
          />
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

      <section className="container mt-10 flex w-full flex-wrap items-center justify-center font-sans text-[13.5px] h-full px-1">
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
