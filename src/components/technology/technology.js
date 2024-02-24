"use client";
import React, { Fragment } from "react";
import TechImg1 from "../../assets/images/Digital Smile Design.jpg";
import TechImg2 from "../../assets/images/Dental Chair.jpg";
import TechImg3 from "../../assets/images/3D Scanner.jpg";
import TechImg4 from "../../assets/images/OPG (Orthopantomagram).jpg";
import styless from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, pagination } from "swiper/modules";
import "swiper/css/pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "swiper/css/navigation";
import Image from "next/image";

const Technology = () => {
  const edges = [
    {
      image: TechImg1,
      title: "Digital Smile Design",
      content:
        "Digital Smile Design' uses fancy technology to plan the smile by assessing their face and personality. It helps dentists figure out the best way to make the smile look awesome",
    },
    {
      image: TechImg2,
      title: "Dental Chair",
      content:
        "A dental chair consists of a movable, electrically operated patient seat equipped with connections for a spittoon bowl, water supply, micro-motor, compressed air supply, and an overhead light. It is a vital element in dentistry. ",
    },
    {
      image: TechImg3,
      title: "3D Scanner",
      content: `3D scanners are special cameras that take super accurate pictures of the teeth. Dentists use these pictures to get detailed information for treatments. It's like a high-tech way of looking closely at the teeth.`,
    },
    {
      image: TechImg4,
      title: "Orthopantomogram (OPG)",
      content:
        "An orthopantomogram (OPG) is a dental X-ray that scans both upper and lower jaws. It shows a flat, two-dimensional view of a half-circle from ear to ear. Panoramic X-rays capture images of the top (maxilla) and bottom (mandible) jaws from different angles to create a complete panoramic image",
    },
  ];

  return (
    <Fragment>
      <div className={styless.technology_section}>
        <div className="container">
          <div className={styless.technology_title}>
            <h2>Best technology and treatments </h2>
            <p>
              Our advanced technology makes dentistry simpler, less
              intrusive, and helps patients recover faster.
            </p>
          </div>
          <div className={styless.technology_inner}>
            <Row>
              <Col md={12}>
                <div className={styless.tech_slider}>
                  <Swiper
                    breakpoints={{
                      // when window width is >= 640px
                      0: {
                        //   width: 640,
                        slidesPerView: 1,
                      },
                      // when window width is >= 768px
                      768: {
                        //   width: 768,
                        slidesPerView: 2,
                      },
                    }}
                    modules={[Autoplay, Navigation]}
                    spaceBetween={0}
                    slidesPerView={2}
                    navigation={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {edges.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className={styless.slider_text}>
                            <h2>{item.title}</h2>
                            <Row
                              className={`${styless.tech_slider_inner} align-items-center ${styless.tech_sm_slide}`}
                            >
                              <Col lg={6}>
                                <div className={styless.image}>
                                  <Image
                                    style={{
                                      paddingLeft: "12px",
                                      borderRadius: "30px",
                                      paddingBottom: "23px",
                                      width: "100%",
                                      height: "100%",
                                    }}
                                    src={item.image}
                                    alt="image"
                                  />
                                </div>
                              </Col>
                              <Col lg={6}>
                                <div className={styless.content}>
                                  <p> {item.content} </p>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Technology;
