//import React from 'react'
import styles from "../HomeNewsletter/homeNewsletter.module.css";


function HomeNewsletter() {
  return (
    <section className=" flex h-72 w-screen bg-black text-white ">
      <div className=" h-72 w-full p-20 pr-10">
        <h2 className=" text-3xl">
          STAY UP TO DATE WITH THE LATEST TRENDS AND SPECIAL OFFERS
        </h2>
        <p className=" text-xl">SIGN UP FOR OUR NEWSLETTER</p>
      </div>
      <div className="h-72 w-full  p-20  pl-10">
        <form className="flex  h-full  flex-col ">
          <span>
            <input
              className=" w-[400px] border-[1px] bg-transparent p-1 text-lg rounded-none focus-visible:outline-none"
              type="email"
              id="email"
              placeholder="ENTER YOUR E-MAIL ADDRESS"
            ></input>
          </span>
          <div className="mt-5  flex items-start">
            <label className={styles.form_checkbox}>
              <input type="checkbox" />
              <span className={styles.checkbox}></span>
              <p className=" font-extralight">
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