import React from "react";
import Plans from "./plans";

import { Accordion, Container } from "react-bootstrap";
import imgBanner from "../images/cross-sell.png";
import imgBanner_2 from "../images/Mask group.svg";
import "../css/price.css";
const Price_Sec = () => {
  return (
    <div id="price">
      <Plans />
      <div className="price-banner background-secondary">
        <Container>
          <div className="banner-content d-flex align-items-center justify-content-between">
            <div className="banner-one">
              <img src={imgBanner} />
            </div>
            <div className="banner-one">
              <h4 className="c-white fs_3 mb-3">
                Looking for an{" "}
                <span className="c-primary">online e-invoicing</span> platform?
              </h4>
              <p className="c-white fs-medium font-weight">
                Issue, manage, send your ZATCA approved e-Invoices and calculate
                your tax in seconds.
              </p>
              <button className="button background-primary">
                Contact us for a quote
              </button>
            </div>
          </div>
        </Container>
      </div>
      <div className="faq">
        <h1 className="text-center my-5">FAQ</h1>
        <Container>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h4 className="fs_1-8">
                  Copy Can you you customize the temple of your invoices?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="c-gray fs-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h4 className="fs_1-8">
                  Can you you customize the temple of your invoices?{" "}
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="c-gray fs-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
      <div className="contact background-primary p-4">
        <Container>
          <h4 className="fs_3 c-white text-center my-5">
            Subscribe to our newsletter for the latest news & updates
          </h4>
          <div className="form">
            <input type="text" placeholder="Your email address" />
            <input type="submit" value="submit" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Price_Sec;
