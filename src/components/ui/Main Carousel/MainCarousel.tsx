import { useState, useEffect, useCallback } from "react";
import mc1 from "../../../assets/mc11.jpg";
import mc2 from "../../../assets/mc2.jpg";
import mc3 from "../../../assets/mc33.jpg";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsDashLg,
} from "react-icons/bs";

const images = [
  { image: mc1, title: "Glamor and Chic" },
  { image: mc2, title: "" },
  { image: mc3, title: "Dolce Vita" },
];

function MainCarousel() {
  const [imageIndex, setImageIndex] = useState(0);

  const autoSlide: boolean = true;

  const autoSlideInterval: number = 5000;

  const prevSlide = () => {
    const zeroIndexImage = imageIndex === 0;
    const prevIndex = zeroIndexImage ? images.length - 1 : imageIndex - 1;
    setImageIndex(prevIndex);
  };

  const nextSlide = useCallback(() => {
    const lastIndexImage = imageIndex === images.length - 1;
    const nextIndex = lastIndexImage ? 0 : imageIndex + 1;
    setImageIndex(nextIndex);
  }, [imageIndex]);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, nextSlide]);

  return (
    <div className="relative m-auto flex h-[750px] w-full max-w-[2000px] justify-center">
      <div
        style={{ backgroundImage: `url(${images[imageIndex].image})` }}
        className="h-full w-full bg-cover bg-center bg-no-repeat duration-700"
      ></div>
      <h1 className=" absolute bottom-[350px] right-[200px] block cursor-pointer  text-red-300">
        {images[imageIndex].title}
      </h1>
      <div className="absolute bottom-[50%]  left-8 -translate-x-0 translate-y-[50%] cursor-pointer text-white hover:scale-110">
        <BsChevronCompactLeft size={40} onClick={prevSlide} />
      </div>
      <div className="absolute bottom-[50%] right-8 -translate-x-0 translate-y-[50%] cursor-pointer text-white hover:scale-110">
        <BsChevronCompactRight size={40} onClick={nextSlide} />
      </div>
      <div className=" absolute bottom-1 flex cursor-pointer gap-[1px]">
        {images.map((_, index) => (
          <button key={index} onClick={() => setImageIndex(index)}>
            {index === imageIndex ? (
              <BsDashLg size={60} className=" text-pink-700 hover:scale-110" />
            ) : (
              <BsDashLg size={50} className=" text-pink-200 hover:scale-110" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainCarousel;
