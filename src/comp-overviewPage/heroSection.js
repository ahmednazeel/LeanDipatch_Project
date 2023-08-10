import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../css/commonly.css";
import "../css/heroOverviewPage.css";
import imgeApproved from "../images/approved.svg";
import { clientsIMG } from "../components/data";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const HeroSection = ({ children }) => {
  const [counterOn,setCounterOn] = useState(false)
  return (
    <>
      <div className="hero-page background-primary d-flex align-items-center">
        <Container className="container">
          <div className="hero-content d-flex justify-content-center align-items-center gap-4">
            <div className="hero-details">
              <p className="c-white fs_2 weight-500 mb-5">
                Lean Dispatcher is a simple, flexible and scalable online
                transport fleet management software
              </p>
              <ul className=" nav-item">
                <li className="c-white fs_1-8 mb-4 position-relative style-italic">
                  Easily manage & automate your orders, trips, vehicles,
                  operations and resources.
                </li>
                <li className="c-white fs_1-8 mb-4 position-relative style-italic">
                  Issue your Bayan Naql waybill in 15 seconds!
                </li>
                <li className="c-white fs_1-8 mb-6 position-relative style-italic">
                  Supporting 11 different currencies.
                </li>
              </ul>
              <button className="button background-secondary mt-5">
                book a demo
              </button>
            </div>
            <div className="video-wrapper">{children}</div>
          </div>
        </Container>
      </div>
      <ScrollTrigger 
        onEnter={()=>setCounterOn(true)}
        onExit={()=> setCounterOn(false)}
      >
          <Container>
            <div className="counter-div py-5 my-5">
              <p className="c-primary fs_1-8 mb-4 text-center">
                Digitally revolutionizing the end-to-end supply chain operations
                management
              </p>
              <div className="countr d-flex justify-content-center align-items-center mx-auto text-center">
                <span>
                  <span className="count-number c-primary">{counterOn&&<CountUp start={0} end={70} duration={2}/>}k</span>
                  <p className="fs_1-8 weight-500 c-gray">Orders</p>
                </span>
                <span>
                  <span className="count-number c-primary">{counterOn&&<CountUp start={0} end={7.8} duration={3}/>}k</span>
                  <p className="fs_1-8 weight-500 c-gray">trips</p>
                </span>
                <span>
                  <span className="count-number c-primary">{counterOn&&<CountUp start={0} end={3.8} duration={4}/>}k</span>
                  <p className="fs_1-8 weight-500 c-gray">vehicles</p>
                </span>
                <span>
                  <span className="count-number c-primary">{counterOn&&<CountUp start={0} end={1.2} duration={5}/>}k</span>
                  <p className="fs_1-8 weight-500 c-gray">why bills issued</p>
                </span>
              </div>
            </div>
            <div className="mb-4 pb-4 approved d-flex justify-content-center align-items-center mx-auto text-center">
              <span className="fs_1-8 weight-500 c-primary">approved by :</span>
              <div>
                <img className="w-100" src={imgeApproved} />
              </div>
            </div>
          </Container>
      </ScrollTrigger>
      <div className="px-2 py-4 my-5 text-center background-primary fs_1-8 c-white">
        Our Partners In Success
      </div>
      <div className="slider-wrapper">
        <Container>
          <div className="slider position-relative overflow-x-auto">
            <div className="Slider-clients d-flex gap-5 align-items-center ">
              {clientsIMG.map((client) => {
                return (
                  <div className="img-slide-wrapper">
                    <img className="img-clients transition_05" src={client} />
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeroSection;
