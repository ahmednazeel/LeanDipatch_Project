import React from "react";
import "../css/header.css"; // Css_File
import "../css/commonly.css"; // Css_File
import logo from "../icons/logo_site.svg";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import saudi_arabia from "../images/saudi arabia.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const handleClick = () => {
    const list = document.querySelector(".nav-list");
    list.classList.toggle("show");
  };
  // const handleLink = e =>{
  //   e.preventDefault();
  //   window.location = "/"
  // }
  return (
    <>
      <header className="header shadow-sm">
        <div className="phone-contact">
          <span className="d-flex mx-auto text-center align-items-center">
            <FontAwesomeIcon
              className="icon-number fs-medium c-secondary"
              icon={faPhone}
            />
            <a href="#" className="text-white position-relative fs-medium ">
              +966 534 470 076
            </a>
            <button className="transform-language border-none background-primary">
              <img src={saudi_arabia} width={25} alt="" />
            </button>
          </span>
        </div>

        <div className="container-fluid container-header">
          <div className="header-content d-flex justify-content-between align-items-center">
            <div className="logo-wrapper">
              <a className="logo" href="#">
                <img src={logo} width={100} alt="" />
              </a>
            </div>
            <ul className="nav-list d-flex gap-5 p-3 transition_05">
              <li>
                <NavLink to="/">
                  <span className="fs-medium c-gray weight-500 overview">
                    overview
                  </span>
                </NavLink>
              </li>
              <li>
                <a href="#features">
                  <span className="fs-medium c-gray weight-500">features</span>
                </a>
              </li>
              <li>
                <a href="#price">
                  <span className="fs-medium c-gray weight-500">prices</span>
                </a>
              </li>
              <li>
                <NavLink to="/value">
                  <span className="fs-medium c-gray weight-500">value</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/media">
                  <span className="fs-medium c-gray weight-500">media</span>
                </NavLink>
              </li>

              <div className="login-booking-links d-flex gap-3 align-items-center show-small-device">
                <NavLink href="/login" className="fs-medium c-gray weight-500">
                  login
                </NavLink>
                <Button
                  className="book_now transition_05 fs-medium background-primary border-none"
                  variant="success"
                >
                  <span className="c-white">Book Now</span>
                </Button>
              </div>
            </ul>

            <div className="login-booking-links d-flex gap-3 align-items-center show-large-device">
              <a href="#" className="fs-medium c-gray weight-500">
                login
              </a>
              <Button
                className="book_now transition_05 fs-medium background-primary border-none"
                variant="success"
              >
                <span className="c-white">Book Now</span>
              </Button>
            </div>

            <div className="menu-pars">
              <FontAwesomeIcon onClick={handleClick} icon={faBars} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
