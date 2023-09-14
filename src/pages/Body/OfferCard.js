import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import "./Offer.css";
import axios from "axios";
import { MdWidthFull } from "react-icons/md";
import { useTranslation } from "react-i18next";

const OfferCard = ({ card }) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const api = "https://static2.praguecoolpass.com/";

  const [show, setShow] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

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
    const data = await getOffersTemp();
    setTempData(data);
  };
  useEffect(() => {
    fetchTempData();
  }, []);
  const Grid = () => {
    return (
      <div className="grid">
        {tempData[lng]?.offers.items.map((item, index) => (
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`pop-up ${hoveredIndex === index ? "active" : ""}`}
            key={index}
            style={{
              backgroundImage: `url(${api}${card[index]})`,
            }}
          >
            {hoveredIndex === index ? (
              <div className="hovered">
                <div className="text-container">
                  <p
                    className="pop-up-text-title"
                    dangerouslySetInnerHTML={{
                      __html: item.title,
                    }}
                  ></p>
                  <div className="pop-up-text">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.features_list,
                      }}
                    ></p>
                  </div>
                </div>
                <div className="pop-up-button-content">
                  <a className="see-all-button">
                    <button className="pop-up-button">
                      {item.button_text}{" "}
                    </button>
                  </a>
                </div>
              </div>
            ) : (
              <div className="pop-up-title">
                <p
                  className="pop-up-title-h3"
                  dangerouslySetInnerHTML={{
                    __html: item.title,
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
