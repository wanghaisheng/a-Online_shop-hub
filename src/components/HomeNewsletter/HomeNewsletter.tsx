import styles from "../HomeNewsletter/homeNewsletter.module.css";
import { LiaArrowRightSolid } from "react-icons/lia";


function HomeNewsletter() {
  return (
    <section className="flex flex-col w-full bg-black text-white p-5 lg:flex-row h-full">

      <div className="p-6 md:p-20 lg:pr-2 w-full">
        <h2 className="text-3xl sm:text-4xl leading-7 sm:leading-8 font-semibold">
          STAY UP-TO-DATE ON THE LATEST TRENDS AND EXCLUSIVE OFFERS
        </h2>
        <p className="sm:pt-3 sm:text-xl font-extralight text-lg pt-2">
          SUBSCRIBE TO OUR NEWSLETTER
        </p>
      </div>

      <div className="h-full w-full p-6 md:p-20 pt-5 md:pt-0 lg:pt-20">
        <form className="flex flex-col">
          <span className="flex">
            <input
              className="w-[220px] sm:w-[400px] rounded-none border-[1px] bg-transparent p-1 sm:text-lg focus-visible:outline-none text-sm"
              type="email"
              id="email"
              placeholder="ENTER YOUR E-MAIL ADDRESS"
            ></input>
            <button className="block sm:h-[37.6px] h-full sm:w-[40px] cursor-pointer border-[1px] border-l-0 w-[32px]">
              {" "}
              <LiaArrowRightSolid size={30} className="pl-1 pr-1 sm:pr-0" />
            </button>
          </span>
          <div className="mt-5 flex items-start">
            <label className={styles.form_checkbox}>
              <input type="checkbox" />
              <span className={styles.checkbox}></span>
              <p className=" font-extralight pr-14 2xl:max-w-[750px]">
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