import { useState } from "react";
import mc1 from "../../../assets/mc11.jpg";
import mc2 from "../../../assets/mc22.jpg";
import mc3 from "../../../assets/mc33.jpg";

const images = [mc1, mc2, mc3];

function MainCarousel() {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="relative m-auto flex h-full w-full max-w-[2000px] justify-center">
      <img
        src={images[imageIndex]}
        className="min-h-[700px] max-w-[2000px] bg-no-repeat h-full w-full object-cover duration-500"
      ></img>
    </div>
  );
}

export default MainCarousel;
