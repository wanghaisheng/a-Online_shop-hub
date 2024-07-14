import { useState } from "react";
import ExpanderButton from "./ExpanderButton";
import { footerLinks } from "./FooterLinks";


const ExpandableContainer: React.FC = () => {

  const [openIndex, setOpenIndex] = useState<number | boolean>(false);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? false : index);
  };

  
  return (
    <section className=" m-16 flex w-full flex-col items-center justify-center md:hidden pb-10">
      {/* order of arguments in map matters!!! first is an element of the array then is an index of el. in array */}
      {footerLinks.map((el, index) => (
        <article
          key={el?.title}
          className="mx-auto w-72 overflow-hidden border-b border-gray-200 mt-7"
        >
          <div
            className="flex cursor-pointer items-center justify-between p-3"
            onClick={() => handleToggle(index)}
          >
            <h3 className="font-bold">{el?.title}</h3>
            <ExpanderButton
              expanderOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          </div>
          {openIndex === index && (
            <div className="p-3">
              <a
                href="#footer"
                className=" block cursor-pointer pb-2 font-sans text-slate-500 hover:text-black hover:underline 
            hover:underline-offset-1"
              >
                {el?.line1}
              </a>
              <a
                href="#footer"
                className="block cursor-pointer pb-2 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1 "
              >
                {el?.line2}
              </a>
              <a
                href={el?.url}
                target="_blank"
                className="block cursor-pointer pb-2 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
              >
                {el?.line3}
              </a>
              <a
                href="#footer"
                className="block cursor-pointer pb-2 font-sans text-slate-500 hover:text-black hover:underline hover:underline-offset-1"
              >
                {el?.line4}
              </a>
            </div>
          )}
        </article>
      ))}
    </section>
  );
};

export default ExpandableContainer;
