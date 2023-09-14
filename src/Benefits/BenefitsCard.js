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


const BenefitsCard = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const [tempData, setTempData] = useState([]);
  const getOffersTemp = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b"
      );
      return response.data.content;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchTempData = async () => {
    const data = await getOffersTemp();
    setTempData(data);
  };
  useEffect(() => {
    fetchTempData();
  }, []);
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
        {tempData[lng]?.benefits.items.map((item, index) => (
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

export default BenefitsCard;
