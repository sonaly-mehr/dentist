"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import logo from "../../assets/images/logo.jpg";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import { FaCheckCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import hero_img from "../../assets/images/hero_img-removebg-preview.png";
import whatsapp from "../../assets/images/whatsapp.png";
import { ToastContainer, toast } from "react-toastify";
import styles from "./styles.module.css";

// mohi
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
// mohi end

const Navbar = () => {
  const initialValue = { name: "", phone: "" };

  const [formValue, setFormValue] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setFormError(validator(formValue));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      toast.success("From Submit success");
    }
  }, [formError, isSubmit]);

  const validator = (value) => {
    const error = {};

    if (!value.phone) {
      error.phone = "Phone is required";
    } else if (!value.name) {
      error.name = "Name is required !";
    }

    return error;
  };

  // mohi start
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ecxr69",
        "template_x4cu60k",
        form.current,
        "QXFjF1nF8T8wdE655"
      )
      .then(
        (result) => {
          console.log(result.text, "hello");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Mohi end

  return (
    <Fragment>
      <div className={styles.navbar_section}>
        <div className={styles.navbar_wrapper}>
          <div className="container">
            <div className={styles.navbar_inner}>
              <div className={styles.logo_wrapper}>
                <div>
                  <div className={styles.logo}>
                    <Image
                      style={{ borderRadius: "12px" }}
                      src={logo}
                      alt="logo"
                    />
                  </div>
                </div>
                <div className={styles.nav_logos}>
                  <Image
                    src={logo3}
                    alt="hero image"
                    quality={100}
                    unoptimized
                  />
                  <Image
                    src={logo4}
                    alt="hero image"
                    quality={100}
                    unoptimized
                  />
                  <Image
                    src={logo2}
                    alt="hero image"
                    quality={100}
                    unoptimized
                  />
                </div>
              </div>
              <div className={styles.phone}>
                <a href="tel:+91- 7669 900 900"> +91- 7669 900 900</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.hero_section}>
            <div className={styles.hero_section_inner}>
              <Row className="align-items-center">
                <Col md={8}>
                  <div className={styles.hero_content}>
                    <Row className="align-items-center">
                      <Col md={5}>
                        <div className="hero_image">
                          <Image
                            src={hero_img}
                            alt="hero image"
                            quality={100}
                            unoptimized
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className={styles.helo_right_content}>
                          <h4> Dental Institute: </h4>
                          <p>
                          Alshifa Healthcare Services is associated with number of Dentists, Orthodontists and Implantologist for Dental issues. They are equipped with advanced technology, and modern amenities. 
                          </p>
                          <div className={styles.h_list}>
                            <ul>
                              <li>
                                {" "}
                                <FaCheckCircle className={styles.circle} />{" "}
                                They have over <strong>30+</strong> specialized dentists and Orthodontists
                              </li>
                              <li>
                                <FaCheckCircle className={styles.circle} />
                                Boasting <strong>20+</strong> years of experience
                              </li>
                              <li>
                                <FaCheckCircle className={styles.circle} />
                                Successfully done <strong>100000+</strong> dental surgeries
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                      <Col md={1}></Col>
                    </Row>
                  </div>
                </Col>
                <Col md={4} className="text-end">
                  <div className={styles.hero_form_section}>
                    <div className={styles.hero_fm_title}>
                      <p>GET A CALL BACK FROM OUR HEALTH ADVISOR</p>
                    </div>
                    {/* <form onSubmit={handelSubmit}>
                      <input
                        type="text"
                        name="name"
                        onChange={handelChange}
                        value={formValue.name}
                        placeholder="Name*"
                        className={styles.input}
                      />
                      <input
                        type="text"
                        name="phone"
                        onChange={handelChange}
                        value={formValue.phone}
                        placeholder="Phone*"
                        className={styles.input}
                      />
                      <input type="email" placeholder="Email" className={styles.input}/>
                      <textarea
                        rows={3}
                        placeholder="Write your query (Optional)"
                        className={styles.textarea}
                      ></textarea>
                      <button className={styles}="hero_submit_btn">Submit</button>
                      <div className={styles}="fm_text">
                        <p style={{ marginBottom: "5px" }}>
                          By clicking you agree to our T&Cs
                        </p>
                        <input defaultChecked={true} type="checkbox" className={styles.input}/>{" "}
                        <span>
                          Get Updates on Whatsapp{" "}
                          <a href="tel:+91- 8984 900 900">
                            {" "}
                            <img
                              width="25px"
                              height="25px"
                              src={whatsapp}
                              alt=""
                            />
                          </a>{" "}
                        </span>
                        <p>
                          {" "}
                          <span>
                            {" "}
                            <FaInfoCircle className={styles}="infoIcon" />{" "}
                          </span>{" "}
                          We will never share your personal info
                        </p>
                      </div>
                    </form> */}
                    {/* <form 
                     action="https://formsubmit.co/abir.opediatech@gmail.com"
                     method="POST"
                     target="_blank"
                   >
                      <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        className={styles.input}
                      />
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone*"
                        className={styles.input}
                      />
                      <input type="email" placeholder="Email" name="email" className={styles.input}/>
                      <textarea
                        rows={3}
                        name="sms"
                        placeholder="Write your query (Optional)"
                        className={styles.textarea}
                      ></textarea>
                      <button className={styles}="hero_submit_btn">Submit</button>
                      <div className={styles}="fm_text">
                        <p style={{ marginBottom: "5px" }}>
                          By clicking you agree to our T&Cs
                        </p>
                        <input defaultChecked={true} type="checkbox" className={styles.input}/>{" "}
                        <span>
                          Get Updates on Whatsapp{" "}
                          <a href="tel:+91- 8984 900 900">
                            {" "}
                            <img
                              width="25px"
                              height="25px"
                              src={whatsapp}
                              alt=""
                            />
                          </a>{" "}
                        </span>
                        <p>
                          {" "}
                          <span>
                            {" "}
                            <FaInfoCircle className={styles}="infoIcon" />{" "}
                          </span>{" "}
                          We will never share your personal info
                        </p>
                      </div>
                    </form> */}

                    {/* mohi start */}
                    <form ref={form} onSubmit={sendEmail}>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Name*"
                        required
                        className={styles.input}
                      />
                      <input
                        type="text"
                        name="user_phone"
                        placeholder="Phone*"
                        required
                        className={styles.input}
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        name="user_email"
                        required
                        className={styles.input}
                      />
                      <textarea
                        rows={3}
                        name="message"
                        placeholder="Write your query (Optional)"
                        className={styles.textarea}
                      ></textarea>
                      <button className="hero_submit_btn" type="submit">
                        Submit
                      </button>
                      <div className={styles.fm_text}>
                        <p style={{ marginBottom: "5px" }}>
                          By clicking you agree to our T&Cs
                        </p>
                        <input
                          defaultChecked={true}
                          type="checkbox"
                          className={styles.input}
                        />{" "}
                        <span>
                          Get Updates on Whatsapp{" "}
                          <a href="https://wa.me/917669900900">
                            {" "}
                            <Image
                              width={25}
                              height={25}
                              src={whatsapp}
                              alt=""
                            />
                          </a>{" "}
                        </span>
                        <p>
                          {" "}
                          <span>
                            {" "}
                            <FaInfoCircle className={styles.infoIcon} />{" "}
                          </span>{" "}
                          We will never share your personal info
                        </p>
                      </div>
                    </form>
                    {/* mohi end */}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </Fragment>
  );
};

export default Navbar;
