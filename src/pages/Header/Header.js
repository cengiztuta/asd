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
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import axios from "axios";
import { fetchData } from "../../dataFetching";
import { setTempData } from "../../redux/action";
import { connect } from "react-redux";
const Header = ({ tempData }) => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("ENGLISH");
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [tempDataTwo, setTempDataTwo] = useState([]);
  const getOffersTempTwo = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/menu/5a7a894f66105c2e28d87bd3"
      );
      return response.data.content;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
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
        "https://api2.praguecoolpass.com/menu/5a7a896166105c2e28d87bd4"
      );
      return response.data.content;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchTempDataThree = async () => {
    const data = await getOffersTempThree();
    setTempDataThree(data);
  };
  useEffect(() => {
    fetchTempDataThree();
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
              <Menu className="ButtonMenu">
                <MenuButton
                  className="asd"
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  {lang}
                </MenuButton>
                <MenuList className="ButtonMenu">
                  <MenuItem
                    className="MenuButton"
                    onClick={function (event) {
                      handleClick("en");
                      setLang("ENGLISH");
                    }}
                  >
                    English
                  </MenuItem>
                  <MenuItem
                    className="MenuButton"
                    onClick={function (event) {
                      handleClick("cs");
                      setLang("Čeština");
                    }}
                  >
                    Čeština
                  </MenuItem>
                  <MenuItem
                    className="MenuButton"
                    onClick={function (event) {
                      handleClick("de");
                      setLang("DEUTSCH");
                    }}
                  >
                    Deutsch
                  </MenuItem>
                  <MenuItem
                    className="MenuButton"
                    onClick={function (event) {
                      handleClick("es");
                      setLang("ESPAÑOL");
                    }}
                  >
                    Español
                  </MenuItem>
                  <MenuItem
                    className="MenuButton"
                    onClick={function (event) {
                      handleClick("it");
                      setLang("ITALIANO");
                    }}
                  >
                    Italiano
                  </MenuItem>
                  <MenuItem
                    className="MenuButton"
                    onClick={function (event) {
                      handleClick("fr");
                      setLang("FRANÇAIS");
                    }}
                  >
                    Français
                  </MenuItem>
                  <MenuItem
                    className="MenuButton"
                    onClick={function (event) {
                      handleClick("ru");
                      setLang("РУССКИЙ");
                    }}
                  >
                    Русский
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button className="ButtonOne">{tempData[lng]?.BUY_NOW}</Button>
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
                  <a className="navbar-link">{tempData[lng]?.ATTRACTIONS}</a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">{tempDataTwo[lng]?.title}</a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">{tempDataThree[lng]?.title}</a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">
                    {tempData[lng]?.HOME_news_title}
                  </a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">{tempData[lng]?.FAQ} </a>
                </div>

                <Button className="ButtonOne">{tempData[lng]?.BUY_NOW}</Button>
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
          <Text className="HeadMidText">{tempData[lng]?.ATTRACTIONS} </Text>
          <Text className="HeadMidText">{tempDataTwo[lng]?.title} </Text>
          <Text className="HeadMidText">{tempDataThree[lng]?.title} </Text>
          <Text className="HeadMidText"> {tempData[lng]?.HOME_news_title}</Text>
          <Text className="HeadMidText">{tempData[lng]?.FAQ} </Text>
        </div>
        <div className="HeadButtons">
          <Button _hover={{ bg: "#FF9848" }} className="ButtonOne">
            {tempData[lng]?.BUY_NOW}
          </Button>
          <Menu className="ButtonMenu">
            <MenuButton
              className="asd"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              {lang}
            </MenuButton>
            <MenuList className="ButtonMenu">
              <MenuItem
                className="MenuButton"
                onClick={function (event) {
                  handleClick("en");
                  setLang("ENGLISH");
                }}
              >
                English
              </MenuItem>
              <MenuItem
                className="MenuButton"
                onClick={function (event) {
                  handleClick("cs");
                  setLang("Čeština");
                }}
              >
                Čeština
              </MenuItem>
              <MenuItem
                bg={"#252c3e"}
                className="MenuButton"
                onClick={function (event) {
                  handleClick("de");
                  setLang("DEUTSCH");
                }}
              >
                Deutsch
              </MenuItem>
              <MenuItem
                className="MenuButton"
                onClick={function (event) {
                  handleClick("es");
                  setLang("ESPAÑOL");
                }}
              >
                Español
              </MenuItem>
              <MenuItem
                className="MenuButton"
                onClick={function (event) {
                  handleClick("it");
                  setLang("ITALIANO");
                }}
              >
                Italiano
              </MenuItem>
              <MenuItem
                className="MenuButton"
                onClick={function (event) {
                  handleClick("fr");
                  setLang("FRANÇAIS");
                }}
              >
                Français
              </MenuItem>
              <MenuItem
                className="MenuButton"
                onClick={function (event) {
                  handleClick("ru");
                  setLang("РУССКИЙ");
                }}
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

const mapStateToProps = (state) => ({
  tempData: state.tempData,
});

export default connect(mapStateToProps, { setTempData })(Header);
