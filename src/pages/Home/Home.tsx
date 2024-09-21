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
import SliderHome from "../../components/SliderHome/SliderHome";

function Home() {
  return (
    <div className=" relative h-full w-full">
      <BarNavigation color="white" bgWhite={false} />
      <MainCarousel />
      {/* Men section */}
      <section className="relative h-full w-full">
        {/* mobile image */}
        <div
          className="h-[600px] max-h-full w-full bg-cover bg-top bg-no-repeat lg:hidden"
          style={{
            backgroundImage: `url(${manSolo})`,
          }}
        ></div>
        {/* desktop image */}
        <div
          className="hidden aspect-[16/9] max-h-full min-h-screen w-full bg-cover bg-top bg-no-repeat lg:block"
          style={{
            backgroundImage: `url(${imgMix})`,
          }}
        ></div>
        <NavLinksHome title="Men" link="/clothing/men" />
      </section>
      {/* Blooming time section*/}
      <section className="relative flex h-[720px] w-full items-end bg-white-smoke sm:h-[750px] min-[1400px]:h-[950px] min-[1900px]:h-[1400px]">
        {/* mobile image */}
        <div
          className="top-0 block h-[650px] w-full bg-cover bg-center bg-no-repeat sm:hidden"
          style={{
            backgroundImage: `url(${springMobile})`,
          }}
        ></div>
        {/* desktop image */}
        <div
          className="hidden h-[650px] w-full bg-cover bg-center bg-no-repeat sm:block xl:h-[650px] min-[1400px]:h-[850px] min-[1900px]:h-[1300px]"
          style={{
            backgroundImage: `url(${spring})`,
          }}
        ></div>
        <h1 className="absolute top-4 w-full p-2 text-center font-sans text-7xl font-normal text-pink-500 sm:p-5 sm:text-8xl xl:top-0 xl:text-9xl">
          Blooming <span className="font-extralight">TIME!</span>
        </h1>
      </section>
      <HomeTiles />
      <SliderHome />
      <HomeNewsletter />
      <Footer />
    </div>
  );
}

export default Home;
