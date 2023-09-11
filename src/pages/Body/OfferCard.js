import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import "./Offer.css";
import axios from "axios";
import { MdWidthFull } from "react-icons/md";
import { t } from "i18next";

const OfferCard = () => {
  const api = "https://static2.praguecoolpass.com/";
 
  const [show, setShow] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const Grid = () => {
    const items = t("pages.5fd771cc072e5479bded0f2b.offers.items", {
      returnObjects: true,
      something: "gold",
    });

    return (
      <div className="grid">
        {items.map((item, index) => (
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`pop-up ${hoveredIndex === index ? "active" : ""}`}
            key={index}
            style={{
              backgroundImage: `url(${api}${t(item.web_images)})`,
            }}
          >
            {hoveredIndex === index ? (
              <div className="hovered">
                <div className="text-container">
                  <p
                    className="pop-up-text-title"
                    dangerouslySetInnerHTML={{
                      __html: t(item.title),
                    }}
                  ></p>
                  <div className="pop-up-text">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t(item.features_list),
                      }}
                    ></p>
                  </div>
                </div>
                <div className="pop-up-button-content">
                  <a className="see-all-button">
                    <button className="pop-up-button">
                      {t(item.button_text)}
                    </button>
                  </a>
                </div>
              </div>
            ) : (
              <div className="pop-up-title">
                <p
                  className="pop-up-title-h3"
                  dangerouslySetInnerHTML={{
                    __html: t(item.title),
                  }}
                ></p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Grid />
    </div>
  );
};

export default OfferCard;
