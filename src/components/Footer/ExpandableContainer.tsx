import { useState } from "react";
import ExpanderButton from "./ExpanderButton";


const ExpandableContainer: React.FC = () => {

  const [openIndex, setOpenIndex] = useState<number | boolean>(false);

  type ContainerContentProps = {
    title: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    url?: string;
  };

const containerContent: ContainerContentProps[] = [
  {
    title: "Do you need help?",
    line1: "FAQs & Contact Information",
    line2: "Online_shop ID",
    line3: "Guest return",
    line4: "Cookie preferences",
  },
  {
    title: "About us",
    line1: "Company",
    line2: "Press Room",
    line3: "Work with us!",
    line4: "",
    url: "https://www.linkedin.com/in/katarzyna-rosinska/",
  },
  {
    title: "Purchase Gift Card",
    line1: "Balance Inquiry",
    line2: "Gift card activation",
    line3: "Purchase of Gift Card",
    line4: "",
  },
];


  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? false : index);
  };

  return (
    <section className=" m-10 flex w-full flex-col items-center justify-center md:hidden pb-10">
      {/* order of arguments in map matters!!! first is an element of the array then is an index of el. in array */}
      {containerContent.map((el, index) => (
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
            <div className="p-4">
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
            </div>
          )}
        </article>
      ))}
    </section>
  );
};

export default ExpandableContainer;
