import SwiperSlider from "./SwiperSlider";

function SliderHome() {
  return (
    <div className="h-auto w-full bg-white-smoke pb-10">
      <h2 className="text-center p-5 font-medium mt-10">RECOMMENDED FOR YOU</h2>
      <div className="flex min-h-[250px] max-h-[450px] w-full overflow-x-auto p-5">
        <SwiperSlider />
      </div>
    </div>
  );
}

export default SliderHome;