import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Card = ({ card, img }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [filled, setFilled] = useState(false);

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
      w={"270px"}
      h={"204px"}
      position={"relative"}
      borderRadius={"10px"}
      _hover={{
        cursor: "pointer",
      }}
      style={{
        backgroundImage: `url(${api}${img})`,
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {filled || isFilled ? (
          <img
            style={{
              cursor: "pointer",
              height: "24px",
              width: "24px",
              zIndex: 10,
              position: "absolute",
              marginLeft: "235px",
              marginTop: "155px",
            }}
            src={"https://praguecoolpass.com/img/heart-active.72445abc.svg"}
            onClick={toggleHeart}
          />
        ) : (
          <img
            style={{
              cursor: "pointer",
              height: "24px",
              width: "24px",
              zIndex: 10,
              position: "absolute",
              marginLeft: "235px",
              marginTop: "155px",
            }}
            onClick={toggleHeart}
            src={"https://praguecoolpass.com/img/heart-disable.e975f7bf.svg"}
          />
        )}
      </Box>
      {banner && (
        <Box
          h={"23px"}
          w={{ base: "150px" }}
          bg={"#FFC513"}
          position={"absolute"}
          top={"10px"}
          right={"0px"}
          borderLeftRadius={"5px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Text
            fontSize={{
              base: "2xs",
            }}
            fontWeight={"bold"}
            textAlign={"center"}
            color={"white"}
            w={"100%"}
          >
            INCLUDED with CoolPass
          </Text>
        </Box>
      )}
      <Box
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        h={show ? "50%" : "30%"}
        w={"100%"}
        bg={"rgba(0,0,0,0.5)"}
        color={"white"}
        position={"absolute"}
        bottom={"0px"}
        flexDirection={"column"}
        borderBottomRadius={"10px"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={"row"}
          w={"80%"}
        >
          <Text
            fontSize={"xl"}
            fontWeight={"bold"}
            paddingLeft={"10px"}
            marginBottom={"120px"}
          >
            {title}
          </Text>
        </Box>
        <Box
          style={{
            cursor: "pointer",
            height: "24px",
            width: "20%",
          }}
        ></Box>
        ;
        {show && (
          <Box
            w={"80%"}
            color={"white"}
            padding={"10px"}
            position={"absolute"}
            bottom={"0px"}
            display={"flex"}
            alignItems={"center"}
            borderRadius={"10px"}
            paddingTop={"20px"}
          >
            <Text fontSize={"11px"} fontWeight={"bold"}>
              {subtitle.slice(0, 100) + "..."}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Card;
