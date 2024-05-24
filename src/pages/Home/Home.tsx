// import styles from "./home.module.css";
import MainCarousel from "../../components/Main Carousel/MainCarousel";
import HomeTiles from "../../components/HomeTiles/HomeTiles";
import HomeNewsletter from "../../components/HomeNewsletter/HomeNewsletter";
import Footer from "../../components/Footer/Footer";
import NavLinksHome from "../../components/ui/NavLinksHome/NavLinksHome";
import BarNavigation from "../../components/BarNavigation/BarNavigation";
//imported photos
import manSolo from "../../assets/mansolo.jpg";
import imgMix from "../../assets/secMix.jpg";
import spring from "../../assets/spring.jpg";
import springMobile from "../../assets/springmobile.jpg";


function Home() {
  return (
    <div className="relative h-full w-full max-w-[2000px]">
      <BarNavigation color="white" />
      <MainCarousel />
      <section className="relative h-full w-full">
        {/* mobile image */}
        <div
          className="h-[760px] max-h-full w-full bg-cover bg-top bg-no-repeat lg:hidden"
          style={{
            backgroundImage: `url(${manSolo})`,
          }}
        ></div>
        {/* desktop image */}
        <div
          className="hidden h-[760px] max-h-full w-full bg-cover bg-top bg-no-repeat lg:block"
          style={{
            backgroundImage: `url(${imgMix})`,
          }}
        ></div>
        <NavLinksHome title="Men" link="/clothing/men" />

        {/* <h1 className="absolute bottom-4 right-0 p-20 text-5xl font-extrabold text-white">
          Men????
        </h1> */}
      </section>

      <section className="relative h-full w-full">
        {/* mobile image */}
        <div
          className="block h-[600px] w-full bg-cover bg-center bg-no-repeat sm:hidden"
          style={{
            backgroundImage: `url(${springMobile})`,
          }}
        ></div>
        {/* desktop image */}
        <div
          className="hidden h-[670px] w-full bg-cover bg-left-top bg-no-repeat sm:block xl:h-[700px] min-[1600px]:h-[950px]"
          style={{
            backgroundImage: `url(${spring})`,
          }}
        ></div>

        <h1 className="absolute bottom-10 right-[-125px] p-2 text-right font-extralight text-pink-400 sm:p-5 sm:text-8xl font-sans">
          Blooming <span className="-rotate-90 transform inline-block origin-bottom-left ml-14">TIME!</span>
        </h1>
      </section>
      <HomeTiles />
      <HomeNewsletter />
      <Footer />
    </div>
  );
}

export default Home;
