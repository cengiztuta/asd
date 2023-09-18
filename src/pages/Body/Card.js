import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import "./Card.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { connect } from "react-redux";
import { setTempData } from "../../redux/action";
import { fetchData } from "../../dataFetching";

const Card = ({ card, hakan, tempData }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [filled, setFilled] = useState(false);
  const api = "https://static2.praguecoolpass.com/";
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  useEffect(() => {
    fetchData();
  }, []);

  const toggleHeart = () => {
    setIsFilled(!isFilled);
  };
  const handleMouseEnter = () => {
    setFilled(true);
  };

  const handleMouseLeave = () => {
    setFilled(false);
  };
  const { banner, title, subtitle, images } = card;
  const [show, setShow] = useState(false);

  return (
    <Box
      className="att-Card"
      style={{
        backgroundImage: `url(${api}${card.images[0]})`,
        backgroundSize: "cover",
      }}
    >
      <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {filled || isFilled ? (
          <img
            className="att-heart-image"
            src={"https://praguecoolpass.com/img/heart-active.72445abc.svg"}
            onClick={toggleHeart}
          />
        ) : (
          <img
            className="att-heart-image"
            onClick={toggleHeart}
            src={"https://praguecoolpass.com/img/heart-disable.e975f7bf.svg"}
          />
        )}
      </Box>
      {banner && (
        <div className="card-benefit">
          <p className="benefit-text">
            {tempData[lng]?.ATTRACTIONS_label_included}{" "}
          </p>
          <span></span>
          <p className="benefit-text">
            {" "}
            {tempData[lng]?.ATTRACTIONS_label_with_pass}{" "}
          </p>
        </div>
      )}
      <Box
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="att-card-footer"
      >
        <Box className="att-card-footer-content">
          <p className="att-title">{card.content[hakan].title}</p>
        </Box>
        ;
        {show && (
          <Box className="att-card-footer-text-content">
            <Text
              className="att-card-footer-text"
              dangerouslySetInnerHTML={{
                __html: card.content[hakan].subtitle + "...",
              }}
            ></Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};
const mapStateToProps = (state) => ({
  tempData: state.tempData,
});
export default connect(mapStateToProps, { setTempData })(Card);
