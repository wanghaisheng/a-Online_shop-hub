//import React from 'react'
import styles from "../HomeNewsletter/homeNewsletter.module.css";
import { LiaArrowRightSolid } from "react-icons/lia";


function HomeNewsletter() {
  return (
    <section className=" flex h-72 w-screen bg-black text-white ">
      <div className=" h-72 w-full p-20 pr-10">
        <h2 className=" text-4xl leading-8">
          STAY UP-TO-DATE ON THE LATEST TRENDS AND EXCLUSIVE OFFERS
        </h2>
        <p className="pt-3 text-xl font-extralight">
          SUBSCRIBE TO OUR NEWSLETTER
        </p>
      </div>
      <div className="h-72 w-full  p-20  pl-10">
        <form className="flex  h-full  flex-col ">
          <span className="flex">
            <input
              className=" w-[400px] rounded-none border-[1px]  bg-transparent p-1 text-lg focus-visible:outline-none"
              type="email"
              id="email"
              placeholder="ENTER YOUR E-MAIL ADDRESS"
            ></input>
            <button className="block h-full w-[40px] cursor-pointer border-[1px] border-l-0">
              {" "}
              <LiaArrowRightSolid size={30} className="pl-1" />
            </button>
          </span>
          <div className="mt-5  flex items-start">
            <label className={styles.form_checkbox}>
              <input type="checkbox" />
              <span className={styles.checkbox}></span>
              <p className="max-w-[450px] font-extralight">
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