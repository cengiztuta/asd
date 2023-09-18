import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import { fetchData } from "../../dataFetching";
import { setTempData } from "../../redux/action";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

const Footer = ({ tempData }) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="footer">
      <div className="footer-content">
        <ul className="footer-first-section">
          <a> CoolPass / Prague Card </a>
          <a> {tempData[lng]?.FOOTER_USING_COOLPASS}</a>
          <a>{tempData[lng]?.FOOTER_how_you_save} </a>
          <a>{tempData[lng]?.FOOTER_get_your_pass} </a>
          <a> {tempData[lng]?.FOOTER_sales_points} </a>
          <a>{tempData[lng]?.FOOTER_reviews} </a>
        </ul>
        <ul className="footer-first-section">
          <a> {tempData[lng]?.ATTRACTIONS} </a>
          <a> {tempData[lng]?.FOOTER_sightseeing_tours} </a>
          <a> {tempData[lng]?.FOOTER_areas} </a>
          <a>{tempData[lng]?.FOOTER_closures} </a>
          <a> {tempData[lng]?.FOOTER_whats_on} </a>
          <a> {tempData[lng]?.FOOTER_contact_us} </a>
        </ul>
        <ul className="footer-first-section">
          <a>
            <Button _hover={{ bg: "#FF9848" }} className="footer-button">
              {tempData[lng]?.FAQ}
            </Button>
          </a>
          <a> {tempData[lng]?.FOOTER_about_us} </a>
          <a> {tempData[lng]?.FOOTER_terms_and_conditions} </a>
          <a>{tempData[lng]?.FOOTER_cancellation_and_refund}</a>
          <a> {tempData[lng]?.FOOTER_privacy_policy} </a>
        </ul>
        <ul className="footer-first-section">
          <a> {tempData[lng]?.DOWNLOAD} </a>
          <a> Prague Cool Pass App </a>
          <a target="_blank">
            <div className="app-store"></div>{" "}
          </a>
          <a target="_blank">
            <div className="play-store"></div>{" "}
          </a>
        </ul>
        <ul className="footer-first-section">
          <a> {tempData[lng]?.NEWS_AND_UPDATES} </a>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <input
              className="footer-input"
              type="text"
              placeholder={tempData[lng]?.SEARCH}
            />{" "}
            <button _hover={{ bg: "#FF9848" }} className="footer-subs-button">
              {tempData[lng]?.EMAIL_SUBSCRIBE}
            </button>
          </div>
          <div className="footer-year-info">CoolPass 2020-2023</div>
          <div className="footer-info">Prague Card 1992-2023</div>
          <p className="rights-reserved-block">
            {" "}
            {tempData[lng]?.ALL_RIGHTS_RESERVED_LABEL}
          </p>
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  tempData: state.tempData,
});
export default connect(mapStateToProps, { setTempData })(Footer);
