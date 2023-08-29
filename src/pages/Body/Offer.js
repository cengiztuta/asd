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
        <a className="h3">ALL-INCLUSIVE OFFER FOR YOUR PRAGUE SIGHTSEEING</a>
        <div className="pop-up-content-top">
          <div
            onMouseEnter={() => setShow("popup1")}
            onMouseLeave={() => setShow(null)}
            className={`pop-up ${show === "popup1" ? "active" : ""}`}
            style={{
              backgroundImage: `url(${offer1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {" "}
            {show === "popup1" ? (
              <div className="hovered">
                <div>
                  <h3 className="pop-up-text-title">
                    MUSEUMS AND OTHER SIGHTS
                  </h3>
                  <div className="pop-up-text">
                    <p>
                      From the historical Prague Castle and Jewish Quarter with
                      its synagogues to the world-famous Prague ZOO, CoolPass
                      will give you access to almost every must-see sight in
                      Prague. Entry to most attractions is free with CoolPass,
                      others can be visited with a substantial discount.
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
                <h3 className="pop-up-title-h3"> MUSEUMS AND OTHER SIGHTS</h3>
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => setShow("popup2")}
            onMouseLeave={() => setShow(null)}
            className={`pop-up ${show === "popup2" ? "active" : ""}`}
            style={{
              backgroundImage: `url(${offer2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {show === "popup2" ? (
              <div className="hovered">
                <h3 className="pop-up-text-title">
                  "PRAGUE HISTORICAL CITY" - FREE BUS TOUR
                </h3>
                <div className="pop-up-text">
                  <p>
                    This fantastic tour will show you all the Prague top
                    landmarks. As you sit back and relax in a comfortable bus
                    seat, best views of the Golden City will be passing in front
                    of your eyes – Old Town, Lesser Town, Jewish Quarter and
                    many more. Plus it is a convenient way to reach the Prague
                    Castle area, where you can use the bus in Hop-On Hop-Off
                    way. The tour is free with CoolPass.
                  </p>
                </div>
                <div className="pop-up-button-content">
                  <Button _hover={{ bg: "#FF9848" }} className="pop-up-button">
                    BUY ONLINE
                  </Button>
                </div>
              </div>
            ) : (
              <div className="pop-up-title">
                {" "}
                <h3 className="pop-up-title-h3">
                  "PRAGUE HISTORICAL CITY" - FREE BUS TOUR{" "}
                </h3>
              </div>
            )}
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
                    FREE CRUISES ON THE VLTAVA RIVER
                  </h3>
                  <div className="pop-up-text">
                    <p>
                      What can be better than admiring the elegant postcard
                      views of Prague from water. Should it be your first
                      acquaintance with the city, or a way to chill after a busy
                      sightseeing walk, the pleasure is equal. You can choose
                      one of the 4 cruises by Prague Boats to enjoy for free
                      with CoolPass, as well as a romantic Prague Venice cruise.
                      Other cruises with 25% discount include great dining
                      options.
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
                  <Button _hover={{ bg: "#FF9848" }} className="pop-up-button">
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
