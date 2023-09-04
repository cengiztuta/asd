import React, { useState, useEffect } from "react";
import "./Offer.css";
import offer1 from "../images/offer-1.jpg";
import offer2 from "../images/offer-2.jpg";
import offer3 from "../images/offer-3.jpg";
import offer4 from "../images/offer-4.jpg";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import OfferCard from "./OfferCard";

const Offer = () => {
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

  return (
    <section className="offer">
      <div className="offer-content">
        <h3 className="offer-h3">ALL-INCLUSIVE OFFER FOR YOUR PRAGUE SIGHTSEEING</h3>

        <div>
          <OfferCard card={tempData} />
        </div>
      </div>
    </section>
  );
};

export default Offer;
