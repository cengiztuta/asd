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
import i18next from "i18next";

const BenefitsCard = () => {
  const { t } = useTranslation();

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
  const items = t("pages.5fd771cc072e5479bded0f2b.benefits.items", {
    returnObjects: true,
    something: "gold",
  });


  return (
    <div className="acordion">
      <Accordion defaultIndex={[0]}>
        {items.map((item, index) => (
          <AccordionItem key={index} className="benefits-spoiler">
            <AccordionButton
              className="spoiler-title-box"
              _hover={{ bg: "#545454" }}
              onClick={() => handleAccordionClick(index)}
            >
              <Box
                className="spoiler-title-text"
                as="span"
            
              >{t(item.title)}</Box>
            </AccordionButton>

            <AccordionPanel
              className="spoiler-content"
              isOpen={openIndex === index}
            >
              <a
                className="spoiler-text"
                dangerouslySetInnerHTML={{ __html: t(item.text) }}
              ></a>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default BenefitsCard;
