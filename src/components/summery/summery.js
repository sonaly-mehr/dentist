import React, { Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import styles from "./styles.module.css";

const Summery = () => {
  return (
    <Fragment>
      <div className={styles.summery_section}>
        <div className="container">
          <div className={styles.summery_inner}>
            <Row className="align-items-center">
              <Col md={6}>
                <div className={styles.summery_text}>
                  <h2>Alshifa Healthcare Services.</h2>
                  <p>
                    Many patients from CIS, Africa and Middle East had a happy
                    travel experiences and medical journey with Alshifa
                    Healthcare Services. It's known as one of the trustworthy
                    company in the field of medical tourism in India.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <Image src="" alt="" />
                <div className={styles.summery_vid}>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/4-xxX_wQOOk?si=tETtXWgyKli4S8Vt"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Summery;
