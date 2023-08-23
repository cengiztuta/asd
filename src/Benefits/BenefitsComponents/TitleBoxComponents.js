import React, { useState } from "react";
import "../Benefits.css";
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

const TitleBoxComponents = () => {
  const [isExpandedOne, setIsExpandedOne] = useState(true);
  const [isExpandedTwo, setIsExpandedTwo] = useState(false);
  const [isExpandedThree, setIsExpandedThree] = useState(false);
  const [isExpandedFour, setIsExpandedFour] = useState(false);

  const toggleCollapseOne = () => {
    setIsExpandedOne(!isExpandedOne);
    setIsExpandedTwo(false);
    setIsExpandedThree(false);
    setIsExpandedFour(false);
  };
  const toggleCollapseTwo = () => {
    setIsExpandedTwo(!isExpandedTwo);
    setIsExpandedOne(false);
    setIsExpandedThree(false);
    setIsExpandedFour(false);
  };
  const toggleCollapseThree = () => {
    setIsExpandedTwo(false);
    setIsExpandedOne(false);
    setIsExpandedThree(!isExpandedThree);
    setIsExpandedFour(false);
  };
  const toggleCollapseFour = () => {
    setIsExpandedFour(!isExpandedFour);
    setIsExpandedTwo(false);
    setIsExpandedThree(false);
    setIsExpandedOne(false);
  };
  return (
    <div>
      <Button
        _hover={{ bg: "#545454" }}
        className="spoiler-title-box"
        onClick={toggleCollapseOne}
      >
        <h4 className="spoiler-title-text">
          Convenient Digital QR Code or Classic Smart Card
        </h4>
      </Button>
      <Collapse
        in={isExpandedOne}
        animateOpacity
        style={{
          height: "122px",
          width: "636px",
          backgroundColor: "red",
          marginLeft: "20px",
        }}
      >
        <VStack align="start" spacing="4">
          <Text className="spoiler-text">
            <div>
              <Text>
                Prague Card, the popular multi-attraction pass enjoyed by more
                than 1 million visitors since 1992, is now coming up with its
                new mobile generation product - Prague CoolPass.
              </Text>

              <Text>
                To access the best Prague attractions in a convenient way, you
                can choose between a digital QR Code in your mobile or a classic
                physical smart card.
              </Text>
            </div>
          </Text>
        </VStack>
      </Collapse>

      <Button
        _hover={{ bg: "#545454" }}
        className="spoiler-title-box"
        onClick={toggleCollapseTwo}
      >
        <h4 className="spoiler-title-text">Free Access to 60+ Attractions</h4>
      </Button>
      <Collapse in={isExpandedTwo} animateOpacity>
        <VStack align="start" spacing="4">
          <Text className="spoiler-text">
            <Text>
              Visit Prague Castle with its splendid St. Vitus Cathedral, see
              world-famous Jewish Museum and its synagogues, top attractions
              like National Museum or the popular Prague ZOO, take a sightseeing
              bus tour and a romantic cruise along the Vltava river... All these
              and much more - 70+ attractions are available for free with
              CoolPass.
            </Text>
          </Text>
        </VStack>
      </Collapse>

      <Button
        _hover={{ bg: "#545454" }}
        className="spoiler-title-box"
        onClick={toggleCollapseThree}
      >
        <h4 className="spoiler-title-text">
          EXCLUSIVE OFFERS & DISCOUNTS UP TO 50% OFF
        </h4>
      </Button>
      <Collapse in={isExpandedThree} animateOpacity>
        <VStack align="start" spacing="4">
          <Text className="spoiler-text">
            <Text>
              To add even more value to your trip, CoolPass includes cost-saving
              discounts on accessing other 60+ attractions, tours, cruises,
              entertainment shows, shopping and dining options. Pick your
              favourites and get some remarkable deals!
            </Text>
          </Text>
        </VStack>
      </Collapse>

      <Button
        _hover={{ bg: "#545454" }}
        className="spoiler-title-box"
        onClick={toggleCollapseFour}
      >
        <h4 className="spoiler-title-text">FREE MOBILE APP</h4>
      </Button>
      <Collapse in={isExpandedFour} animateOpacity>
        <VStack align="start" spacing="4">
          <Text className="spoiler-text">
            <Text>
              Download free our Prague CoolPass App where you can browse the
              attractions, filter them by their types, tourist areas or your
              interests. You can find the opening hours, nearest public
              transport stop, plan your own route by marking favourite places,
              be informed about closures and changes, use navigation to the
              attractions and much more. All information is available offline,
              and as an information and navigation source the App is free for
              everybody.
            </Text>
            <Text>
              In the App, you can also buy and download your CoolPass and use it
              on your smartphone to enter the included attractions.
            </Text>
          </Text>
        </VStack>
      </Collapse>
    </div>
  );
};
export default TitleBoxComponents;
