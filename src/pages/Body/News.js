import React from "react";
import "./News.css";
import { Button, Text } from "@chakra-ui/react";
import News1 from "../images/News1.jpg";
import { Newss } from "./Newss";

const News = () => {
  return (
    <div className="News">
      <div className="News-container">
        <h3 className="h3"> Latest News</h3>
        <Newss />
     
      </div>
    </div>
  );
};

export default News;
