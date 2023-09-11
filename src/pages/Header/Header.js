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
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Header = () => {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("ENGLISH");

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
                {t("translation.BUY_NOW")}
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
                  <MenuItem
                    _hover={{ bg: "#545454" }}
                    className="MenuButton"
                    onClick={function (event) {
                      handleClick("en");
                      setLang("ENGLISH");
                    }}
                  >
                    English
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "#545454" }}
                    className="MenuButton"
                    onClick={function (event) {
                      handleClick("cs");
                      setLang("Čeština");
                    }}
                  >
                    Čeština
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "#545454" }}
                    className="MenuButton"
                    onClick={function (event) {
                      handleClick("de");
                      setLang("DEUTSCH");
                    }}
                  >
                    Deutsch
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "#545454" }}
                    className="MenuButton"
                    onClick={function (event) {
                      handleClick("es");
                      setLang("ESPAÑOL");
                    }}
                  >
                    Español
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "#545454" }}
                    className="MenuButton"
                    onClick={function (event) {
                      handleClick("it");
                      setLang("ITALIANO");
                    }}
                  >
                    Italiano
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "#545454" }}
                    className="MenuButton"
                    onClick={function (event) {
                      handleClick("fr");
                      setLang("FRANÇAIS");
                    }}
                  >
                    Français
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "#545454" }}
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
                  <a className="navbar-link">{t("translation.ATTRACTIONS")}</a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">
                    {t("menu.5a7a894f66105c2e28d87bd3.title")}
                  </a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">
                    {t("menu.5a7a896166105c2e28d87bd4.title")}
                  </a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">
                    {t("translation.HOME_news_title")}
                  </a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">{t("translation.FAQ")} </a>
                </div>

                <Button _hover={{ bg: "#FF9848" }} className="ButtonOne">
                  {t("translation.BUY_NOW")}
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
          <Text className="HeadMidText">{t("translation.ATTRACTIONS")} </Text>
          <Text className="HeadMidText">
            {t("menu.5a7a894f66105c2e28d87bd3.title")}{" "}
          </Text>
          <Text className="HeadMidText">
            {t("menu.5a7a896166105c2e28d87bd4.title")}{" "}
          </Text>
          <Text className="HeadMidText">
            {" "}
            {t("translation.HOME_news_title")}
          </Text>
          <Text className="HeadMidText">{t("translation.FAQ")} </Text>
        </div>
        <div className="HeadButtons">
          <Button _hover={{ bg: "#FF9848" }} className="ButtonOne">
            {t("translation.BUY_NOW")}
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
              <MenuItem
                _hover={{ bg: "#545454" }}
                className="MenuButton"
                onClick={function (event) {
                  handleClick("en");
                  setLang("ENGLISH");
                }}
              >
                English
              </MenuItem>
              <MenuItem
                _hover={{ bg: "#545454" }}
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
                _hover={{ bg: "#545454" }}
                className="MenuButton"
                onClick={function (event) {
                  handleClick("de");
                  setLang("DEUTSCH");
                }}
              >
                Deutsch
              </MenuItem>
              <MenuItem
                _hover={{ bg: "#545454" }}
                className="MenuButton"
                onClick={function (event) {
                  handleClick("es");
                  setLang("ESPAÑOL");
                }}
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
                onClick={function (event) {
                  handleClick("fr");
                  setLang("FRANÇAIS");
                }}
              >
                Français
              </MenuItem>
              <MenuItem
                _hover={{ bg: "#545454" }}
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

export default Header;
