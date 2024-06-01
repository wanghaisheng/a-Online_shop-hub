import styles from "../HomeNewsletter/homeNewsletter.module.css";
import { LiaArrowRightSolid } from "react-icons/lia";


function HomeNewsletter() {
  return (
    <section className="flex h-full w-full flex-col bg-black p-5 text-white lg:flex-row">
      <div className="w-full p-6 md:p-20 lg:pr-2">
        <h2 className="text-3xl font-[400] leading-8 sm:text-4xl sm:leading-9">
          STAY UP-TO-DATE ON THE LATEST TRENDS AND EXCLUSIVE OFFERS
        </h2>
        <p className="pt-2 text-lg font-extralight sm:pt-3 sm:text-xl font-sans">
          SUBSCRIBE TO OUR NEWSLETTER
        </p>
      </div>

      <div className="h-full w-full p-6 pt-5 md:p-20 md:pt-0 lg:pt-20">
        <form className="flex flex-col">
          <span className="flex">
            <input
              className="w-[220px] rounded-none border-[1px] bg-transparent p-1 text-sm focus-visible:outline-none sm:w-[400px] sm:text-lg"
              type="email"
              id="email"
              name="email"
              placeholder="ENTER YOUR E-MAIL ADDRESS"
            ></input>
            <button
              type="submit"
              className="block h-full w-[32px] cursor-pointer border-[1px] border-l-0 sm:h-[37.6px] sm:w-[40px]"
            >
              {" "}
              <LiaArrowRightSolid size={30} className="pl-1 pr-1 sm:pr-0" />
            </button>
          </span>
          <div className="mt-5 flex items-start">
            <label className={styles.form_checkbox}>
              <input type="checkbox" id="checkbox" />
              <span className={styles.checkbox}></span>
              <p className=" pr-14 font-extralight 2xl:max-w-[750px] font-sans text-xs sm:text-sm">
                I have read and understand the information regarding the use of
                my personal data contained in the Privacy Policy and consent to
                receiving personalized commercial communications from
                Online_shop via email and other means
              </p>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HomeNewsletter;