import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import "./Card.css";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Card = ({ card, img }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [filled, setFilled] = useState(false);
  const { t } = useTranslation();

  const api = "https://static2.praguecoolpass.com/";

  const toggleHeart = () => {
    setIsFilled(!isFilled);
  };
  const handleMouseEnter = () => {
    setFilled(true);
  };

  const handleMouseLeave = () => {
    setFilled(false);
  };
  const { title, banner, subtitle } = card;
  const [show, setShow] = useState(false);

  return (
    <Box
      className="att-Card"
      style={{
        backgroundImage: `url(${api}${img})`,
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
          <p className="benefit-text">{t("translation.ATTRACTIONS_label_included")} </p>
      <span></span>
          <p className="benefit-text"> {t("translation.ATTRACTIONS_label_with_pass")} </p>
        </div>
      )}
      <Box
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="att-card-footer"
      >
        <Box className="att-card-footer-content">
          <p className="att-title">{t('attraction.title')}</p>
        </Box>
        ;
        {show && (
          <Box className="att-card-footer-text-content">
            <Text
              className="att-card-footer-text"
              dangerouslySetInnerHTML={{
                __html: t('attraction.subtitle').slice(0, 200) + "...",
              }}
            ></Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Card;
