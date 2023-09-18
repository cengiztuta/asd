import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { fetchData } from "../../dataFetching";
import { setTempData } from "../../redux/action";
import { connect } from "react-redux";
const Newss = ({ tempData }) => {
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

  useEffect(() => {
    fetchTranslate();
  }, []);

  useEffect(() => {
    fetchData();
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
              <a
                className="newss-text"
                dangerouslySetInnerHTML={{
                  __html: item.content.en.text.slice(0, 700) + "...",
                }}
              ></a>
              <a className="newss-link">
                <p className="newss-read-more">{tempData[lng]?.READ_MORE}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div>
        <a className="newss-button-container">
          <Button _hover={{ bg: "#FF9848" }} className="News-button">
            {tempData[lng]?.SEE_ALL_NEWS}
          </Button>
        </a>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  tempData: state.tempData,
});

export default connect(mapStateToProps, { setTempData })(Newss);
