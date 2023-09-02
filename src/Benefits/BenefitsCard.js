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

const BenefitsCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tempData, setTempData] = useState([]);
  const getOffersTemp = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/pages/5fd771cc072e5479bded0f2b"
      );
      return response.data.content.en;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const fetchTempData = async () => {
    const tempData = await getOffersTemp();
    const data = tempData.benefits.items.map((item, index) => {
      return {
        title: item.title,
        text: item.text,
      };
    });
    setTempData(data);
  };

  useEffect(() => {
    fetchTempData();
  }, []);

  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordionClick = (index) => {
    if (openIndex === index) {
      // Aynı öğe tekrar tıklandığında, kapat
      setOpenIndex(null);
    } else {
      // Farklı bir öğeye tıklandığında, önceki açık olanı kapat ve yeni öğeyi aç
      setOpenIndex(index);
    }
  };
  useEffect(() => {
    // Sayfa yüklendiğinde ilk öğeyi (1. öğe) açık tutmak için
    setOpenIndex(0);
  }, []);

  return (
 
      <div style={{height:'auto', position:'relative', display:'block'}}>
        <Accordion defaultIndex={[0]}>
          {tempData.map((item, index) => (
            <AccordionItem key={index} className="benefits-spoiler">
              <AccordionButton
                className="spoiler-title-box"
                _hover={{ bg: "#545454" }}
                onClick={() => handleAccordionClick(index)}
              >
                <Box
                  className="spoiler-title-text"
                  as="span"
                  textAlign="left"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              </AccordionButton>

              <AccordionPanel isOpen={openIndex === index}>
                <div
                  className="spoiler-text"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></div>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
   
  );
};

export default BenefitsCard;

// <Button
// _hover={{ bg: "#545454" }}
// className="spoiler-title-box"
// onClick={toggleCollapseOne}
// >
// <h4
//   className="spoiler-title-text"
//   dangerouslySetInnerHTML={{ __html: item.title }}
// ></h4>
// </Button>
// <Collapse in={isExpandedOne} animateOpacity className="Collapse">
// <VStack align="start" spacing="4">
//   <Text
//     className="spoiler-text"
//     dangerouslySetInnerHTML={{ __html: item.text }}
//   ></Text>
// </VStack>
// </Collapse>
