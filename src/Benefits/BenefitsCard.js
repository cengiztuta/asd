import React, { useState, useEffect } from "react";
import "./Benefits.css";
import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Collapse,
  VStack,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { setTempData, setTempDataTwo } from "../redux/action.js";
import { fetchData, fetchDataTwo } from "../dataFetching";
import { connect } from "react-redux";

const BenefitsCard = ({ tempDataTwo }) => {
  useEffect(() => {
    fetchDataTwo();
  }, []);

  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordionClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  useEffect(() => {
    setOpenIndex(0);
  }, []);

  return (
    <div className="acordion">
      <Accordion defaultIndex={[0]}>
        {tempDataTwo[lng]?.benefits.items.map((item, index) => (
          <AccordionItem key={index} className="benefits-spoiler">
            <AccordionButton
              className="spoiler-title-box"
              _hover={{ bg: "#545454" }}
              onClick={() => handleAccordionClick(index)}
            >
              <Box
                className="spoiler-title-text"
                as="span"
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></Box>
            </AccordionButton>

            <AccordionPanel
              className="spoiler-content"
              isOpen={openIndex === index}
            >
              <a
                className="spoiler-text"
                dangerouslySetInnerHTML={{ __html: item.text }}
              ></a>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tempDataTwo: state.tempDataTwo,
});

export default connect(mapStateToProps, { setTempDataTwo })(BenefitsCard);
