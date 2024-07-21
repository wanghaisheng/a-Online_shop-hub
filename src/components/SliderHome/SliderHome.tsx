//import React from 'react'

import SwiperSlider from "./SwiperSlider";

function SliderHome() {
  return (
    <div className="h-full w-full bg-white-smoke pb-10">
      <h2 className="text-center p-5 font-medium mt-10">RECOMMENDED FOR YOU</h2>
      <div className="m-10 flex min-h-[250px] max-h-[450px] w-full overflow-x-auto ">
        <SwiperSlider />
      </div>
    </div>
  );
}

export default SliderHome