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
              A bone marrow transplant is a special medical treatment for
              diseases. There were once thought that this disease is impossible
              to cure. It started working well in 1986 and has been used for
              conditions like leukemia, anemia, lymphomas, and certain cancers.
              <button
                onClick={() => setShow(!show)}
                className={styles.readmorebtn}
              >
                {show ? "" : "Read More..."}
              </button>
            </p>
            {show && (
              <div className={styles.reademoretxt}>
                <strong>
                There are 2 types of Bone Marrow Transplant exist:
                </strong>
                <div className={styles.read_txt_list}>
                  <ul>
                    <li>
                    - One uses the patient's own bone marrow,
                    </li>
                    <li>
                    - Other gets healthy bone marrow cells from a donor. The donor can be a family member or someone not related but found through registries.
                    </li>
                    <p>A blood test called HLA typing is done to see how well the patient and donor match. This helps find the best donor for the transplant.</p>
                    <p>You can contact us through email or WhatsApp, to take advice from top doctors or a second opinion. We can help to set up appointments with experienced doctors and to provide best medical assistance services.</p>
                    <p>The transplant process involves taking bone marrow cells from the donor. During treatment, patient receives high-dose chemo-radiotherapy. After this process we let the donated cells start working. We always explain the whole process that's easy to understand.</p>
                  </ul>
                </div>
                {/* <strong>
                  We provide all of the following bone marrow transplant
                  procedures
                </strong>
                <p>
                  Allogeneic and autologous transplants are the two most common
                  forms, depending on who provides the bone marrow or stem cells
                </p>
                <strong>Autologous bone marrow transplant: </strong>{" "}
                <span style={{ marginBottom: "10px", display: "inline-block" }}>
                  The patient's own bone marrow is used to harvest healthy bone
                  marrow cells.
                </span>
                <br />
                <strong>Allogenic bone marrow transplant: </strong>{" "}
                <span>
                  Bone marrow cells are obtained from a related donor.{" "}
                </span>
                <div className={styles.read_txt_list}>
                  <ul>
                    <li>
                      - It can be matched related, in which case the donor is a
                      sibling or other HLA-matched relative.
                    </li>
                    <li>
                      - Matched Unrelated, when the donor is typically found
                      from one of the numerous national or international
                      registries and is not a family of the patient.
                    </li>
                    <li>
                      - In a partially matched related case, the donor comes
                      from the patient's family (haploidentical)
                    </li>
                  </ul>
                </div>
                <strong style={{ marginTop: "10px", display: "inline-block" }}>
                  How does HLA typing work?{" "}
                </strong>
                <br />
                <p>
                  HLA typing is just blood test that is administered to patients
                  and potential donors to determine how closely the recipient
                  and potential donors match each other. This makes it feasible
                  to choose the ideal donor for an allogeneic transplant.
                </p>
                <strong>
                  How can I consult top doctors for Bone Marrow Transplant for
                  second opinion or medical advice?
                </strong>
                <br />
                <div className={styles.second_list}>
                  <ul>
                    <li>
                      - Contact us by sending your information via Email,
                      WhatsApp etc
                    </li>
                    <li>
                      - Get appointment with doctors for bone marrow
                      transplants.
                    </li>
                    <li>
                      - Get in touch with Marlin Medical Assistance Services'
                      staffs
                    </li>
                  </ul>
                </div>
                <strong style={{ marginTop: "10px", display: "inline-block" }}>
                  The procedure of bone marrow transplant
                </strong>
                <p>
                  The first step is the extraction of the bone marrow cells from
                  the donor by making punctures under general anesthesia. In the
                  second step, pre-engraftment is done in which high-dose
                  chemo-radiotherapy is done. Here the blood stem cells are
                  destroyed and the normal blood cells are not produced. The
                  patient has to be kept in a clean room at this time. The third
                  step is post-engraftment. Here the donated stem cell will
                  start functioning. The patient can come out of critical
                  isolation at this time.
                </p>
                <strong>Bone Marrow Transplant can be done when;</strong> */}
                <strong>Conditions in which Bone Marrow Transplant is required:</strong>
                
                <button
                  onClick={() => setShow(!show)}
                  className={styles.readmorebtn}
                >
                  {" "}
                  <br></br>
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
                      <Accordion.Header>Thalassemia</Accordion.Header>
                      <Accordion.Body>
                        Thalassemia is a blood condition where body face problem
                        in making enough hemoglobin. Hemoglobin is required to
                        carry oxygen in our blood. This treatment line can help
                        in making good blood cells and fix the anemia problem.
                        Family members are generally the right person to donate
                        healthy marrow. Getting treatment early can make a big
                        difference in case of thalassemia to feel better.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Multiple Myeloma </Accordion.Header>
                      <Accordion.Body>
                        Multiple myeloma directly messes up the bone marrow. It
                        affects plasma cells and making them act weird. These
                        abnormal cells produce proteins and crowd the bone
                        marrow. It directly cause bone and immune system issues.
                        In Multiple myeloma treatment stem cell transplant is
                        one of the option. In this, bad marrow gets replaced
                        with good cells. Family members are generally the right
                        person to donate healthy marrow. Regular check-ups and
                        early treatment are key to tackling this cancer and
                        improving life quality.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Leukemias</Accordion.Header>
                      <Accordion.Body>
                        Leukemia is a cancer that cause issue in the blood and
                        bone marrow of the person. In this condition immature
                        white cells created and cause problems. Due to which
                        bone marrow gets crowded and makes it hard for healthy
                        cells to do their job. After this it messed up with the
                        blood and it weakens the immune system of human being.
                        Treatments like targeted therapy, chemotherapy or a
                        transplant might be needed to replace bad marrow with
                        good cells.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col md={6}>
                <div className="question_item">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Sickle Cell Anaemia </Accordion.Header>
                      <Accordion.Body>
                        Sickle cell anemia is when your blood cells are in a
                        defective shape and causing trouble. Due to which bone
                        marrow area works extra hard to fix it. This condition
                        can cause anaemia, pain & direct harm to organs. in this
                        situation, doors might suggest to go for bone marrow
                        transplant, to switch bad cells with good ones. Family
                        members are generally the right person to donate healthy
                        marrow. For this disease it's a cure if planning done
                        correctly.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        Aplastic Anaemia (Bone Marrow Failure){" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        Aplastic anemia will happen when bone marrow unable to
                        make enough blood cells. This condition can cause,
                        infection and bleeding issues. The bone marrow becomes
                        empty and unable to work right. In such cases bone
                        marrow transplant is one of the best option of
                        treatment. From this procedure bad cells changes to the
                        healthy ones. Daily check-ups and routine are very
                        important to manage aplastic anemia.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>Neuroblastoma </Accordion.Header>
                      <Accordion.Body>
                        Neuroblastoma generally affects young kids. It type of
                        cancer starts in the adrenal glands. This condition is
                        not directly related to bone marrow but it can spread
                        over there.it can sometimes spread there. This cancer
                        comes from nerve tissue and might cause belly pain and
                        skin color changes. Serious cases of neuroblastoma
                        affects bone marrow, which leads to infections or
                        anaemia.
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
