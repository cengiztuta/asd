import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import "./FreeAttractions.css";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { setTempData, setTempDataTwo } from "../../../redux/action.js";
import { fetchData, fetchDataTwo } from "../../../dataFetching.js";
import "./FreeAttractions.css";
const AreaCard = ({ card, tempData }) => {
  const swiperRef = useRef(null);
  const { t, i18n } = useTranslation();
  const api = process.env.REACT_APP_IMAGE_URL;
  const lng = i18n.language;
  const [isFilled, setIsFilled] = useState(false);
  const [filled, setFilled] = useState(false);
  const [freeCardImages, setFreeCardImages] = useState([]);
  const dataURL = process.env.REACT_APP_DATA_URL;
  const [show, setShow] = useState(false);
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

  return (
    <Box
      className="free-Cards"
      style={{
        backgroundImage: `url(${api}${card?.images[0]})`,
      }}
    >
      {" "}
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
      <div className="free-card-benefit">
        <p className="free-benefit-text">{card?.benefit}</p>
        <br />
        <br />
        <p className="free-benefit-text">{tempData[lng]?.WITH_PRAGUE_CARD}</p>
      </div>
      <Box
        onMouseEnter={function (event) {
          setShow(true);
        }}
        onMouseLeave={function () {
          setShow(false);
        }}
        className="free-card-footer"
      >
        <Box className="free-card-footer-content">
          <p className="free-card-title">{card?.content[lng]?.title}</p>
        </Box>

        {show && (
          <Box className="free-card-footer-text-content">
            <Text
              className="free-card-footer-text"
              dangerouslySetInnerHTML={{ __html: card?.content[lng]?.subtitle }}
            >
              {}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  tempData: state.tempData,
});

export default connect(mapStateToProps, { setTempData })(AreaCard);
