import { BsAndroid2 } from "react-icons/bs";
import { BsApple } from "react-icons/bs";

function Footer() {
  return (
    <footer className="flex flex-col items-center  justify-center p-14 ">
      <div className=" w-dvw border-b-[2px] border-t-[2px] p-5 text-center ">
        Tu mogą być wszystkie kategorie też wyszczególnione - zobaczymy
      </div>
      <div className=" flex w-full justify-evenly p-5">
        <div className="p-5 px-10">
          <h3 className="pb-5">Do you need help?</h3>
          <a
            href="/"
            className=" block cursor-pointer pb-1 text-slate-600 hover:text-black hover:underline hover:underline-offset-1"
          >
            FAQs & Contact Information
          </a>
          <a
            href="/"
            className="block cursor-pointer pb-1 text-slate-600 hover:text-black hover:underline hover:underline-offset-1"
          >
            Online_shop ID
          </a>
          <a
            href="/"
            className="block cursor-pointer pb-1 text-slate-600 hover:text-black hover:underline hover:underline-offset-1"
          >
            Guest return
          </a>
          <a
            href="/"
            className="block cursor-pointer pb-1 text-slate-600 hover:text-black hover:underline hover:underline-offset-1"
          >
            Cookie preferences
          </a>
        </div>
        <div className="p-5 px-10">
          <h3 className="pb-5">About us</h3>
          <a
            href="/"
            className="block cursor-pointer pb-1 text-slate-600 hover:text-black hover:underline hover:underline-offset-1"
          >
            Company
          </a>
          <a
            href="/"
            className="block cursor-pointer pb-1 text-slate-600 hover:text-black hover:underline hover:underline-offset-1"
          >
            Press Room
          </a>
          <a
            href="https://www.linkedin.com/in/katarzyna-rosinska/"
            target="_blank"
            className="block cursor-pointer pb-1 text-slate-600 hover:text-black hover:underline hover:underline-offset-1"
          >
            Work with us
          </a>
        </div>
        <div className="p-5 px-10">
          <h3 className="pb-5">Purchase Gift Card</h3>
          <a
            href="/"
            className="block cursor-pointer pb-1 text-slate-600 hover:text-black hover:underline hover:underline-offset-1"
          >
            Balance Inquiry
          </a>
          <a
            href="/"
            className="block cursor-pointer pb-1 text-slate-600 hover:text-black hover:underline hover:underline-offset-1"
          >
            Gift card activation
          </a>
          <a
            href="/"
            className="block cursor-pointer pb-1 text-slate-600 hover:text-black hover:underline hover:underline-offset-1"
          >
            Purchase of Gift Card
          </a>
        </div>
      </div>
      <div className="flex w-dvw justify-evenly border-b-[2px] border-t-[2px] p-5 text-center">
        <div>
            
        </div>
        <div className="flex">
          <BsApple />
          <p>app iOS</p>
        </div>
        <div className="flex">
          <BsAndroid2 />
          <p>app Android</p>
        </div>
        <div>
          <p>Online_shop | English</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
