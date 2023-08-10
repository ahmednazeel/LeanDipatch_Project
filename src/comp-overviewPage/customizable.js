import React from "react";
import { customizableImg } from "../components/data";
import { Container } from "react-bootstrap";
import "../css/customizable.css"; // => css file
const Customizable = () => {
  return (
    <div className="p-section">
      <Container>
        <h1 className="text-center fs_3 c-primary heading-margin font-weight">
          Flexible and customizable <br />
          for your industry
        </h1>
        <div className="customizable-cards d-flex align-items-center gap-4 flex-wrap justify-content-center">
          {customizableImg.map((card, index) => {
            return (
              <div key={index} className="card">
                <img className="w-100 img-wrapper" src={card.ImgUrl} />
                <h3 className="card-text text-center p-3 c-white background-primary">
                  {card.text}
                </h3>
              </div>
            );
          })}
        </div>
        <div className="transport-management ">
          <h1 className="text-center fs_3 c-primary font-weight">
            The one transport fleet <br /> management software you need
          </h1>
          <p className="background-secondary rounded c-white fs_2 p-2 mx-auto">
            Turnkey solution for local & global transport companies
          </p>
        </div>
        <div className="transport-list">
          <ul className="nav-item">
            <li className="c-gray fs_1-8 mb-4 position-relative style-italic">
              Uplift customer experience
            </li>
            <li className="c-gray fs_1-8 mb-4 position-relative style-italic">
              Fast onboarding solution
            </li>
          </ul>
          <ul className="nav-item">
            <li className="c-gray fs_1-8 mb-4 position-relative style-italic">
              Immediate regional access to Saudi Arabia
            </li>
            <li className="c-gray fs_1-8 mb-4 position-relative style-italic">
              Digitalize your business
            </li>
          </ul>
          <ul className="nav-item">
            <li className="c-gray fs_1-8 mb-4 position-relative style-italic">
              Issue Bayan Naql in seconds
            </li>
            <li className="c-gray fs_1-8 mb-4 position-relative style-italic">
              Easily streamline & scale your ops
            </li>
          </ul>
          <ul className="nav-item">
            <li className="c-gray fs_1-8 mb-4 position-relative style-italic">
              Lower overheads & raise profits
            </li>
            <li className="c-gray fs_1-8 mb-4 position-relative style-italic">
              Flexibly integrate
            </li>
          </ul>
          <ul className="nav-item">
            <li className="c-gray fs_1-8 mb-4 position-relative style-italic">
              Excellent customer & support service
            </li>
            <li className="c-gray fs_1-8 mb-4 position-relative style-italic">
              Real-time fleet & performance tracking
            </li>
          </ul>
          <ul className="nav-item">
            <li className="c-gray fs_1-8 mb-4 position-relative style-italic">
              Make informed decisions
            </li>
            <li className="c-gray fs_1-8 mb-4 position-relative style-italic">
              Make informed decisions
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Customizable;
