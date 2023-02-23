import React from "react";
import logo from "../../assets/images/logo/LOGO.png";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="containerBox">
          <header>
            <div className="left">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="right">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/aboutUs">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default index;
