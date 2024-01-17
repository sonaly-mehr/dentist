"use client";
import React, { Fragment } from "react";

import styless from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import image1 from "../../assets/images/hospital1.jpg";
import image2 from "../../assets/images/hospital2.jpg";
import image3 from "../../assets/images/hospital3.jpg";
import image4 from "../../assets/images/hospital4.jpg";
import image5 from "../../assets/images/hospital5.jpg";
import image6 from "../../assets/images/hospital6.jpeg";
import image7 from "../../assets/images/hospital7.jpeg";
import image8 from "../../assets/images/hospital8.jpg";

import image9 from "../../assets/images/nabh.png";
import image10 from "../../assets/images/nabl.png";
import Image from "next/image";

const Hospitals = () => {
  const hospital__info = [
    {
      image: image1,
      title: "Max Super Speciality Hospital",
      location: "1 2, Press Enclave Marg, Saket Institutional Area, Saket, New Delhi, Delhi 110017",
      facilities:
        "It is NABH and JCI accredited hospital which provides the best treatment. Labs of Max are also NABL Accredited.",

      image2: image9,
      image3: image10,
    },
    {
      image: image2,
      title: "Fortis Memorial Research Institute",
      location:
        "Sector - 44, Opposite HUDA City Centre, Gurugram, Haryana 122002",
      facilities:
        "	It is NABH and JCI accredited hospital which provides the best treatment. NABL Accredited Labs.",

      image2: image9,
      image3: image10,
    },
    {
      image: image3,
      title: "Artemis Hospital",
      location: "Sector 51, Gurugram, Bindapur, Haryana 122001",
      facilities:
        "It is NABH and JCI accredited hospital which provides the best treatment. It is NABH and JCI accredited hospital which provides the best treatment.",

      image2: image9,
      image3: image10,
    },
    {
      image: image4,
      title: "BLK-Max	Hospital",
      location: "OPD 7, First Floor, Pusa Rd, Radha Soami Satsang, Rajendra Place, New Delhi, Delhi 110005",
      facilities:
        "	It is NABH and JCI accredited hospital which provides the best treatment. 	Labs of Max are also NABL Accredited.",

      image2: image9,
      image3: image10,
    },
    {
      image: image5,
      title: "Sanar International Hospital",
      location:
        "Golf Course Rd, Parsvnath Exotica, DLF Phase 5, Sector 53, Gurugram, Haryana 122022.",
      facilities:
        "	It is NABH and JCI accredited hospital which provides the best treatment. NABL Accredited Labs",

      image2: image9,
      image3: image10,
    },
    {
      image: image6,
      title: "Max Super Speciality Hospital",
      location: "FC 50, Max Wali Rd, C and D Block, Shalimar Place Site, Shalimar Bagh, New Delhi, Delhi, 110088",
      facilities:
        "	It is NABH and JCI accredited hospital which provides the best treatment.	NABL Accredited Labs",

      image2: image9,
      image3: image10,
    },
    {
      image: image7,
      title: "Indraprastha Apollo Hospital",
      location:
        "Indraprastha Apollo Hospital, NH-19, New Delhi, Delhi 110076",
      facilities:
        "It is NABH and JCI accredited hospital which provides the best treatment. 	NABL Accredited Labs",

      image2: image9,
      image3: image10,
    },
    {
      image: image8,
      title: "Medanta–The Medicity",
      location: "Medanta- The Medicity, CH Baktawar Singh Rd, Medicity, Islampur Colony, Sector 38, Gurugram, Haryana 122001",
      facilities:
        "Medanta- The Medicity, CH Baktawar Singh Rd, Medicity, Islampur Colony, Sector 38, Gurugram, Haryana 122001. NABL Accredited Labs",

      image2: image9,
      image3: image10,
    },
    {
      image: image8,
      title: "Amrita Hospital ",
      location: "Mata Amritanandamayi Marg, Sector 88, Faridabad, Haryana, 121002",
      facilities:
        "	It is a NABH and JCI-accredited hospital that provides the best treatment. NABL Accredited Labs",

      image2: image9,
      image3: image10,
    },
  ];

  return (
    <Fragment>
      <div className={styless.it_img_section}>
        <div className="container">
          <div className={styless.it_img_area}>
            <h2 class="fs-2 fw-bold text-center mb-4 mt-5">
            Collaborated Hospitals with Alshifa Healthcare Services for Bone Marrow Transplant.
            </h2>
            <div className={styless.it_img_list_section}>
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                // autoplay={{
                //     delay: 2000,
                //     disableOnInteraction: false
                // }}
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
                            style={{ width: "100%", height: "auto" }}
                            src={item?.image}
                            alt="image"
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </Col>
                        <Col md={6}>
                          <div className={styless.content}>
                            <h4>{item.title}</h4>
                            <span>{item.location}</span>
                            <div className={`${styless.sm_item} d-flex`}>
                              <div className={styless.sm_img}>
                                <Image src={item.image2} alt="image"                                                            
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
