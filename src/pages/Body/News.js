import React from "react";
import "./News.css";
import { Button, Text } from "@chakra-ui/react";
import News1 from "../images/News1.jpg";

const News = () => {
  return (
    <div className="News">
      <div className="News-container">
        <h3 className="h3"> Latest News</h3>
        <div className="News-top-content">
          <div className="vemem" style={{ backgroundImage: `url(${News1})` }}>
            {" "}
            <div className="date"> 02.06.2023 </div>
          </div>
          <div className="News-text">
            <div>
              <a
                href="/article-page/pilsner-urquell-new-attraction"
                className="News-title"
              >
                ENGAGE ALL YOUR SENSES DISCOVERING THE STORY OF PILSNER URQUELL
                BEER
              </a>

              <p>
                Prague is famous as the world’s beer-drinking capital and
                recently it became home to a fantastic multimedia attraction,
                telling the story of Czechia’s best-known beer brand. Pilsner
                Urquell Experience welcomes visitors to an immersive adventure,
                whereby they can follow the story of this iconic drink, enjoy
                tasting and even try to pour it like a professional.{" "}
              </p>
              <p style={{ height: "15px" }}>
                <br />
              </p>
              <p>
                Created in the city of Plzeň (western Bohemia) in the 1840s and
                still brewed to its original recipe, Pilsner Urquell has an
                important place in the country’s history and culture. And now
                you don’t have to travel far to...
              </p>
              <a
                href="/article-page/pilsner-urquell-new-attraction"
                className="News-text-more"
              >
                See More
              </a>
            </div>
          </div>
        </div>

        <div className="News-bottom-content">
          <div className="News-Bottom-text">
            <div>
              <a
                href="/article-page/pilsner-urquell-new-attraction"
                className="News-title"
              >
                SPRING INSPIRATION: CZECHOSLOVAKIA OF THE 1970S, MEISSEN
                PORCELAIN AND THE TALLEST TOWER IN PRAGUE
              </a>
              <p>
                When you have seen enough of Prague top landmarks, it could be a
                good idea to step off-the-beaten path and explore unusual
                sights. Find out the novelties that CoolPass has in store for
                you this April and feel the different spirit of Prague – perhaps
                yet unknown.
              </p>
              <p style={{ height: "15px" }}>
                <br />
              </p>{" "}
              <div>
                <p>
                  <a
                    className="retro-museum"
                    href="https://praguecoolpass.com/attraction/retro-museum"
                  >
                    Retro Museum
                  </a>
                  located in Kotva Department Store (Náměstí Republiky) is a
                  unique opportunity to travel to the former Czechoslovakia – as
                  it appeared 50 years ago. In this well-designed space you can
                  fully immer...
                </p>{" "}
              </div>
              <a
                href="/article-page/pilsner-urquell-new-attraction"
                className="News-text-more"
                target="blank"
              >
                See More
              </a>
            </div>
          </div>
          <div className="vemem" style={{ backgroundImage: `url(${News1})` }}>
            <div className="date"> 27.04.2023 </div>
          </div>
        </div>
        <Button _hover={{ bg: "#FF9848" }} className="News-button">
          {" "}
          SEE ALL NEWS
        </Button>
      </div>
    </div>
  );
};

export default News;
