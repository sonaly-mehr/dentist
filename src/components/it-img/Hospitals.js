"use client";
import React, { Fragment } from "react";

import styless from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import haident_mumbai from "../../assets/images/haident_mumbai.jpg";
import rajan_dental from "../../assets/images/rajan_dental.jpg";
import dentzz_clinic from "../../assets/images/dentzz_clinic.jpg";
import apollo_dental from "../../assets/images/apollo_dental.jpg";
import cosmodent_hospital from "../../assets/images/cosmodent_hospital.jpg";
import artemis from "../../assets/images/artemis_hospital.png";

import image9 from "../../assets/images/nabh.png";
import image10 from "../../assets/images/nabl.png";
import Image from "next/image";

const Hospitals = () => {
  const hospital__info = [
    {
      image: haident_mumbai,
      title: "Haident",
      location: "Mayfield Garden, Sector 52, Gurugram, Haryana 122003",
      facilities:
        "It is NABH and JCI accredited hospital which provides the best treatment. Labs of Max are also NABL Accredited",
      image2: image9,
      image3: image10,
    },

    {
      image: rajan_dental,
      title: "Rajan Dental",
      location:
        " 56, Dr R K Salai, Jagadambal Colony, Mylapore, Chennai, Tamil Nadu 600004",
      facilities:
        "It is NABH and JCI accredited hospital which provides the best treatment. Labs of Max are also NABL Accredited",
      image2: image9,
      image3: image10,
    },
    {
      image: dentzz_clinic,
      title: "Dentzz",
      location: "9/9A, 1st Floor, Delstar CHS,  N S Patkar Marg, Mumbai 400036",
      facilities:
        "It is NABH and JCI accredited hospital which provides the best treatment. Labs of Max are also NABL Accredited",
      image2: image9,
      image3: image10,
    },
    {
      image: apollo_dental,
      title: "Apollo White Dental",
      location:
        "A19A, Near Kailash Colony Metro Station, Block A, Sector 19, Delhi 110048",
      facilities:
        "It is NABH and JCI accredited hospital which provides the best treatment. Labs of Max are also NABL Accredited",
      image2: image9,
      image3: image10,
    },
    {
      image: artemis,
      title: "Artemis Hospital",
      location: "Sector 51, Gurugram, Bindapur, Haryana 122001",
      facilities:
        "It is NABH and JCI accredited hospital which provides the best treatment. Labs of Max are also NABL Accredited",
      image2: image9,
      image3: image10,
    },
    {
      image: cosmodent_hospital,
      title: "Cosmodent",
      location: "548-SP, Sector 39, Gurugram, Haryana 122001",
      facilities:
        "It is NABH and JCI accredited hospital which provides the best treatment. NABL Accredited Labs",

      image2: image9,
      image3: image10,
    },
  ];

  return (
    <Fragment>
      <div className={styless.it_img_section}>
        <div className="container">
          <div className={styless.it_img_area}>
            <h2 class="fs-2 fw-bold text-center mb-5 mt-5">
              Collaborated Hospitals with Alshifa Healthcare Services for Dental
              Problems.
            </h2>
            <div className={styless.it_img_list_section}>
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {hospital__info.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className={styless.it_img_txt}>
                      <Row className="align-items-center">
                        <Col md={6}>
                          <Image
                            className="sliderimg"
                            style={{ width: "100%", height: "360px" }}
                            src={item?.image}
                            alt="image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            unoptimized={true}
                            priority
                          />
                        </Col>
                        <Col md={6}>
                          <div className={styless.content}>
                            <h4>{item.title}</h4>
                            <span>{item.location}</span>
                            <div className={`${styless.sm_item} d-flex`}>
                              <div className={styless.sm_img}>
                                <Image
                                  src={item.image2}
                                  alt="image"
                                  width={59}
                                  height={59}
                                />
                              </div>
                              <div className={styless.sm_txt}>
                                <p>
                                  Our <strong>JCI and NABH</strong> accredited
                                  hospitals offers <br />{" "}
                                  <strong>
                                    best treatment and services to our patients
                                  </strong>
                                </p>
                              </div>
                            </div>
                            <div className={`${styless.sm_item} d-flex`}>
                              <div className={styless.sm_img}>
                                <Image
                                  src={item.image3}
                                  alt="image"
                                  width={59}
                                  //   height={55}
                                />
                              </div>
                              <div className={styless.sm_txt}>
                                <strong>NABL</strong>
                                <p>accredited Labs</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hospitals;
