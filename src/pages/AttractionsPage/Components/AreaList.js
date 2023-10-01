import React, { useState, useEffect } from "react";
import "./AreaList.css";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { setTempData, setTempDataTwo } from "../../../redux/action.js";
import { fetchData, fetchDataTwo } from "../../../dataFetching";
import { useFocusEffect, useStatStyles } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";

const AreaList = ({ card, tempData }) => {
  const { t, i18n } = useTranslation();
  const api = process.env.REACT_APP_IMAGE_URL;
  const lng = i18n.language;
  const [showMoreText, setShowMoreText] = useState(tempData?.[lng]?.SHOW_MORE);
  const [cardLength, setCardLength] = useState(15);

  useEffect(() => {
    fetchData();
  }, []);

  const ShowMore = () => {
    setCardLength(cardLength + 30);
    if (cardLength >= 105) {
      setShowMoreText(tempData?.[lng]?.SHOW_LESS);
    }
    if (showMoreText === tempData?.[lng]?.SHOW_LESS) {
      setCardLength(15);
      setShowMoreText(tempData?.[lng]?.SHOW_MORE);
      scrollToTop();
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 750,
      behavior: "smooth",
    });
  };
  const sortedCard = [...card];
  sortedCard.sort((a, b) => {
    const titleA = a.content[lng]?.title.toLowerCase();
    const titleB = b.content[lng]?.title.toLowerCase();

    return titleA.localeCompare(titleB);
  });

  return (
    <div>

      <a className="area-link">
        {" "}
        <button className="area-button" onClick={ShowMore}>
          {showMoreText}
        </button>{" "}
      </a>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tempData: state.tempData,
});

export default connect(mapStateToProps, { setTempData })(AreaList);
