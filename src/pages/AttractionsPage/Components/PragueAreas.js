import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const PragueAreas = () => {
  const [regionsData, setRegionsData] = useState([]);
  const [show, setShow] = useState(false);
  const DataURL = process.env.REACT_APP_DATA_URL;
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const areaIndex = [1, 11, 12, 16, 15, 2, 3, 13];
  const api = process.env.REACT_APP_IMAGE_URL;

  const getRegionsData = async () => {
    try {
      const response = await axios.get(`${DataURL}area`);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const fetchRegionsData = async () => {
    const data = await getRegionsData();
    setRegionsData(data);
  };
  useEffect(() => {
    fetchRegionsData();
  }, []);
  return (
    <div className="areas-wrapper">
      {areaIndex.map((index) => (
        <div
          className="area-card"
          style={{
            backgroundImage: `url(${api}${regionsData[index - 1]?.images[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
          }}
          key={index}
        >
          <Box
            className="free-card-footer"
            onMouseEnter={() => setShow(index)}
            onMouseLeave={() => setShow(false)}
          >
            <Box className="free-card-footer-content">
              <p className="free-card-title">
                {regionsData[index - 1]?.content[lng]?.title}
              </p>
            </Box>
            ;
            {show === index && (
              <Box className="free-card-footer-text-content">
                <Text className="free-card-footer-text" key={index}>
                  {regionsData[index - 1]?.content?.en?.subtitle}
                </Text>
              </Box>
            )}
          </Box>
        </div>
      ))}
    </div>
  );
};

export default PragueAreas;
