import React, { Fragment } from "react";
import styles from "./styles.module.css";

const Contact = () => {
  return (
    <Fragment>
      <div className={styles.contact_section}>
        <div className="container">
          <div className={styles.contact_area}>
            <div className={styles.contact_list}>
              <ul className="d-flex align-items-center justify-content-around">
                <li className="d-none d-lg-block">
                  <p>
                    GET <span>free</span> ASSISTANCE
                  </p>
                </li>
                <li className="d-none d-lg-block">
                  <p style={{ color: "#fff", fontWeight: "bold" }}>
                    {" "}
                    Support@alshifahealthcareservices.com
                  </p>
                </li>
                <li className="d-none d-lg-block">
                  <a href="tel:+91- 7669 900 900" style={{ fontWeight: "bold" }}>
                    {" "}
                    +91- 7669 900 900
                  </a>
                </li>
                <li className="d-block d-lg-none">
                  <a href="#">ENQUIRE NOW</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
