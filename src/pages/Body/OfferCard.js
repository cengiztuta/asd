import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import "./Offer.css";
import axios from "axios";
import { MdWidthFull } from "react-icons/md";

const OfferCard = ({ card, image }) => {
  const api = "https://static2.praguecoolpass.com/";
  const { title, features_list, button_text } = card;
  const [show, setShow] = useState(null);

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

  const Grid = () => {
    const boxes = [
      { id: 1 },
      { id: 2, backgroundImage: `url(${api}${attractions})` },
      { id: 3, backgroundImage: `url(${api}${attractions})` },
      { id: 4, backgroundImage: `url(${api}${attractions})` },
    ];

    return (
      <div className="grid">
        {attractions.map((item, index) => (
          <div
            onMouseEnter={() => setShow("popup1")}
            onMouseLeave={() => setShow(null)}
            className={`pop-up ${show === "popup1" ? "active" : ""}`}
            key={index}
            style={{
              backgroundImage: `url(${api}${item})`,
            }}
          >
            {show === "popup1" ? (
              <div className="hovered">
                <h3 className="pop-up-text-title">{title}</h3>
                <div className="pop-up-text">
                  <p>{features_list}</p>

                  <div className="pop-up-button-content">
                    <Button
                      _hover={{ bg: "#FF9848" }}
                      className="pop-up-button"
                    >
                      {button_text}
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="pop-up-title">
                <h3 className="pop-up-title-h3">{title}</h3>
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

      {/* {show === "popup1" ? (
        <div className="hovered">
          <div>
            <h3 className="pop-up-text-title">{title}</h3>
            <div className="pop-up-text">
              <p>{features_list}</p>
            </div>
            <div className="pop-up-button-content">
              <Button _hover={{ bg: "#FF9848" }} className="pop-up-button">
                {button_text}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="pop-up-title">
          <h3 className="pop-up-title-h3">{title}</h3>
        </div>
      )} */}
    </div>
  );
};

export default OfferCard;
