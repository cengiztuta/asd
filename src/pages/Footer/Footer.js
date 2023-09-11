import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation()

  return (
    <div className="footer">
      <div className="footer-content">
        <ul className="footer-first-section">
          <a> CoolPass / Prague Card </a>
          <a> {t('translation.FOOTER_USING_COOLPASS')}</a>
          <a>{t('translation.FOOTER_how_you_save')} </a>
          <a>Getting Your Pass </a>
          <a> {t('translation.FOOTER_sales_points')} </a>
          <a>{t('translation.FOOTER_reviews')} </a>
        </ul>
        <ul className="footer-first-section">
          <a> {t('translation.ATTRACTIONS')} </a>
          <a> {t('translation.FOOTER_sightseeing_tours')} </a>
          <a> {t('translation.FOOTER_areas')} </a>
          <a>{t('translation.FOOTER_closures')} </a>
          <a> {t('translation.FOOTER_whats_on')} </a>
          <a> {t('translation.FOOTER_contact_us')} </a>
        </ul>
        <ul className="footer-first-section">
          <a>
            <Button _hover={{ bg: "#FF9848" }} className="footer-button">
              {t('translation.FAQ')}
            </Button>
          </a>
          <a> {t('translation.FOOTER_about_us')} </a>
          <a> {t('translation.FOOTER_terms_and_conditions')} </a>
          <a>{t('translation.FOOTER_cancellation_and_refund')}</a>
          <a> {t('translation.FOOTER_privacy_policy')} </a>
        </ul>
        <ul className="footer-first-section">
          <a> {t('translation.DOWNLOAD')} </a>
          <a> Prague Cool Pass App </a>
          <a target="_blank">
            <div className="app-store"></div>{" "}
          </a>
          <a target="_blank">
            <div className="play-store"></div>{" "}
          </a>
        </ul>
        <ul className="footer-first-section">
          <a> {t('translation.NEWS_AND_UPDATES')} </a>
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
              {t('translation.EMAIL_SUBSCRIBE')}
            </button>
          </div>
          <div className="footer-year-info">CoolPass 2020-2023</div>
          <div className="footer-info">Prague Card 1992-2023</div>
          <p className="rights-reserved-block">
            {" "}
           {t('translation.ALL_RIGHTS_RESERVED_LABEL')}
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
