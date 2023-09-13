import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [tempDataTwo, setTempDataTwo] = useState([]);
  const lng = i18n.language;
  const getOffersTempTwo = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/translation"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  console.log(tempDataTwo);
  const fetchTempDataTwo = async () => {
    const data = await getOffersTempTwo();
    setTempDataTwo(data);
  };
  useEffect(() => {
    fetchTempDataTwo();
  }, []);
  return (
    <div className="footer">
      <div className="footer-content">
        <ul className="footer-first-section">
          <a> CoolPass / Prague Card </a>
          <a> {tempDataTwo[lng]?.FOOTER_USING_COOLPASS}</a>
          <a>{tempDataTwo[lng]?.FOOTER_how_you_save} </a>
          <a>{tempDataTwo[lng]?.FOOTER_get_your_pass} </a>
          <a> {tempDataTwo[lng]?.FOOTER_sales_points} </a>
          <a>{tempDataTwo[lng]?.FOOTER_reviews} </a>
        </ul>
        <ul className="footer-first-section">
          <a> {tempDataTwo[lng]?.ATTRACTIONS} </a>
          <a> {tempDataTwo[lng]?.FOOTER_sightseeing_tours} </a>
          <a> {tempDataTwo[lng]?.FOOTER_areas} </a>
          <a>{tempDataTwo[lng]?.FOOTER_closures} </a>
          <a> {tempDataTwo[lng]?.FOOTER_whats_on} </a>
          <a> {tempDataTwo[lng]?.FOOTER_contact_us} </a>
        </ul>
        <ul className="footer-first-section">
          <a>
            <Button _hover={{ bg: "#FF9848" }} className="footer-button">
              {tempDataTwo[lng]?.FAQ}
            </Button>
          </a>
          <a> {tempDataTwo[lng]?.FOOTER_about_us} </a>
          <a> {tempDataTwo[lng]?.FOOTER_terms_and_conditions} </a>
          <a>{tempDataTwo[lng]?.FOOTER_cancellation_and_refund}</a>
          <a> {tempDataTwo[lng]?.FOOTER_privacy_policy} </a>
        </ul>
        <ul className="footer-first-section">
          <a> {tempDataTwo[lng]?.DOWNLOAD} </a>
          <a> Prague Cool Pass App </a>
          <a target="_blank">
            <div className="app-store"></div>{" "}
          </a>
          <a target="_blank">
            <div className="play-store"></div>{" "}
          </a>
        </ul>
        <ul className="footer-first-section">
          <a> {tempDataTwo[lng]?.NEWS_AND_UPDATES} </a>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <input
              className="footer-input"
              type="text"
              placeholder={tempDataTwo[lng]?.SEARCH}
            />{" "}
            <button _hover={{ bg: "#FF9848" }} className="footer-subs-button">
              {tempDataTwo[lng]?.EMAIL_SUBSCRIBE}
            </button>
          </div>
          <div className="footer-year-info">CoolPass 2020-2023</div>
          <div className="footer-info">Prague Card 1992-2023</div>
          <p className="rights-reserved-block">
            {" "}
            {tempDataTwo[lng]?.ALL_RIGHTS_RESERVED_LABEL}
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
