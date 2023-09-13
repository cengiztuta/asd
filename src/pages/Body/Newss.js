import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export const Newss = () => {
  const api = "https://static2.praguecoolpass.com/";
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const [attractions, setAttraction] = useState([]);
  const getMenu = async () => {
    try {
      const response = await axios.get("https://api2.praguecoolpass.com/news");
      return response.data.slice(0, 2);
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchTranslate = async () => {
    const data = await getMenu();
    setAttraction(data);
  };
  console.log(attractions);

  useEffect(() => {
    fetchTranslate();
  }, []);
  const [tempDataTwo, setTempDataTwo] = useState([]);
  const getOffersTempTwo = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/translation"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  console.log(tempDataTwo);
  const fetchTempDataTwo = async () => {
    const data = await getOffersTempTwo();
    setTempDataTwo(data);
  };
  useEffect(() => {
    fetchTempDataTwo();
  }, []);
  return (
    <div>
      <div className="newss-content">
        {attractions.map((item, index) => (
          <div
            key={index}
            className={`newss-card-container ${
              index % 2 === 0 ? "even" : "odd"
            }`}
          >
            <div
              className="newss-image"
              style={{ backgroundImage: `url(${api}${item.webimages})` }}
            >
              <div className="newss-date">02.06.2023 </div>
            </div>
            <div className="newss-text-content">
              <a className="newss-link">
                <a className="newss-title"> {item.content.en.title} </a>
              </a>
              <a className="newss-text">
                {item.content.en.text.slice(0, 700) + "..."}
              </a>
              <a className="newss-link">
                <p className="newss-read-more">{tempDataTwo[lng]?.READ_MORE}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div>
    
        <a className="newss-button-container">
    
          <Button _hover={{ bg: "#FF9848" }} className="News-button">
         
            {tempDataTwo[lng]?.SEE_ALL_NEWS}
          </Button>
        </a>
      </div>
    </div>
  );
};
