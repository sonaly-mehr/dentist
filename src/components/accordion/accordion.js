"use client";
import React, { Fragment, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./styles.module.css";
const Accordionn = () => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div className={styles.question_section}>
        <div className="container">
          <div className={styles.question_title}>
            <h2 className="text-center">Treatment available for</h2>
            <p>
              Alshifa is connected with best dental centre’s which provide
              cutting-edge technology in dental implantations. They also provide
              Gentle, Simple, & Quick treatment with best results.
              <button onClick={() => setShow(!show)} className={styles.readmorebtn}>
                {show ? "" : "Read More..."}
              </button>
            </p>

            {show && (
              
              <div className="reademoretxt">
                <ul>
                  <li>Rapid Tooth Replacement: Gain permanent teeth in 2-3 days</li>
                  <li>
                  Quick Recovery: Resume normal eating within 72 hours post-procedure
                  </li>
                  <li>Easy and Painless: Simple process with minimal discomfort</li>
                  <li>
                  Easy and Painless: Simple process with minimal discomfort
                  </li>
                  <li>
                  Cost-Effective Solution: Eliminate the need for expensive bone grafting operations.
                  </li>
                  <li>
                  Diabetes-Friendly Implants: Successful dental implants for individuals with sugar and diabetes
                  </li>
                  <li>Smoker-Friendly: Implant success for chain smokers.</li>
                  <li>Infection-Free Assurance: No post-implant infections like peri-implantitis</li>
                </ul>

                <strong className="fs-5">Types of Dental Implants</strong>
                <ul>
                  <li>
                    <strong>Zygomatic implants:</strong> Attached to the jawbone around the zygoma bone
                  </li>
                  <li>
                    <strong>Basal Implants:</strong> <br />
                    -Single-unit implants with a linked abutment <br />
                    -Made of a biocompatible titanium alloy.
                  </li>
                  <li>
                    <strong>Basal Osseo integrated Implants (BOI):</strong> Designed for immediate loading after placement.
                  </li>
                  <li>
                    <strong>KOC Dental Implants:</strong> KOC® implants use high-fracture-resistant titanium.
                  </li>
                  <li>
                    <strong>BECES Implants-</strong> <br />
                    -Ideal for significantly resorbed ridges. <br />
                    -BECES® implants are instantly loaded and cortically anchored. <br />
                    -Made from a high-strength, biocompatible titanium alloy (Ti6Al4V).
                  </li>
                  <li>
                    <strong>Zirconia Crown & Bridge-</strong> <br />
                    -Zirconia bridges and crowns are considered high quality. <br />
                    -Known for durability, longevity, and aesthetic appeal compared to other types.
                  </li>
                </ul>

                <strong className="fs-5">Benefits of Dental Implants</strong>
                <ul>
                  <li>
                  <strong>Tooth Replacement:</strong> Dental implants substitute missing teeth for a natural and healthy alternative
                  </li>
                  <li>
                  <strong>Long-Lasting Solution:</strong> Implants offer a durable and ideal long-term fix for missing teeth.
                  </li>
                  <li>
                  <strong>Preventing Facial Changes:</strong> Dental implants help prevent facial muscles from drooping due to tooth loss, maintaining facial shape and a confident smile.
                  </li>
                  <li><strong>Preserving Healthy Bones:</strong> Implants contribute to the preservation of natural and healthy bones.</li>
                  <li><strong>Enhanced Comfort, Speech, and Appearance:</strong> Implants improve comfort, speech, and overall appearance</li>
                  <li>
                  <strong>Boosted Self-Confidence:</strong> Dental implants serve as an ideal tooth replacement, boosting self-confidence.
                  </li>
                  <li><strong>Improved Eating Experience:</strong> Implants enable individuals to enjoy a variety of foods of their choice.</li>
                </ul>
                <strong className="fs-5">Cost of Dental Implants</strong>
                <ul>
                  <li><strong>Qualified Specialists:</strong> Our licensed implant specialists follow American standards of sterilization during implant procedures.</li>
                <li><strong>Value for Money:</strong> Ensuring you get what you pay for is a top priority for us.</li>
                <li><strong>Transparent Pricing:</strong> The cost of dental implant therapy varies case by case, and the exact price is determined after a thorough evaluation by an expert.</li>
                <li><strong>Quality Assurance by Alshifa:</strong> Alshifa guarantees the best quality at an affordable price because our affiliated centers purchase directly from the original companies, ensuring authenticity.</li>
                </ul>

                <button onClick={() => setShow(!show)} className={styles.readmorebtn}>
                  {" "}
                  {show ? "Less" : ""}
                </button>
              </div>
            )}
          </div>
          <div className={styles.question_inner}>
            <Row>
              <Col md={6}>
                <div className="question_item">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Root Canal Treatment</Accordion.Header>
                      <Accordion.Body>
                        Two main endodontic procedures are pulp capping and root
                        canal therapy (RCT). Pulp capping involves keeping the
                        damaged pulp in its place, while root canal therapy
                        removes the affected pulp altogether.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Dental Implants:</Accordion.Header>
                      <Accordion.Body>
                        Dental implantations are metal teeth replacements that
                        settles into the jaw. They become part of your jawbone
                        which gives strong and natural-looking teeth.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>Smile Makeover:</Accordion.Header>
                      <Accordion.Body>
                        {`A smile makeover is done when person want to make their
                        appearance better with dental stuff like veneers and
                        teeth treatments. It's used in Hollywood to give
                        characters a cool look.`}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col md={6}>
                <div className="question_item">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Full Mouth Rehabilitation:
                      </Accordion.Header>
                      <Accordion.Body>
                        {` Full Mouth Rehabilitation enhances your smile's
                        appearance and fixes how you bite. Advanced technology
                        is applied to reshape and renew teeth, gums, and nearby
                        structures in the process of whole mouth rehabilitation.`}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Orthodontics:</Accordion.Header>
                      <Accordion.Body>
                        Orthodontics is a dental branch addressing the
                        diagnosis, prevention, treatment, and correction of
                        crooked teeth, misaligned jaws, and irregular bites. It
                        can also modify facial growth, often referred to as
                        dentofacial orthopaedics.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Accordionn;
