import React, { useEffect, useState } from "react";
import "./Offer.css";
import OfferCard from "./OfferCard";
import { useTranslation } from "react-i18next";
import { fetchData, fetchDataTwoImages } from "../../dataFetching";
import { setTempData, setTempDataTwoImages } from "../../redux/action";
import { connect } from "react-redux";
const Offer = ({ tempData, tempDataTwoImages }) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  useEffect(() => {
    fetchData();
    fetchDataTwoImages();
  }, []);
  const images = tempDataTwoImages?.offers;
  return (
    <section className="offer">
      <div className="offer-content">
        <h3 className="offer-h3">{tempData[lng]?.HOME_offers_title}</h3>

        <div>
          <OfferCard card={images?.web_images} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  tempData: state.tempData,
  tempDataTwoImages: state.tempDataTwoImages,
});

export default connect(mapStateToProps, { setTempData, setTempDataTwoImages })(
  Offer
);
