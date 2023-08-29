import React, { useEffect, useState } from "react";
import Header from "./pages/Header/Header";
import Slider from "./pages/Slider/Slider";
import Body from "./pages/Body/Body";
import Footer from "./pages/Footer/Footer";
import axios from "axios";

const Main = () => {
  const [attractions, setAttraction] = useState([]);
  const getMenu = async () => {
    try {
      const response = await axios.get(
        "https://api2.praguecoolpass.com/review/card"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchTranslate = async () => {
    const data = await getMenu();
    setAttraction(data);
  };

  useEffect(() => {
    fetchTranslate();
  }, []);

  return (
    <div>
      <Header />
      <Slider />
      <Body />
      <Footer />
      {/* <div
        style={{
          height: "250px",
          width: "100%",
          background: "red",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {attractions &&
          attractions.map((attraction) => (
            <li key={attraction.type}>
              <a style={{ color: "black", fontSize:'15px' }}> {attraction.name} </a>
            </li>
          ))}
      </div> */}
    </div>
  );
};

export default Main;
