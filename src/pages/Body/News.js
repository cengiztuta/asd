import React, { useState, useEffect } from "react";
import "./News.css";
import { Button, Text } from "@chakra-ui/react";
import News1 from "../images/News1.jpg";
import Newss from "./Newss";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { fetchData } from "../../dataFetching";
import { setTempData } from "../../redux/action";
import { connect } from "react-redux";
const News = ({ tempData }) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="News">
      <div className="News-container">
        <h3 className="newss-h3"> {tempData[lng]?.HOME_news_title} </h3>
        <Newss />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tempData: state.tempData,
});

export default connect(mapStateToProps, { setTempData })(News);
