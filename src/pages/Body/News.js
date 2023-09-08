import React,{useState,useEffect} from "react";
import "./News.css";
import { Button, Text } from "@chakra-ui/react";
import News1 from "../images/News1.jpg";
import { Newss } from "./Newss";
import axios from "axios";

const News = () => {
  const [tempDataTwo, setTempDataTwo] = useState([]);
  const getOffersTempTwo = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/translation"
      );
      return response.data.en;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  console.log(tempDataTwo);
  const fetchTempDataTwo = async () => {
    const data = await getOffersTempTwo();
    setTempDataTwo(data);
  };
  useEffect(() => {
    fetchTempDataTwo();
  }, []);
  return (
    <div className="News">
      <div className="News-container">
        <h3 className="newss-h3"> {tempDataTwo.HOME_news_title}</h3>
        <Newss />
      </div>
    </div>
  );
};

export default News;
