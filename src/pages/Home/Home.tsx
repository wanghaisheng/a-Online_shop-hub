// import React from 'react';
// import styles from "./home.module.css";
import MainCarousel from "../../components/ui/Main Carousel/MainCarousel";
import HomeTiles from "../../components/HomeTiles/HomeTiles";
//import imgSpring from "../../assets/secSpring.jpg";
import imgMix from "../../assets/secMix.jpg";
import spring from "../../assets/spring.jpg";

function Home() {
  return (
    <div className="h-full w-full max-w-[2000px]">
      <MainCarousel />
      {/* <section className={styles.hello}>Hello Online_shop!</section> */}

      <section className="h-full w-full">
        <div
          className="h-[740px] max-h-full w-full bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${imgMix})`,
          }}
        >
          <div className="py-[180px] text-center text-5xl font-extrabold">
            Women
          </div>
          <div className="text-center text-5xl font-extrabold">Men</div>
        </div>
      </section>

      <section className="h-full w-full">
        <div
          className="block h-[600px] w-full bg-cover bg-left-top bg-no-repeat"
          style={{
            backgroundImage: `url(${spring})`,
          }}
        >
          <div className="pr-20 pt-96 text-right text-8xl font-extralight text-pink-400 ">
            Spring has come!
          </div>
        </div>
      </section>

      <HomeTiles />
      
    </div>
  );
}

export default Home;
