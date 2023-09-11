import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export const Newss = () => {
  const api = "https://static2.praguecoolpass.com/";
  const { t } = useTranslation();
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

  useEffect(() => {
    fetchTranslate();
  }, []);


  const items = t("news.asd", {
    returnObjects: true,
    something: "gold",
  });


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
              style={{
                backgroundImage: `url(${api}${t(item.webimages[0])})`,
              }}
            >
              <div className="newss-date">02.06.2023 </div>
            </div>
            <div className="newss-text-content">
              <a className="newss-link">
                <a className="newss-title"> {item.title} </a>
              </a>
              <a
                className="newss-text"
                dangerouslySetInnerHTML={{
                  __html: item.content.en.text.slice(0, 700)+"...",
                }}
              ></a>
              <a className="newss-link">
                <p className="newss-read-more">{t('translation.READ_MORE')}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div>
        {" "}
        <a className="newss-button-container">
          {" "}
          <Button _hover={{ bg: "#FF9848" }} className="News-button">
            {" "}
            {t('translation.SEE_ALL_NEWS')}
          </Button>
        </a>
      </div>
    </div>
  );
};

