import React, { useState, useEffect } from "react";
import "./Offer.css";
import offer1 from "../images/offer-1.jpg";
import offer2 from "../images/offer-2.jpg";
import offer3 from "../images/offer-3.jpg";
import offer4 from "../images/offer-4.jpg";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import OfferCard from "./OfferCard";
import { useTranslation } from "react-i18next";
const Offer = () => {
  const { t } = useTranslation();
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
    const data = tempData.en.offers.items.map((item, index) => {
      return {
        title: item.title,
        features_list: item.features_list,
        button_text: item.button_text,
      };
    });
    setTempData(data);
  };

  useEffect(() => {
    fetchTempData();
  }, []);
  const [attractions, setAttraction] = useState([]);
  const getMenu = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b"
      );
      return response.data.offers.web_images;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchTranslate = async () => {
    const data = await getMenu();
    setAttraction(data);
  };

  useEffect(() => {
    fetchTranslate();
  }, []);


  return (
    <section className="offer">
      <div className="offer-content">
        <h3 className="offer-h3">{t("translation.HOME_offers_title")}</h3>

        <div>
          <OfferCard  />
        </div>
      </div>
    </section>
  );
};

export default Offer;
