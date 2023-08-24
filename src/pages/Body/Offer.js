import React, { useState } from "react";
import "./Offer.css";
import offer1 from "../images/offer-1.jpg";
import offer2 from "../images/offer-2.jpg";
import offer3 from "../images/offer-3.jpg";
import offer4 from "../images/offer-4.jpg";
import { Button } from "@chakra-ui/react";

const Offer = () => {
  const [show, setShow] = useState(null);
  return (
    <section className="offer">
      <div className="offer-content">
        <h3 className="h3">ALL-INCLUSIVE OFFER FOR YOUR PRAGUE SIGHTSEEING</h3>
        <div className="pop-up-content-top">
          <div
            className="pop-up"
            style={{
              backgroundImage: `url(${offer1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="pop-up-title">
              {" "}
              <h3 className="pop-up-title-h3"> MUSEUMS AND OTHER SIGHTS</h3>
            </div>
          </div>

          <div
            className="pop-up"
            style={{
              backgroundImage: `url(${offer2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="pop-up-title">
              {" "}
              <h3 className="pop-up-title-h3">
                "PRAGUE HISTORICAL CITY" - FREE BUS TOUR{" "}
              </h3>
            </div>
          </div>
        </div>

        <div className="pop-up-content-bottom">
          <div
            onMouseEnter={() => setShow("popup3")}
            onMouseLeave={() => setShow(null)}
            className={`pop-up ${show === "popup3" ? "active" : ""}`}
            style={{
              backgroundImage: `url(${offer3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {show === "popup3" ? (
              <div className="hovered">
                <div>
                  <h3 className="pop-up-text-title">
                    CONCERTS, SHOWS, ENTERTAINMENT
                  </h3>
                  <div className="pop-up-text">
                    <p>
                      Prague has fantastic opportunities for leisure time. Taste
                      local cuisine and watch folk performances, enjoy exquisite
                      classical music concerts in authentic surroundings or
                      visit a unique Black light theatre. You will find all of
                      these and more in cost-saving deals for Prague CoolPass
                      holders.{" "}
                    </p>
                  </div>
                  <div className="pop-up-button-content">
                    <Button
                      _hover={{ bg: "#FF9848" }}
                      className="pop-up-button"
                    >
                      BUY ONLINE
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="pop-up-title">
                {" "}
                <h3 className="pop-up-title-h3">
                  {" "}
                  FREE CRUSIES ON THE VLTAVA RIVER
                </h3>
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => setShow("popup4")}
            onMouseLeave={() => setShow(null)}
            className={`pop-up ${show === "popup4" ? "active" : ""}`}
            style={{
              backgroundImage: `url(${offer4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {show === "popup4" ? (
              <div className="hovered">
                <div>
                  <h3 className="pop-up-text-title">
                    CONCERTS, SHOWS, ENTERTAINMENT
                  </h3>
                  <div className="pop-up-text">
                    <p>
                      Prague has fantastic opportunities for leisure time. Taste
                      local cuisine and watch folk performances, enjoy exquisite
                      classical music concerts in authentic surroundings or
                      visit a unique Black light theatre. You will find all of
                      these and more in cost-saving deals for Prague CoolPass
                      holders.{" "}
                    </p>
                  </div>
                </div>
                <div className="pop-up-button-content">
                    <Button
                      _hover={{ bg: "#FF9848" }}
                      className="pop-up-button"
                    >
                      BUY ONLINE
                    </Button>
                  </div>
              </div>
            ) : (
              <div className="pop-up-title">
                <h3 className="pop-up-title-h3">
                  CONCERTS, SHOWS, ENTERTAIMENT
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
