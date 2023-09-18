import React, { useEffect, useState } from "react";
import "./Howuse.css";
import HowUseCard from "./HowUseCard";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { fetchData, fetchDataTwo } from "../../dataFetching";
import { setTempData, setTempDataTwo } from "../../redux/action";
import { connect } from "react-redux";
const Howuse = ({ tempData, tempDataTwo }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetchData();
    fetchDataTwo();
  }, []);
  const lng = i18n.language;

  return (
    <div className="Howuse">
      <div className="Howuse-container">
        <h3 className="Howuse-title">{tempData[lng]?.HOME_how_to_use_title}</h3>

        <HowUseCard card={tempDataTwo} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tempData: state.tempData,
  tempDataTwo: state.tempDataTwo,
});

export default connect(mapStateToProps, { setTempData, setTempDataTwo })(
  Howuse
);
