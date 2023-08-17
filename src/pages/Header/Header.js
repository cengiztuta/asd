import React from "react";
import "./Header.css";
import { Button, Text } from "@chakra-ui/react";
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
import { ChevronDownIcon } from "@chakra-ui/icons";
const Header = () => {
  return (
    <>
      <div className="Header">
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
          <Button _hover={{bg:'#FF9848'}} className="ButtonOne">BUY ONLINE</Button>
          <Menu className="ButtonMenu">
            <MenuButton
              _hover={{ bg: '#545454' }}
              className="asd"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
             ENGLISH
            </MenuButton  >
            <MenuList  _hover={{ bg: '#545454' }} className="ButtonMenu">
              <MenuItem  _hover={{ bg: '#545454' }} className="MenuButton">ENGLISH</MenuItem>
              <MenuItem   _hover={{ bg: '#545454' }} className="MenuButton">TÜRKÇE</MenuItem>
              <MenuItem   _hover={{ bg: '#545454' }} className="MenuButton">DEUTCH</MenuItem>
              <MenuItem   _hover={{ bg: '#545454' }} className="MenuButton">Delete</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;
