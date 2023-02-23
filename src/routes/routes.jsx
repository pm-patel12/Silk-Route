import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/index";
import AboutUs from "../pages/aboutUs/index";
import Blog from "../pages/blog/index";
import Faq from "../pages/faq/index";
import PrivacyPolicy from "../pages/privacyPolicy/index";
import Services from "../pages/services/index";
import TermsConditions from "../pages/termsConditions/index";

const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/termsConditions" element={<TermsConditions />} />
      </Routes>
    </>
  );
};

export default routes;
