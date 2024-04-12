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

function Footer() {
  return (
    <footer
      id="footer"
      className="m-6 flex flex-col  items-center justify-center"
    >
      <div className=" mt-7 w-dvw border-b-[2px] border-t-[2px] p-5 text-center">
        Tu mogą być wszystkie kategorie też wyszczególnione - zobaczymy
      </div>

      <div className=" m-10 flex  w-full flex-col items-center  justify-center md:flex-row md:items-start md:justify-evenly">
        <div className="ml-5 w-[250px] p-5">
          <h3 className="pb-5">Do you need help?</h3>
          <a
            href="#footer"
            className=" block cursor-pointer pb-1 text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
          >
            FAQs & Contact Information
          </a>
          <a
            href="#footer"
            className="block cursor-pointer pb-1 text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
          >
            Online_shop ID
          </a>
          <a
            href="#footer"
            className="block cursor-pointer pb-1 text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
          >
            Guest return
          </a>
          <a
            href="#footer"
            className="block cursor-pointer pb-1 text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
          >
            Cookie preferences
          </a>
        </div>

        <div className="ml-5 w-[250px] p-5 md:ml-10">
          <h3 className=" pb-5">About us</h3>
          <a
            href="#footer"
            className="block cursor-pointer pb-1 text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
          >
            Company
          </a>
          <a
            href="#footer"
            className="block cursor-pointer pb-1 text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
          >
            Press Room
          </a>
          <a
            href="https://www.linkedin.com/in/katarzyna-rosinska/"
            target="_blank"
            className="block cursor-pointer pb-1 text-slate-500 hover:text-amber-500 hover:underline hover:underline-offset-1"
          >
            Work with us
          </a>
        </div>

        <div className="ml-5 w-[250px] p-5">
          <h3 className="pb-5">Purchase Gift Card</h3>
          <a
            href="#footer"
            className="block cursor-pointer pb-1 text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
          >
            Balance Inquiry
          </a>
          <a
            href="#footer"
            className="block cursor-pointer pb-1 text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
          >
            Gift card activation
          </a>
          <a
            href="#footer"
            className="block cursor-pointer pb-1 text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
          >
            Purchase of Gift Card
          </a>
        </div>
      </div>

      <div className="flex w-dvw flex-wrap justify-evenly border-b-[2px] border-t-[2px] p-8 sm:h-[67px] sm:flex-nowrap sm:p-0">
        <div className="container mx-auto flex h-full items-center justify-center">
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
        </div>

        <div className="container mx-auto hidden h-full items-center justify-center border-l-[2px] lg:flex">
          <BsApple size={22} className="mr-1" />
          <p className=" font-medium">app iOS</p>
        </div>

        <div className="container mx-auto hidden h-full items-center justify-center border-x-[2px] lg:flex">
          <BsAndroid2 size={22} className="mr-1 hover:fill-green-600" />
          <p className=" font-medium">app Android</p>
        </div>

        <div className="container mx-auto flex h-full items-center justify-center pt-10 sm:border-l-[2px] sm:pt-0 lg:border-l-0">
          <p>
            <span className=" italic">Online_shop</span> | English
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-10 box-border flex w-full flex-wrap items-center justify-center text-sm">
        <a
          href="https://github.com/RosinskaK"
          target="_blank"
          className="block cursor-pointer pb-1 text-slate-500 hover:font-bold hover:text-pink-400 hover:underline hover:underline-offset-1"
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
      </div>
    </footer>
  );
}

export default Footer;
