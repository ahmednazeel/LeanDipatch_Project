import React from "react";
import { Container } from "react-bootstrap";
import "../css/heroSec_value.css";
import img from "../images/steps.svg";
import imgeApproved from "../images/approved.svg";

const Hero_Sec = () => {
  return (
    <div className="value-page">
      <div className="hero-page background-primary">
        <Container className="container">
          <div className="hero-content justify-content-center text-align d-flex align-items-center gap-4 text-center">
            <div className="hero-details">
              <p className="c-white fs_3 weight-500 mb-5">
                Lean Dispatcher’s Value
              </p>
              <p className="fs_1-8 c-white">
                A fast & dynamic online transport fleet management software that{" "}
                <span className="c-secondary">
                  issues your Bayan Naql Waybill in 15 seconds!
                </span>
              </p>
              <button className="button background-secondary mt-5">
                book a demo
              </button>
            </div>
          </div>
        </Container>
      </div>
      <h2 className="my-5 fs_3 text-center c-primary">
        Elevating your end-to-end <br />
        supply chain process
      </h2>
      <div className="text-center">
        <p className="fs_1-8 m-0 c-secondary">
          When you make promises to your customers
        </p>
        <p className="fs_1-8 c-gray">
          <span className="c-primary">Lean Dispatcher,</span> the premiere
          online transport fleet management software,
          <br />
          ensures you give the best customer experience to all stakeholders and
          deliver on time.
        </p>
      </div>
      <Container>
        <div>
          <img src={img} className="w-100 my-5" />
        </div>
        <div className="gap-3 pb-4 approved d-flex justify-content-center align-items-center mx-auto text-center">
          <span className="fs_1-8 weight-500 c-primary">approved by :</span>
          <div>
            <img className="w-100" src={imgeApproved} />
          </div>
        </div>
      </Container>
      <div className="justify-content-center background-primary text-align d-flex align-items-center gap-4 text-center hero-page banner-page">
        <div className="hero-details">
          <p className="c-white fs_3 weight-500">Lean Dispatcher</p>
          <p className="fs_1-8 c-secondary m-0">Empowering on time delivery</p>
          <p className="fs_1-8 c-white">
            Lean Dispatcher’s tracking and online capabilities allow transport
            companies to be digitized, agile, and efficient.
          </p>
          <p className="background-secondary rounded c-white fs_2 p-2 mx-auto">
            From order placing, sealing, delivering to signing for it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero_Sec;
