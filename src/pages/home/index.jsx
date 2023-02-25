import React from "react";
import "./Home.scss";
import A1 from "../../assets/images/icons/arrow 1.png";
import A2 from "../../assets/images/icons/arrow 3.png";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="homeWrapper ">
        <div className="heroWrapper hasOverlayHeader">
          <div className="containerBox">
            {/* hero start */}
            <section>
              <div className="contentWrapper">
                <div className="left">
                  <h1>Immigration Tailored to You</h1>
                </div>
                <div className="right"></div>
              </div>
              <div className="navBar">
                <div className="left">
                  <svg
                    width="45"
                    height="34"
                    viewBox="0 0 45 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2825 17.4537L35.5976 31.2328L35.5976 3.6746L10.2825 17.4537Z"
                      fill="#39FF14"
                    />
                    <path
                      d="M24.7482 4.19655L1.26207 17.4536L24.7482 30.7107L24.7482 4.19655Z"
                      stroke="#39FF14"
                      stroke-width="1.20548"
                    />
                  </svg>
                </div>
                <div className="navigationDots">
                  <div className="bar active"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
                <div className="right">
                  <svg
                    width="45"
                    height="34"
                    viewBox="0 0 45 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.3235 4.19655L42.8097 17.4536L19.3235 30.7107L19.3235 4.19655Z"
                      stroke="#39FF14"
                      stroke-width="1.20548"
                    />
                    <path
                      d="M33.7893 17.4537L8.47422 31.2328L8.47422 3.6746L33.7893 17.4537Z"
                      fill="#39FF14"
                    />
                  </svg>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* hero end */}
        <div className="newBeginWrapper">
          <div className="containerBox">
            <h2>Thinking of starting anew in the EU?</h2>
            <div className="wrapper">
              <div className="left">
                <p>
                  <span> Silk Route is here to help.</span> We’re confident in
                  saying we’re one of the best residency programs in Europe, and
                  here’s why. We create companies tailored to each individual in
                  our care–businesses that establish residency in the European
                  Union and ensure long term success. But the genius of our
                  business model is that we make this process a luxury
                  experience for you.{" "}
                  <span>(full details available on our services page).</span>
                </p>
              </div>
              <div className="right">
                <img src={A1} alt="" />
              </div>
            </div>
            <div className="wrapper rev">
              <div className="left">
                <p>
                  Our team of experts know the immigration process inside and
                  out. Their objective is to take the fear out of the unknown
                  because let’s be honest; uprooting your life to start over in
                  a new country is daunting to say the least. Trusting Silk
                  Route eliminates the anxiety, confusion, and uncertainty of
                  immigration so all that’s left for you to think about is the
                  excitement of new beginnings.
                </p>
              </div>
              <div className="right">
                <img src={A1} alt="" />
              </div>
            </div>
            <h5>
              Are you ready to unlock the possibilities of a new life in the EU?
            </h5>
            <Link to="/">Click here to begin your journey</Link>
          </div>
        </div>
        {/* about company bio */}
        <div className="companyBio">
          <div className="containerBox">
            <h4>Company Bio</h4>
            <p>
              Silk Route is an immigration consultancy firm that specializes in
              helping individuals gain permanent residency in the European Union
              via business development. We pride ourselves on being one of the
              best residency programs in Europe, and that begins with knowing
              our clients through and through. Taking into account their
              educational background, work experience, and areas of expertise,
              we design and plant companies in Latvia that establish EU
              residency, all while ensuring control of the company stays in the
              client’s hands. We find great satisfaction in providing our
              customers with the highest quality of support and care from the
              earliest stages of the process to when they finally settle into
              their new homes. Our team of experienced immigration lawyers and
              board of advisors are experts in their respective fields, and
              because they understand the migration process inside and out, they
              know how to take the fear out of the unknown. With headquarters
              located in the Netherlands, and branch offices in Riga and Delhi,
              Silk Route aims to advise, assist, and accompany our clients
              throughout the entire migration process.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
