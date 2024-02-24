"use client";
import React from "react";

import image1 from "../../assets/images/picture1.png";
import image2 from "../../assets/images/picture2.webp";
import image3 from "../../assets/images/picture3.png";
import image4 from "../../assets/images/picture4.png";
import Image from "next/image";
import styles from "./styles.module.css";

const Choose = () => {
  const chooseInfo = [
    {
      image: image4,
      title: "Best doctors from India",
    },
    {
      image: image3,
      title: "New Technology",
    },
    {
      image: image2,
      title: "State of art Infrastructure",
    },
    {
      image: image1,
      title: "Team with recognized awards",
    },
  ];

  return (
    <section className={styles.choose__section}>
      <div className="container">
        <div className={styles.choose__inner}>
          <h2>
          Why Alshifa Healthcare Services is a good option for Dental Problems?
          </h2>

          <div className={`row ${styles.choose__box} justify-content-center`}>
            {chooseInfo.map((item, index) => (
              <div className="col-sm-6 col-md-4" key={index}>
                <div className={`${styles.box} mb-5`}>
                  <div className={styles.image}>
                    <Image src={item.image} alt="" />
                  </div>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
