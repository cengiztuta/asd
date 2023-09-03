import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import "./Card.css";
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
        <div className="card-benefit">
          <p className="benefit-text">INCLUDED with CoolPass</p>
        </div>
      )}
      <Box
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        h={show ? "100px" : "60px"}
        w={"100%"}
        color={"white"}
        position={"absolute"}
        bottom={"0px"}
        flexDirection={"column"}
        borderBottomRadius={"10px"}
        bg={"rgba(37,44,62,.6);"}
      >
        <Box display={"flex"} alignItems={"center"} w={"80%"} height={"60px"}>
          <p
            className="att-title"
            // fontSize={"xl"}
            // fontWeight={"bold"}
            // paddingLeft={"10px"}
            // marginBottom={"120px"}
          >
            {title}
          </p>
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
            paddingLeft={"20px"}
            position={"absolute"}
            bottom={"0px"}
            display={"flex"}
            alignItems={"center"}
            borderRadius={"10px"}
            height={"50px"}
          >
            <Text fontSize={"12px"} fontWeight={"200"}>
              {subtitle.slice(0, 100) + "..."}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Card;
