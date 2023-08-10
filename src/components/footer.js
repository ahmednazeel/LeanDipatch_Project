import React from "react";

import "../css/footer.css";
import "../css/commonly.css";
import { Container } from "react-bootstrap";
import logo from "../icons/footer-logo.svg";
import imgeApproved from "../images/approved.svg";
import imgInstall from '../icons/appStore.png'
import imgInstall_2 from '../icons/googlePlay.png'
import socialIcon from '../icons/face.png'
import socialIcon_2 from '../icons/youtube.png'
import socialIcon_3 from '../icons/popWhats.png'
import socialIcon_4 from '../icons/linked.png'
import socialIcon_5 from '../icons/ig.png'
import socialIcon_6 from '../icons/twitter.png'
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content d-flex justify-content-between">
          <div className="content-company p-5">
            <a className="logo" href="#">
              <img src={logo} width={200} alt="" />
            </a>
            <p className="fs_1-8 c-gray my-5">
              Lean Dispatcher is a simple, flexible and scalable online
              transport fleet management software.
            </p>
            <ul className="nav-item">
              <li className="position-relative c-gray fs-medium">
                Easily manage & automate your orders, trips, vehicles,
                operations and resources.
              </li>
              <li className="position-relative my-5 c-gray fs-medium">
                Issue your Bayan Naql waybill in 15 seconds!
              </li>
              <li className="position-relative c-gray fs-medium">
                Supporting 11 different currencies.
              </li>
            </ul>
            <div className="mb-4 pb-4 approved d-flex align-items-center text-center">
              <span className="fs_1-8 weight-500 c-primary">approved by :</span>
              <div>
                <img className="my-5" src={imgeApproved} width={200} />
              </div>
            </div>
            <button className="button">Experience it today</button>
          </div>

          <div className="footer-links">
            <ul className="page-sec">
              <li className="fs_2 c-secondary">Sitemap</li>
              <li>
                <a href="#" className="fs-medium mt-4 c-white">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="fs-medium mt-4 c-white">
                  features
                </a>
              </li>
              <li>
                <a href="#" className="fs-medium mt-4 c-white">
                  prices
                </a>
              </li>
              <li>
                <a href="#" className="fs-medium mt-4 c-white">
                  vaule
                </a>
              </li>
              <li>
                <a href="#" className="fs-medium mt-4 c-white">
                  media
                </a>
              </li>
              <li>
                <a href="#" className="fs-medium mt-4 c-white">
                  book a demo
                </a>
              </li>
              <li>
                <a href="#" className="fs-medium mt-4 c-white">
                  login
                </a>
              </li>
            </ul>
            <ul className="page-sec">
              <li className="fs_2 c-secondary">about us</li>
              <li>
                <a href="#" className="fs-medium mt-4 c-white">
                  Ertikaz Solutions
                </a>
              </li>
            </ul>
            <ul className="page-sec">
              <li className="fs_2 c-secondary">contact us</li>
              <li>
                <a href="#" className="fs-medium mt-4 c-white">
                  info@Ertikaz.tech
                </a>
              </li>
              <li>
                <a href="#" className="fs-medium mt-4 c-white">
                  sales@Ertikaz.tech
                </a>
              </li>
              <li>
                <a href="#" className="fs-medium mt-4 c-white">
                  +966 534 479 020
                </a>
              </li>
              <li>
                <a href="#" className="fs-medium mt-4 c-white">
                  +966 534 470 076
                </a>
              </li>
            </ul>
            <ul className="page-sec">
              <li className="fs_2 c-secondary">other links</li>
              <li>
                <a href="#" className="fs-medium mt-4 c-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="fs-medium mt-4 c-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <div className="install d-flex gap-3 flex-wrap align-items-center">
              <img src={imgInstall}/>
              <img src={imgInstall_2}/>
            </div>
            <div className="d-flex gap-3 align-items-center"> 
              <a href="">
              <img src={socialIcon}/>
              </a>
              <a href="">
              <img src={socialIcon_2}/>
              </a>
              <a href="">
              <img src={socialIcon_3}/>
              </a>
              <a href="">
              <img src={socialIcon_4}/>
              </a>
              <a href="">
              <img src={socialIcon_5}/>
              </a>
              <a href="">
              <img src={socialIcon_6}/>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
