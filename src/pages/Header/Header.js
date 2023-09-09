import React, { useEffect, useState } from "react";
import "./Header.css";
import {
  Box,
  Flex,
  IconButton,
  Text,
  Collapse,
  Button,
  flexbox,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import axios from "axios";
const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("ENGLISH");

  const [tempDataTwo, setTempDataTwo] = useState([]);
  const getOffersTempTwo = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/translation"
      );
      return response.data.en;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  console.log(tempDataTwo);
  const fetchTempDataTwo = async () => {
    const data = await getOffersTempTwo();
    setTempDataTwo(data);
  };
  useEffect(() => {
    fetchTempDataTwo();
  }, []);

  const [tempDataThree, setTempDataThree] = useState([]);
  const getOffersTempThree = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/menu/5a7a894f66105c2e28d87bd3"
      );
      return response.data.content.en;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  console.log(tempDataThree);
  const fetchTempDataThree = async () => {
    const data = await getOffersTempThree();
    setTempDataThree(data);
  };
  useEffect(() => {
    fetchTempDataThree();
  }, []);

  const [tempData, setTempData] = useState([]);
  const getOffersTemp = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/menu/5a7a896166105c2e28d87bd4"
      );
      return response.data.content.en;
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

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const NavMenu = () => {
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <Box
        w={"100%"}
        h={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Box display={"flex"} flexDirection={"row"}>
          <Box className="left-nav">
            <IconButton
              className="burger"
              icon={
                isOpen ? (
                  <CloseIcon height={"100%"} w={"100%"} color={"#da4b07"} />
                ) : (
                  <HamburgerIcon w={"100%"} height={"100%"} color={"#da4b07"} />
                )
              }
              onClick={toggleMenu}
            />
            <a className="logo" href="/">
              CoolPass
            </a>
          </Box>

          <Box className="right-nav">
            {isOpen ? (
              <Button _hover={{ bg: "#FF9848" }} className="ButtonOne">
                {tempDataTwo.BUY_NOW}
              </Button>
            ) : (
              <Menu className="ButtonMenu">
                <MenuButton
                  _hover={{ bg: "#545454" }}
                  className="asd"
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  {lang}
                </MenuButton>
                <MenuList _hover={{ bg: "#545454" }} className="ButtonMenu">
                  <MenuItem _hover={{ bg: "#545454" }} className="MenuButton">
                    English
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "#545454" }}
                    className="MenuButton"
                    onClick={() => setLang("Čeština")}
                  >
                    Čeština
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "#545454" }}
                    className="MenuButton"
                    onClick={() => setLang("DEUTSCH")}
                  >
                    Deutsch
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "#545454" }}
                    className="MenuButton"
                    onClick={() => setLang("ESPAÑOL")}
                  >
                    Español
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "#545454" }}
                    className="MenuButton"
                    onClick={() => setLang("ITALIANO")}
                  >
                    Italiano
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "#545454" }}
                    className="MenuButton"
                    onClick={() => setLang("FRANÇAIS")}
                  >
                    Français
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "#545454" }}
                    className="MenuButton"
                    onClick={() => setLang("РУССКИЙ")}
                  >
                    Русский
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: isOpen ? "auto" : 0,
            }}
          >
            <Collapse in={isOpen} animateOpacity className="center-nav">
              <Box
                flexDirection="column"
                width={"100%"}
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                mt={isOpen ? 4 : 0}
              >
                <div className="center-nav-container">
                  <a className="navbar-link">COOLPASS/CARD</a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">{tempDataTwo.ATTRACTIONS}</a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">{tempDataThree.title}</a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">{tempData.title}</a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">{tempDataTwo.HOME_news_title}</a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">{tempDataTwo.FAQ} </a>
                </div>

                <Button _hover={{ bg: "#FF9848" }} className="ButtonOne">
                  {tempDataTwo.BUY_NOW}
                </Button>
              </Box>
            </Collapse>
          </motion.div>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <div className={`Header ${scrolling ? "hide" : ""}`}>
        <div
          className="m-navbar"
          style={{ backgroundColor: `${isOpen ? "#444959" : ""}` }}
        >
          <NavMenu />{" "}
        </div>
        <Text className="CoolPass">CoolPass </Text>
        <div className="HeadMid">
          <Text className="HeadMidText">CoolPass/Card </Text>
          <Text className="HeadMidText">{tempDataTwo.ATTRACTIONS} </Text>
          <Text className="HeadMidText">{tempDataThree.title} </Text>
          <Text className="HeadMidText">{tempData.title} </Text>
          <Text className="HeadMidText"> {tempDataTwo.HOME_news_title}</Text>
          <Text className="HeadMidText">{tempDataTwo.FAQ} </Text>
        </div>
        <div className="HeadButtons">
          <Button _hover={{ bg: "#FF9848" }} className="ButtonOne">
            {tempDataTwo.BUY_NOW}
          </Button>
          <Menu className="ButtonMenu">
            <MenuButton
              _hover={{ bg: "#545454" }}
              className="asd"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              {lang}
            </MenuButton>
            <MenuList _hover={{ bg: "#545454" }} className="ButtonMenu">
              <MenuItem _hover={{ bg: "#545454" }} className="MenuButton">
                English
              </MenuItem>
              <MenuItem
                _hover={{ bg: "#545454" }}
                className="MenuButton"
                onClick={() => setLang("Čeština")}
              >
                Čeština
              </MenuItem>
              <MenuItem
                bg={"#252c3e"}
                _hover={{ bg: "#545454" }}
                className="MenuButton"
                onClick={() => setLang("DEUTSCH")}
              >
                Deutsch
              </MenuItem>
              <MenuItem
                _hover={{ bg: "#545454" }}
                className="MenuButton"
                onClick={() => setLang("ESPAÑOL")}
              >
                Español
              </MenuItem>
              <MenuItem
                _hover={{ bg: "#545454" }}
                className="MenuButton"
                onClick={() => setLang("ITALIANO")}
              >
                Italiano
              </MenuItem>
              <MenuItem
                _hover={{ bg: "#545454" }}
                className="MenuButton"
                onClick={() => setLang("FRANÇAIS")}
              >
                Français
              </MenuItem>
              <MenuItem
                _hover={{ bg: "#545454" }}
                className="MenuButton"
                onClick={() => setLang("РУССКИЙ")}
              >
                Русский
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;
