import React, { useState, useEffect } from "react";
import "./Benefits.css";
import axios from "axios";
import BenefitsCard from "./BenefitsCard.js";

import "./Benefits.css";
const Benefits = () => {
  const [tempData, setTempData] = useState([]);
  const getOffersTemp = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/translation"
      );
      return response.data.en;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  console.log(tempData);
  const fetchTempData = async () => {
    const data = await getOffersTemp();
    setTempData(data);
  };
  useEffect(() => {
    fetchTempData();
  }, []);
  return (
    <section style={{ marginTop: "40px" }}>
      <h3 className="Benefits-title">{tempData.HOME_benefits_title}</h3>

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

export default Benefits;
