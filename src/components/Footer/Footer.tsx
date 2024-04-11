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
      className="flex flex-col items-center  justify-center p-6 "
    >
      <div className=" mt-7 w-dvw border-b-[2px] border-t-[2px] p-5 text-center">
        Tu mogą być wszystkie kategorie też wyszczególnione - zobaczymy
      </div>

      <div className=" flex w-full justify-evenly p-10">
        <div className="p-5 px-10">
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

        <div className="p-5 px-10">
          <h3 className="pb-5">About us</h3>
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

        <div className="p-5 px-10">
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

      <div className="flex h-[67px] w-dvw justify-evenly border-b-[2px] border-t-[2px] ">
        <div className="container mx-auto flex h-full items-center justify-center">
          <BsFacebook
            size={23}
            className="mr-4  cursor-pointer hover:fill-sky-500"
          />
          <BsInstagram
            size={23}
            className="mr-4 cursor-pointer hover:fill-pink-400"
          />
          <BsYoutube
            size={25}
            className="mr-4 cursor-pointer hover:fill-red-600"
          />
          <BsTwitterX
            size={23}
            className="mr-4 cursor-pointer hover:fill-amber-400"
          />
          <BsPinterest
            size={23}
            className="cursor-pointer hover:fill-red-600"
          />
        </div>
        <div className="container mx-auto flex h-full items-center justify-center border-x-[2px]">
          <BsApple size={22} className="mr-1" />
          <p className=" font-medium">app iOS</p>
        </div>
        <div className="container mx-auto flex h-full items-center justify-center border-r-[2px]">
          <BsAndroid2 size={22} className="mr-1 hover:fill-green-600" />
          <p className=" font-medium">app Android</p>
        </div>
        <div className="container mx-auto flex h-full items-center justify-center">
          <p>
            <span className=" italic">Online_shop</span> | English
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-10 flex h-[30px] w-dvw items-center justify-center text-sm">
        <a
          href="https://github.com/RosinskaK"
          target="_blank"
          className="block cursor-pointer pb-1 text-slate-500 hover:font-bold hover:text-pink-400 hover:underline hover:underline-offset-1"
        >
          Created by &copy;Kasia Rosińska
        </a>
        <BsDot className="fill-slate-500" />
        <a
          href="#footer"
          className="block cursor-pointer pb-1 text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
        >
          Terms & Conditions
        </a>
        <BsDot className="fill-slate-500" />
        <a
          href="#footer"
          className="block cursor-pointer pb-1 text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
        >
          Cookies
        </a>
        <BsDot className="fill-slate-500" />
        <a
          href="#footer"
          className="block cursor-pointer pb-1 text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
        >
          Privacy policy
        </a>
        <BsDot className="fill-slate-500" />
        <a
          href="#footer"
          className="block cursor-pointer pb-1 text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
        >
          Unsubscribe from newsletter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
