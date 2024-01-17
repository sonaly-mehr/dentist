"use client";
import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { doctor } from "./doctorApi";
import Image from "next/image";
import styless from "./styles.module.css";

const DoctorList = () => {
  return (
    <Fragment>
      <div className={styless.doctor_section}>
        <div className="container-fluid">
          <div className={styless.doctor_area}>
            <Row>
              <Col>
                <div className={`${styless.doctor_title} text-center`}>
                  <h2>CONSULT OUR BONE MARROW TRANSPLANT SPECIALISTS</h2>
                  <p>
                    Consult the best Hemato-Oncologist at the chain of hospitals
                    that Marlin is affiliated with for blood and bone marrow
                    related problems.
                  </p>
                </div>
              </Col>
            </Row>

            <div className={styless.doctor_list_section}>
              <Swiper
                modules={[Pagination, Autoplay, FreeMode]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
                freeMode={true}
                spaceBetween={30}
                slidesPerView={6}
                slidesPerGroup={1}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {doctor.map((doc) => {
                  const { id, name, image, title, hospital_name } = doc;
                  return (
                    <SwiperSlide key={id}>
                      <div className={styless.doctro_slider_content}>
                        <Image
                          style={{ width: "100%", height: "250px" }}
                          src={image}
                          alt=""
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                        <div className={styless.s_body}>
                          <h4>{name}</h4>
                          <p>{title}</p>
                          <p>
                            <strong>{hospital_name}</strong>
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DoctorList;
