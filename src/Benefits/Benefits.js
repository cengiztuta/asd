import React, { useState, useEffect } from "react";
import "./Benefits.css";

import BenefitsCard from "./BenefitsCard.js";
import { connect } from "react-redux";
import { setTempData, setTempDataTwo } from "../redux/action.js";
import { fetchData, fetchDataTwo } from "../dataFetching";
import "./Benefits.css";
import { useTranslation } from "react-i18next";
const Benefits = ({ tempData,  }) => {
  const { t, i18n } = useTranslation();
  const asd = i18n.language;
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section style={{ marginTop: "40px" }}>
      <h3 className="Benefits-title">{tempData[asd]?.HOME_benefits_title}</h3>

      <div className="Benefits">
        <BenefitsCard />
        <div className="phone-content">
          <div className="Benefits-phone"></div>
          <div className="Benefits-prague-card"> </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  tempData: state.tempData,
});

export default connect(mapStateToProps, { setTempData })(Benefits);
