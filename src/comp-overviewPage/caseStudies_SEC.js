import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import "../css/caseStudy.css";
import "../css/commonly.css";
import img_1 from "../images/image 23.svg";
import img_2 from "../images/image 24.svg";
import img_3 from "../images/image 25.svg";
import img_4 from "../images/image 26.svg";
import img_5 from "../images/AI_Image 3.svg";

const CaseStudySec = () => {
  return (
    <Container>
      <div className="case-content">
        <h1 className="c-primary text-center">Case Studies</h1>
        <div className="case-cards d-flex algin-items-center justify-content-center gap-5">
          <div className="card rounded">
            <img className="img-card mb-3" src={img_1} />
            <div className="p-4">
              <p className="c-secondary fs-medium font-weight">
                The One Logistics <span className="c-gray">|</span> Small
              </p>
              <p className="c-gary fs-medium font-weight mb-3 c-gray">
                The One Logistics is a company specializing in moving exotic
                luxury vehicles around the world by Sea, Air & Road.
              </p>
              <ul className="nav-item case-list-1">
                <li className="position-relative fs-medium font-weight mb-3 c-gray">
                  Manual fleet management.
                </li>
                <li className="position-relative fs-medium font-weight c-gray">
                  Manual invoicing.
                </li>
              </ul>
              <p className="c-secondary fs-medium font-weight mb-5">
                Our solution helped them
              </p>
              <ul className="case-list-2">
                <li className="position-relative fs-medium font-weight mb-3 c-gray">
                  Seamlessly manage the business, and raise efficiency.
                </li>
                <li className="position-relative fs-medium font-weight mb-3 c-gray">
                  Single platform that is perfectly in compliance with TGA &
                  ZATCA.
                </li>
                <li className="position-relative fs-medium font-weight mb-3 c-gray">
                  Digitalizing the business to fulfill and receiving more
                  business.
                </li>
                <li className="position-relative fs-medium font-weight mb-3 c-gray">
                  Improving the customer experience.
                </li>
                <li className="position-relative fs-medium font-weight mb-3 c-gray">
                  Eliminated fines and hassle with drivers by utilizing our
                  solution.
                </li>
              </ul>
              <button className="button background-primary c-white mx-auto">
                Experience it now
              </button>
            </div>
          </div>
          <div className="card rounded">
            <img className="img-card mb-3" src={img_2} />
            <div className="p-4">
              <p className="c-secondary fs-medium font-weight">
                The One Logistics <span className="c-gray">|</span> Small
              </p>
              <p className="c-gary fs-medium font-weight mb-3 c-gray">
                The One Logistics is a company specializing in moving exotic
                luxury vehicles around the world by Sea, Air & Road.
              </p>
              <ul className="nav-item case-list-1">
                <li className="position-relative fs-medium weight-500 mb-3 c-gray">
                  Manual fleet management.
                </li>
                <li className="position-relative fs-medium weight-500 c-gray">
                  Manual invoicing.
                </li>
              </ul>
              <p className="c-secondary fs-medium weight-500 mb-5">
                Our solution helped them
              </p>
              <ul className="case-list-2">
                <li className="position-relative fs-medium weight-500 mb-3 c-gray">
                  Seamlessly manage the business, and raise efficiency.
                </li>
                <li className="position-relative fs-medium weight-500 mb-3 c-gray">
                  Single platform that is perfectly in compliance with TGA &
                  ZATCA.
                </li>
                <li className="position-relative fs-medium weight-500 mb-3 c-gray">
                  Digitalizing the business to fulfill and receiving more
                  business.
                </li>
                <li className="position-relative fs-medium weight-500 mb-3 c-gray">
                  Improving the customer experience.
                </li>
                <li className="position-relative fs-medium weight-500 mb-3 c-gray">
                  Eliminated fines and hassle with drivers by utilizing our
                  solution.
                </li>
              </ul>
              <button className="button background-primary c-white mx-auto">
                Experience it now
              </button>
            </div>
          </div>
        </div>
        <h1 className="text-center m-0 mt-5 pt-5 mb-2 fs_2 c-primary weight-500">
          We are proud of our leading products in Saudi Arabia
          <br />
          that can be effectively utilized around the world
        </h1>
        <p className="text-center background-secondary rounded desc c-white fs-medium p-2 mx-auto">
          Turnkey solution for local & global transport companies
        </p>
        <div className="countries d-flex justify-content-center gap-3">
          <div className="shadow">
            <p className="mb-2 fs_3 c-gray weight-500 text-center">GCC</p>
            <div className="d-flex gap-3 justify-content-center">
              <div>
                <img src={img_5} />
                <p className="c-gray weight-500">
                  SAR ريال <br />
                  Saudi Arabia
                </p>
              </div>
              <div>
                <img src={img_5} />
                <p className="c-gray weight-500">
                  AMD ا.د <br /> Emirates
                </p>
              </div>
              <div>
                <img src={img_5} />
                <p className="c-gray weight-500">
                  OMN ريال <br />
                  Oman
                </p>
              </div>
            </div>
            <div className="d-flex gap-3 justify-content-center">
              <div>
                <img src={img_5} />
                <p className="c-gray weight-500">
                  SAR ريال <br />
                  Saudi Arabia
                </p>
              </div>
              <div>
                <img src={img_5} />
                <p className="c-gray weight-500">
                  AMD ا.د <br /> Emirates
                </p>
              </div>
              <div>
                <img src={img_5} />
                <p className="c-gray weight-500">
                  OMN ريال <br />
                  Oman
                </p>
              </div>
            </div>
          </div>
          <div className="shadow">
            <p className="mb-2 fs_3 c-gray weight-500 text-center">GCC</p>
            <div className="d-flex gap-3 justify-content-center">
              <div>
                <img src={img_5} />
                <p className="c-gray weight-500">
                  SAR ريال <br />
                  Saudi Arabia
                </p>
              </div>
              <div>
                <img src={img_5} />
                <p className="c-gray weight-500">
                  AMD ا.د <br /> Emirates
                </p>
              </div>
            </div>
          </div>
          <div className="shadow">
            <p className="mb-2 fs_3 c-gray weight-500 text-center">GCC</p>
            <div className="d-flex gap-3 justify-content-center">
              <div>
                <img src={img_5} />
                <p className="c-gray weight-500">
                  SAR ريال <br />
                  Saudi Arabia
                </p>
              </div>
              <div>
                <img src={img_5} />
                <p className="c-gray weight-500">
                  AMD ا.د <br /> Emirates
                </p>
              </div>
              <div>
                <img src={img_5} />
                <p className="c-gray weight-500">
                  OMN ريال <br />
                  Oman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CaseStudySec;
