import React from "react";
import "./Offer.css";
import OfferCard from "./OfferCard";
import { useTranslation } from "react-i18next";
const Offer = () => {
  const { t } = useTranslation(); 
 


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
