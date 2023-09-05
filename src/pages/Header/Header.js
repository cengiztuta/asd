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
const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
                BUY ONLINE
              </Button>
            ) : (
              <Menu className="ButtonMenu">
                <MenuButton
                  _hover={{ bg: "#545454" }}
                  className="asd"
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  ENGLISH
                </MenuButton>
                <MenuList _hover={{ bg: "#545454" }} className="ButtonMenu">
                  <MenuItem _hover={{ bg: "#545454" }} className="MenuButton">
                    ENGLISH
                  </MenuItem>
                  <MenuItem _hover={{ bg: "#545454" }} className="MenuButton">
                    TÜRKÇE
                  </MenuItem>
                  <MenuItem _hover={{ bg: "#545454" }} className="MenuButton">
                    DEUTCH
                  </MenuItem>
                  <MenuItem _hover={{ bg: "#545454" }} className="MenuButton">
                    Delete
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <motion.div
            initial={{ opacity: 0, height: 0 }} // Başlangıç değerleri
            animate={{
              opacity: 1,
              height: isOpen ? "auto" : 0,
            }} // Açılırken yavaşça açılır, kapanırken de yavaşça kapanır
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
                  <a className="navbar-link">ATTRACTIONS</a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">GET YOUR PASS</a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">PLAN YOUR TRIP</a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">CURRENT NEWS</a>
                </div>
                <div className="center-nav-container">
                  <a className="navbar-link">FAQ </a>
                </div>

                <Button _hover={{ bg: "#FF9848" }} className="ButtonOne">
                  BUY ONLINE
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
          <Text className="HeadMidText">ATTRACTIONS </Text>
          <Text className="HeadMidText">GET YOUR PASS </Text>
          <Text className="HeadMidText">PLAN YOUR TRIP </Text>
          <Text className="HeadMidText">CURRENT NEWS </Text>
          <Text className="HeadMidText">FAQ </Text>
        </div>
        <div className="HeadButtons">
          <Button _hover={{ bg: "#FF9848" }} className="ButtonOne">
            BUY ONLINE
          </Button>
          <Menu className="ButtonMenu">
            <MenuButton
              _hover={{ bg: "#545454" }}
              className="asd"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              ENGLISH
            </MenuButton>
            <MenuList _hover={{ bg: "#545454" }} className="ButtonMenu">
              <MenuItem _hover={{ bg: "#545454" }} className="MenuButton">
                ENGLISH
              </MenuItem>
              <MenuItem _hover={{ bg: "#545454" }} className="MenuButton">
                TÜRKÇE
              </MenuItem>
              <MenuItem _hover={{ bg: "#545454" }} className="MenuButton">
                DEUTCH
              </MenuItem>
              <MenuItem _hover={{ bg: "#545454" }} className="MenuButton">
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;
