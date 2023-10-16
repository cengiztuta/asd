import React from "react";
import { Box } from "@chakra-ui/react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
const TableContainer = ({
  attractionsFilteredCardData,
  cardLength,
  filledItems,
  lng,
  FavoriteArea,
}) => {
  const api = process.env.REACT_APP_IMAGE_URL;
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th colSpan={2} className="attractions-summary"></th>
            <th className="price-title">Normal Entry Price (Adult/Student)</th>
            <th className="benefit-col">CoolPass benefit</th>
            <th className="like-col"></th>
          </tr>
        </thead>
        <tbody>
          {attractionsFilteredCardData
            .slice(0, cardLength)
            .map((item, index) => (
              <tr key={index}>
                <td className="attraction-image-col">
                  <div
                    className="attraction-image"
                    style={{
                      backgroundImage: `url(${api}${item.webimages[0]})`,
                    }}
                  >
                    {" "}
                  </div>
                </td>
                <td className="attraction-row">{item.content[lng]?.title} </td>
                <td className="price">
                  {item?.priceAdult}Kč / {item.priceStudent} Kč
                </td>
                <td className="benefit-value"> {item?.benefit} </td>
                <td className="like-col">
                  <Box className="like-button">
                    {filledItems[index] ? (
                      <HiHeart
                        className="area-heart-image"
                        onClick={() => FavoriteArea(index)}
                      />
                    ) : (
                      <HiOutlineHeart
                        className="area-heart-image"
                        onClick={() => FavoriteArea(index)}
                      />
                    )}
                  </Box>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableContainer;
