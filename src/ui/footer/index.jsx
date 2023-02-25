import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/Logo_Footer.png";
import "./Footer.scss";

const index = () => {
  return (
    <>
      <div className="footerWrapper">
        <div className="containerBox">
          <footer>
            <div className="wrapper">
              <div className="left">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
              <div className="right">
                <ul>
                  <li>
                    <Link to="#">Home</Link>
                  </li>
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Services</Link>
                  </li>
                  <li>
                    <Link to="#">Blogs</Link>
                  </li>
                  <li>
                    <Link to="#">FAQ</Link>
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                  <li>
                    <Link to="#">Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <p className="copyRightMsg">
              Silk Route. All rights reserved © 2023
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default index;
