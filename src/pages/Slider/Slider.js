import React from "react";
import "./Slider.css";
import ImageSlider from "./ImageSlider";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Slider = () => {
  return (
    <div id="app">
      <div className="Slider">
        <ImageSlider />
        <section
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div className="header-content">
            <div className="header-content-title">
              <h1 className="header-content-title-one">
                PRAGUE CARD IS NOW "COOLPASS"
              </h1>
              <h3 className="header-content-title-two">
                Visit the best city attractions included in Prague CoolPass
              </h3>
            </div>

            <div className="search-container">
              <div className="inputone">
                <input
                  className="dsadsa"
                  type="text"
                  placeholder="Search Attractions"
                />
                <SearchIcon color={"gray"} className="icon" />
              </div>
              <Button _hover={{ bg: "#FF9848" }} className="button">
                LET'S GO
              </Button>
            </div>
          </div>
        </section>
        <section className="underbar">
          <p className="underbar-text">
            Now you have a choice! Download the new DIGITAL PRAGUE COOLPASS
            straight to your mobile or collect the PHYSICAL PRAGUE CARD upon
            arrival
          </p>
        </section>
      </div>
    </div>
  );
};

export default Slider;
