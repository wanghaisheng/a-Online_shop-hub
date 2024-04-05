//import React from 'react'
import kf1 from "../../assets/kf1.jpg";
import kf2 from "../../assets/kf2.jpg";
import kf3 from "../../assets/kf3.jpg";
import kf4 from "../../assets/kf4.jpg";



function HomeTiles() {

  return (
    <section className="h-full w-full">
      <div className="flex ">
        <div
          className="h-[730px] max-h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${kf3})`
          }}
        ></div>
        <div
          className="h-[730px] max-h-full w-full bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${kf1})`
          }}
        ></div>
      </div>
      <div className="flex">
        <div
          className="h-[730px] max-h-full w-full bg-cover bg-bottom bg-no-repeat"
          style={{
            backgroundImage: `url(${kf4})`
          }}
        ></div>
        <div
          className="h-[730px] max-h-full w-full bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${kf2})`
          }}
        ></div>
      </div>
    </section>
  );
}

export default HomeTiles;