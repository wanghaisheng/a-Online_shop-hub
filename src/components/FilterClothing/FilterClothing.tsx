import { useState } from "react";
import { BsArrowUpShort, BsArrowDownShort, BsSliders } from "react-icons/bs";


interface FilterClothingProps {
  onSorting: (filter: string | null) => void;
}


function FilterClothing( {onSorting}: FilterClothingProps ) {
  const [showOptions, setShowOptions] = useState(false);

  
  return (
    <div className="flex h-full w-full py-7 align-top">
      <button
        className="mr-3 flex sm:items-center "
        onClick={() => setShowOptions(!showOptions)}
      >
        <span className="mt-2 sm:py-2 sm:pr-2 sm:mt-0">Filter</span>
        <span className="mt-3 ml-2 sm:mt-0 sm:ml-0">
          <BsSliders />
        </span>
      </button>
      {showOptions && (
        <div className="flex flex-col sm:flex-row sm:items-center ml-4">
          <button
            className="my-1 flex items-center bg-black p-2 text-white sm:mx-3 sm:my-0"
            onClick={() => onSorting("price-ascending")}
          >
            <BsArrowUpShort size={23} />
            price low to high
          </button>
          <button
            className="my-1 flex  items-center bg-black p-2 text-white sm:mx-3 sm:my-0"
            onClick={() => onSorting("price-descending")}
          >
            <BsArrowDownShort size={23} />
            price high to low
          </button>
          <button
            className=" my-1 bg-black p-2 text-white sm:mx-3 sm:my-0"
            onClick={() => onSorting(null)}
          >
            default
          </button>
        </div>
      )}
    </div>
  );
}

export default FilterClothing;