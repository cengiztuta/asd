import React, { useEffect, useState } from "react";
import "./Offer.css";
import OfferCard from "./OfferCard";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { fetchData } from "../../dataFetching";
import { setTempData } from "../../redux/action";
import { connect } from "react-redux";
const Offer = ({ tempData }) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  useEffect(() => {
    fetchData();
  }, []);
  const [tempDataTwo, setTempDataTwo] = useState([]);
  const getOffersTempTwo = async () => {
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
  const fetchTempDataTwo = async () => {
    const data = await getOffersTempTwo();
    setTempDataTwo(data);
  };
  useEffect(() => {
    fetchTempDataTwo();
  }, []);
  return (
    <section className="offer">
      <div className="offer-content">
        <h3 className="offer-h3">{tempData[lng]?.HOME_offers_title}</h3>

        <div>
          <OfferCard card={tempDataTwo} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  tempData: state.tempData,
});

export default connect(mapStateToProps, { setTempData })(Offer);
