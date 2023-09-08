import React, { useState, useEffect } from "react";
import "./Howuse.css";
import axios from "axios";
import HowUseCard from "./HowUseCard";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Howuse = () => {
  const [tempData, setTempData] = useState([]);

  const getOffersTemp = async () => {
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

  const fetchTempData = async () => {
    const tempData = await getOffersTemp();
    const data = tempData.en.how_to_use.descriptions;

    setTempData(data);
  };

  useEffect(() => {
    fetchTempData();
  }, []);
  const [tempDataTwo, setTempDataTwo] = useState([]);
  const getOffersTempTwo = async () => {
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
  console.log(tempDataTwo);
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
        <h3 className="Howuse-title">{tempDataTwo.HOME_how_to_use_title}</h3>

        <HowUseCard card={tempData} />
      </div>
    </div>
  );
};

export default Howuse;
