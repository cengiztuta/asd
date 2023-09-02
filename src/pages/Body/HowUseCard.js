import React, { useState, useEffect } from "react";
import "./Howuse.css";
import axios from "axios";
const HowUseCard = ({ card }) => {
  const { descriptions } = card;
  const api = "https://static2.praguecoolpass.com/";

  const [howUse, setHowUse] = useState([]);
  const getHowUse = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b"
      );
      return response.data.how_to_use.web_images;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchTranslate = async () => {
    const data = await getHowUse();
    setHowUse(data);
  };

  useEffect(() => {
    fetchTranslate();
  }, []);

  return (
    <div className="how-use-wrapper">
      <div className="how-use-steps">
        {howUse.map((item, index) => (
          <div className="how-use-step-new" key={index}>
            <div
              className="how-use-step-image"
              style={{ backgroundImage: `url(${api}${item})` }}
            >
              <a
                style={{
                  cursor: "pointer",
                  height: "50px",
                  width: "180px",
                  alignSelf: "center",
                  margin: " 13px",
                }}
              ></a>
              <div style={{ display: "block" }}> </div>
              <a
                style={{
                  cursor: "pointer",
                  height: "50px",
                  width: "180px",
                  alignSelf: "center",
                  margin: " 13px",
                }}
              ></a>
            </div>
            <div className="how-use-step-number">1 </div>
            <div className="how-use-step-text">
              
              {/* {card[index].descriptions} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowUseCard;
