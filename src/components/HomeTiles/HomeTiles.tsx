import kf1 from "../../assets/kf1.jpg";
import kf2 from "../../assets/kf2.jpg";
import kf3 from "../../assets/kf3.jpg";
import kf4 from "../../assets/kf4.jpg";
import NavLinksHome from "../ui/NavLinksHome/NavLinksHome";

function HomeTiles() {
  return (
    <section className="h-full w-full">
      <article className="grid grid-cols-1 lg:grid-cols-2">
        {/* top left tile */}
        <div
          className="relative aspect-square max-h-full min-h-[500px] w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${kf3})`,
          }}
        >
          <NavLinksHome title="WOMAN" link="/clothing/women" />
        </div>
        {/*top right tile  */}
        <div
          className="relative aspect-square max-h-full min-h-[500px] w-full bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${kf1})`,
          }}
        >
          <NavLinksHome title="MAN" link="/clothing/men" />
        </div>
      </article>
      <article className="grid grid-cols-1 lg:grid-cols-2">
        {/* bottom left tile */}
        <div
          className="relative aspect-square max-h-full min-h-[500px] w-full bg-cover bg-bottom bg-no-repeat"
          style={{
            backgroundImage: `url(${kf4})`,
          }}
        >
          <NavLinksHome title="ACCESSORIES" link="/clothing/jewelry" />
        </div>
        {/* bottom right tile */}
        <div
          className="relative aspect-square max-h-full min-h-[500px] w-full bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${kf2})`,
          }}
        >
          <NavLinksHome title="JEWELRY" link="/clothing/jewelry" />
        </div>
      </article>
    </section>
  );
}

export default HomeTiles;
