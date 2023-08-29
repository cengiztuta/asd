import React from "react";
import "./Footer.css";
import { Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <ul className="footer-first-section">
          <a> CoolPass / Prague Card </a>
          <a> Using CoolPass </a>
          <a>How You Save </a>
          <a>Getting Your Pass </a>
          <a> Sales & Collection Points </a>
          <a>Customer Reviews </a>
        </ul>
        <ul className="footer-first-section">
          <a> ATTRACTIONS </a>
          <a> Sightseeing Tours </a>
          <a> Prague Areas </a>
          <a> Closures & Notices </a>
          <a> What's On </a>
          <a> Contact Us </a>
        </ul>
        <ul className="footer-first-section">
          <a>
            <Button _hover={{ bg: "#FF9848" }} className="footer-button">
              FAQ
            </Button>
          </a>
          <a> About Us </a>
          <a> Terms and Conditions </a>
          <a> Cancellation & Refund </a>
          <a> Privacy Policy </a>
        </ul>
        <ul className="footer-first-section">
          <a> DOWNLOAD </a>
          <a> Prague Cool Pass </a>
          <a target="_blank">
            <div className="app-store"></div>{" "}
          </a>
          <a target="_blank">
            <div className="play-store"></div>{" "}
          </a>
        </ul>
        <ul className="footer-first-section">
          <a> News & Updates </a>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <input
              className="footer-input"
              type="text"
              placeholder="Search Attractions"
            />{" "}
            <button _hover={{ bg: "#FF9848" }} className="footer-subs-button">
              SUBSCRIBE
            </button>
          </div>
          <div className="footer-year-info">CoolPass 2020-2023</div>
          <div className="footer-info">Prague Card 1992-2023</div>
          <p className="rights-reserved-block">
            {" "}
            All rights reserved by Travel CoolPass Ltd. & Prague Card s.r.o.
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
