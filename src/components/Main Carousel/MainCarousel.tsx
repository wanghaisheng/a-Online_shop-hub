import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import mc1 from "../../assets/mc11.jpg";
import mc2 from "../../assets/mc22.jpg";
import mc3 from "../../assets/mc3.jpg";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsDashLg,
} from "react-icons/bs";


const images = [
  {
    image: mc1,
    title: "GLAMOUR AND CHIC",
    font: "font-LibreBodoni",
    color: "text-black",
  },
  {
    image: mc2,
    title: "WOMAN",
    font: "font-Oswald",
    color: "text-emerald-600",
  },
  {
    image: mc3,
    title: "Dolce Vita",
    font: "font-GreatVibes",
    color: "text-orange-300",
  },
];

function MainCarousel() {
  const [imageIndex, setImageIndex] = useState(0);

  const autoSlideCarouselIsActive: boolean = true; //activating auto slider in Carousel if true, if false auto slider is off

  const autoSlideInterval: number = 5000; //a time in miliseconds of how long Carousel displays specyfic image

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
    if (!autoSlideCarouselIsActive) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlideCarouselIsActive, autoSlideInterval, nextSlide]);

  return (
    // <div className="h-screen w-full">
      <div className="relative flex h-[calc(100vh-12px)] max-h-screen min-h-[600px] w-full justify-center 3xl:h-[90vh]">
        <div
          style={{ backgroundImage: `url(${images[imageIndex].image})` }}
          className="h-full max-h-screen min-h-[600px] w-full bg-cover bg-center bg-no-repeat duration-700"
        ></div>
        {/*  */}
        <h1
          className={`absolute bottom-[180px] block cursor-pointer text-center ${images[imageIndex].color} ${images[imageIndex].font} w-[280px] leading-[41px]`}
        >
          <NavLink to="/clothing/women">
            {images[imageIndex].title}
            <p
              className="absolute right-1/2 top-1/2 block -translate-y-1/2 translate-x-1/2 transform cursor-pointer border-b-2 font-Oswald text-lg font-normal text-white"
              style={{ marginTop: "75px", textDecorationThickness: "1.5px" }}
            >
              View all
            </p>
          </NavLink>
        </h1>
        <div
          className="absolute bottom-[50%] left-3 -translate-x-0 translate-y-[50%] cursor-pointer text-white drop-shadow-md hover:scale-110 md:left-8"
          data-test-id="carousel-arrow-left"
        >
          <BsChevronCompactLeft size={40} onClick={prevSlide} />
        </div>
        <div
          className="absolute bottom-[50%] right-3 -translate-x-0 translate-y-[50%] cursor-pointer text-white drop-shadow-md hover:scale-110 md:right-8"
          data-test-id="carousel-arrow-right"
        >
          <BsChevronCompactRight size={40} onClick={nextSlide} />
        </div>
        <div className="absolute bottom-1 flex cursor-pointer gap-[1px]">
          {images.map((_, index) => (
            <button key={index} onClick={() => setImageIndex(index)}>
              {index === imageIndex ? (
                <BsDashLg size={55} className="text-black hover:scale-110" />
              ) : (
                <div className="mx-1 h-[3.5px] w-9 rounded-full border-[1px] border-black hover:scale-110"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    // </div>
  );
}

export default MainCarousel;
