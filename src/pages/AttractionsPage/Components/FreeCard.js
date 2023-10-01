import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect, useRef } from "react";
import "./FreeAttractions.css";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { setTempData, setTempDataTwo } from "../../../redux/action.js";
import { fetchData, fetchDataTwo } from "../../../dataFetching.js";

const FreeCard = ({ tempData, card }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [filled, setFilled] = useState(false);
  const api = process.env.REACT_APP_IMAGE_URL;
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      className="free-Cards"
      style={{
        backgroundColor: "red",
        backgroundImage: `url(${api}${card.webimages[0]})`,
        backgroundSize: "cover",
      }}
    >
      <div className="free-card-benefit">
        <p className="free-benefit-text">
          {tempData[lng]?.FREE_PUBLIC_ENTRY_LABEL}{" "}
        </p>
      </div>

      <Box
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="free-card-footer"
      >
        <Box className="free-card-footer-content">
          <p className="free-card-title">{card.content[lng]?.title}</p>
        </Box>
       
        {show && (
          <Box className="free-card-footer-text-content">
            <Text className="free-card-footer-text">
              {card.content[lng]?.subtitle}
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

export default connect(mapStateToProps, { setTempData })(FreeCard);
