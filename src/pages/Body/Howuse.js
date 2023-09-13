import React, { useEffect, useState } from "react";
import "./Howuse.css";
import HowUseCard from "./HowUseCard";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Howuse = () => {
  const { t, i18n } = useTranslation();
  const [tempData, setTempData] = useState([]);
  const getOffersTemp = async () => {
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
  console.log(tempData);
  const fetchTempData = async () => {
    const data = await getOffersTemp();
    setTempData(data);
  };
  useEffect(() => {
    fetchTempData();
  }, []);
  const lng = i18n.language;
  console.log(tempData);
  return (
    <div className="Howuse">
      <div className="Howuse-container">
        <h3 className="Howuse-title">{tempData[lng]?.HOME_how_to_use_title}</h3>

        <HowUseCard />
      </div>
    </div>
  );
};

export default Howuse;
