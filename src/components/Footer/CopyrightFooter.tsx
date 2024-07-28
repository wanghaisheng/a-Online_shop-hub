import { BsDot } from "react-icons/bs";

function CopyrightFooter() {
  return (
    <section className="container mt-8 p-3 flex flex-wrap items-center justify-center px-1 font-sans text-[13.5px] mx-1">
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
        Unsubscribe from our newsletter
      </a>
    </section>
  );
}

export default CopyrightFooter;
