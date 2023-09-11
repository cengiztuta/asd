import React, { useState, useEffect } from "react";
import "./News.css";
import { Button, Text } from "@chakra-ui/react";
import News1 from "../images/News1.jpg";
import { Newss } from "./Newss";
import axios from "axios";
import { useTranslation } from "react-i18next";

const News = () => {
  const {t} = useTranslation()

  return (
    <div className="News">
      <div className="News-container">
        <h3 className="newss-h3"> {t("translation.HOME_news_title")}</h3>
        <Newss />
      </div>
    </div>
  );
};

export default News;
