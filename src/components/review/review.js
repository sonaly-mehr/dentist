"use client"
import React, { Fragment } from "react";
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import styless from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css/pagination";

const Review = () => {
    return(
        <Fragment>

            <div className={styless.review_section}>
                <div className="container">
                    <div className={styless.review_title}>
                        <h2>Real Patients, Real Stories</h2>
                    </div>
                    <div className={styless.review_inner}>
                        <div className={styless.review_bottom}>
                            <Row>
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
                              }}
                            freeMode={true}
                            spaceBetween={30}
                            slidesPerView={4}
                            slidesPerGroup={4}
                            pagination={{ clickable: true }}
                            
                            // autoplay={{
                            //     delay: 2000,
                            //     disableOnInteraction: false
                            // }}
                            loop={true}
                            
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide> 
                                <iframe height="200px" width="100%" style={{ borderRadius:"10px" }} src="https://www.youtube.com/embed/dsoNgcsypfM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                {/* <p>Liver Cirrhosis Treatment Through Living Donor Liver Transplant</p> */}
                            </SwiperSlide>  
                            <SwiperSlide> 
                                <iframe height="200px" width="100%" style={{ borderRadius:"10px" }} src="https://www.youtube.com/embed/-qYz87nS6LU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                {/* <p>Aparna - Recovering from Acute Liver Failure | Max Saket</p> */}
                            </SwiperSlide>  
                            <SwiperSlide>  
                                <iframe height="200px" width="100%" style={{ borderRadius:"10px" }} src="https://www.youtube.com/embed/q9HlIDuaL7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                {/* <p>Chronic Liver Failure Treatment | Liver Disease Treatment</p> */}
                            </SwiperSlide>  
                            <SwiperSlide>  
                                <iframe height="200px" width="100%" style={{ borderRadius:"10px" }} src="https://www.youtube.com/embed/RoQgek0i6v0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                {/* <p>Liver Transplant: What You Need To Know</p> */}
                            </SwiperSlide> 
                            <SwiperSlide>  
                                <iframe height="200px" width="100%" style={{ borderRadius:"10px" }} src="https://www.youtube.com/embed/0RIX5OX-ZC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                {/* <p>Chronic Liver Failure Treatment | Liver Disease Treatment</p> */}
                            </SwiperSlide>  
                            <SwiperSlide>  
                                <iframe height="200px" width="100%" style={{ borderRadius:"10px" }} src="https://www.youtube.com/embed/12GtCFd-PFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                {/* <p>Liver Transplant: What You Need To Know</p> */}
                            </SwiperSlide>   
                            <SwiperSlide>  
                                <iframe height="200px" width="100%" style={{ borderRadius:"10px" }} src="https://www.youtube.com/embed/IQXHlT_QtyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                {/* <p>Liver Transplant: What You Need To Know</p> */}
                            </SwiperSlide>   
                         </Swiper>
                               
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Review