import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import "./Offer.css";
import axios from "axios";
import { MdWidthFull } from "react-icons/md";

const OfferCard = ({ card, image }) => {
  const api = "https://static2.praguecoolpass.com/";
  const { title, features_list, button_text } = card;
  const [show, setShow] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const Grid = () => {
    return (
      <div className="grid">
        {attractions.map((item, index) => (
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`pop-up ${hoveredIndex === index ? "active" : ""}`}
            key={index}
            style={{
              backgroundImage: `url(${api}${item})`,
            }}
          >
            {hoveredIndex === index ? (
              <div className="hovered">
                <div className="text-container">
                  <p
                    className="pop-up-text-title"
                    dangerouslySetInnerHTML={{
                      __html: card[index].title,
                    }}
                  ></p>
                  <div className="pop-up-text">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: card[index].features_list,
                      }}
                    ></p>
                  </div>
                </div>
                <div className="pop-up-button-content">
                  <a className="see-all-button">
                    <button className="pop-up-button">
                      {card[index].button_text}
                    </button>
                  </a>
                </div>
              </div>
            ) : (
              <div className="pop-up-title">
                <p
                  className="pop-up-title-h3"
                  dangerouslySetInnerHTML={{
                    __html: card.title,
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
