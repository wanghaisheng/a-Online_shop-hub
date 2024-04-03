// import React from 'react';
import MainCarousel from "../../components/ui/Main Carousel/MainCarousel";
import styles from "./home.module.css";


function Home() {
  return (
    <div className="w-full max-w-[2000px] h-full">
      <MainCarousel />
      <div className={styles.hello}>Hello Online_shop!</div>
    </div>
  );
}

export default Home;
