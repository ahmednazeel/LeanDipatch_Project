import React from "react";
import "../css/cards_value.css";
import { Container } from "react-bootstrap";
import imgCard from "../images/image 31.svg";
import imgCard_2 from "../images/image 32.svg";
import imgCard_3 from "../images/image 33.svg";
import imgCard_4 from "../images/image 34.svg";
import imgCard_5 from "../images/image 35.svg";
const Cards_value = () => {
  return (
    <Container>
      <div className="cards-value">
        <div className="card-wrapper">
          <div className="top-banner background-primary d-flex align-items-center justify-content-space">
            <p className="fs-medium c-white">
              Google Map’s AI powered route optimization
            </p>
            <button className="button background-secondary">book a demo</button>
          </div>

          <div className="card">
            <div className="img-wrapper">
              <img src={imgCard} />
            </div>

            <div>
              <div>
                <h3 className="c-primary fs_1-8 mb-4">Optimizing</h3>
                <p className="fs-medium c-gray">
                  AI powered routing optimizes thousands of routes in minutes to
                  produce accurate ETAs for your drivers
                </p>
              </div>
              <div>
                <h3 className="c-primary fs_1-8 mb-4">Combining</h3>
                <p className="fs-medium c-gray">
                  Seamlessly combine dynamic routing with manual adjustments in
                  a single session.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className="c-primary fs_1-8 mb-4">Machine Learning</h3>
                <p className="fs-medium c-gray">
                  The routing engine improves every day as machine learning
                  gathers data about route, driver efficiency, and service times
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="top-banner background-primary d-flex align-items-center justify-content-space">
            <p className="fs-medium c-white">
              Google Map’s AI powered route optimization
            </p>
            <button className="button background-secondary">book a demo</button>
          </div>

          <div className="card">
            <div className="img-wrapper">
              <img src={imgCard_2} />
            </div>
            <div>
              <div>
                <h3 className="c-primary fs_1-8 mb-4">Schedule Prompts</h3>
                <p className="fs-medium c-gray">
                  AI powered routing optimizes thousands of routes in minutes to
                  produce accurate ETAs for your drivers
                </p>
              </div>
              <div>
                <h3 className="c-primary fs_1-8 mb-4">Automated Comms</h3>
                <p className="fs-medium c-gray">
                  On the day of delivery, customizable automated communications
                  allow customers to receive info about their delivery time,
                  bill and waybill via text messages.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className="c-primary fs_1-8 mb-4">Rating Drivers</h3>
                <p className="fs-medium c-gray">
                  Allow customers to rate the driver to ensure an excellent
                  experience from order to delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="top-banner background-primary d-flex align-items-center justify-content-space">
            <p className="fs-medium c-white">
              Google Map’s AI powered route optimization
            </p>
            <button className="button background-secondary">book a demo</button>
          </div>

          <div className="card">
            <div className="img-wrapper">
              <img src={imgCard_4} />
            </div>

            <div>
              <div>
                <h3 className="c-primary fs_1-8 mb-4">Dashboard</h3>
                <p className="fs-medium c-gray">
                  View every aspect of your operation in real time on a single
                  screen with the high level delivery data.
                </p>
              </div>
              <div>
                <h3 className="c-primary fs_1-8 mb-4">Visual Data</h3>
                <p className="fs-medium c-gray">
                  Data is summarized in easy-to-read graphics, giving
                  dispatchers the ability to instantly drill down to full
                  details for individual service units, routes, and deliveries.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className="c-primary fs_1-8 mb-4">Know More</h3>
                <p className="fs-medium c-gray">
                  Predict operational issues before they occur and take action
                  accordingly to prevent them.
                </p>
              </div>
              <div>
                <h3 className="c-primary fs_1-8 mb-4">Media Formats</h3>
                <p className="fs-medium c-gray">
                  All trip data is recorded for review in many formats such as
                  photos, voice notes, videos recording, and signatures
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="top-banner background-primary d-flex align-items-center justify-content-space">
            <p className="fs-medium c-white">
              Google Map’s AI powered route optimization
            </p>
            <button className="button background-secondary">book a demo</button>
          </div>

          <div className="card">
            <div className="img-wrapper">
              <img src={imgCard_3} />
            </div>

            <div>
              <div>
                <h3 className="c-primary fs_1-8 mb-4">Seemless Comms</h3>
                <p className="fs-medium c-gray">
                  The Lean Dispatcher app provides instant seamless
                  communication between customers, drivers and dispatchers.
                </p>
              </div>
              <div>
                <h3 className="c-primary fs_1-8 mb-4">App Availability</h3>
                <p className="fs-medium c-gray">
                  The Lean Dispatcher app is available on Android & iOS.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className="c-primary fs_1-8 mb-4">Trip Data</h3>
                <p className="fs-medium c-gray">
                  Drivers can check on items delivered, write notes about trip
                  difficulties, take photos, gather signatures, and upload
                  everything to the cloud so it’s archived and instantly
                  available to dispatchers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="top-banner background-primary d-flex align-items-center justify-content-space">
            <p className="fs-medium c-white">
              Google Map’s AI powered route optimization
            </p>
            <button className="button background-secondary">book a demo</button>
          </div>

          <div className="card">
            <div className="img-wrapper">
              <img src={imgCard_5} />
            </div>

            <div>
              <div>
                <h3 className="c-primary fs_1-8 mb-4">Centralized</h3>
                <p className="fs-medium c-gray">
                  All of the data generated by Lean Dispatcher is centralized,
                  so it can instantly be reported and analyzed.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className="c-primary fs_1-8 mb-4">Reporting</h3>
                <p className="fs-medium c-gray">
                  Fine tune your operations by analyzing data from built-in
                  reports. You can also create custom reports to capture orders
                  and trips from real-time data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cards_value;
