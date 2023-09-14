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

  const fetchTempData = async () => {
    const data = await getOffersTemp();
    setTempData(data);
  };
  useEffect(() => {
    fetchTempData();
  }, []);
  const lng = i18n.language;

  const [tempDataTwo, setTempDataTwo] = useState([]);
  const getOffersTempTwo = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b"
      );
      return response.data.content;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchTempDataTwo = async () => {
    const data = await getOffersTempTwo();
    setTempDataTwo(data);
  };
  useEffect(() => {
    fetchTempDataTwo();
  }, []);

  return (
    <div className="Howuse">
      <div className="Howuse-container">
        <h3 className="Howuse-title">{tempData[lng]?.HOME_how_to_use_title}</h3>

        <HowUseCard card={tempDataTwo} />
      </div>
    </div>
  );
};

export default Howuse;
