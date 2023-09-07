import React, { useState } from "react";
import "../Customer.css";
import { Text } from "@chakra-ui/react";
import activeStarImage from "../../images/active-star.png";
import inactiveStarImage from "../../images/star.png";
const CustomerCard = ({ card }) => {
  const [expanded, setExpanded] = useState(false);
  const {
    id,
    text,
    name,
    email,
    language,
    rating,
    date,
    place,
    title,
    status,
    type,
  } = card;

  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", options);
  };
  function ExpandableText({ initialText, expandedText }) {
    const toggleExpand = () => {
      setExpanded(!expanded);
    };
    const maxStars = 5;
    const activeStars = Math.min(Math.max(0, rating), maxStars);
    const inactiveStars = maxStars - activeStars;
    return (
      <div className="customer-text-container">
        <div className="customer-text">
          {expanded ? expandedText : initialText}
          <a onClick={toggleExpand} className="more-less-button">
            {expanded ? "less " : "more"}
          </a>
        </div>
      </div>
    );
  }
  const maxStars = 5;
  const activeStars = Math.min(Math.max(0, rating), maxStars);
  const inactiveStars = maxStars - activeStars;

  const initialText = <a> {text.slice(0, 100) + "..."}</a>;

  const expandedText = <a>{text} </a>;
  return (
    <div className={`customer-card ${expanded ? "expanded" : ""}`}>
      <div className="customer-card-header">
        <div className="stars-rating">
          {Array.from({ length: activeStars }, (_, index) => (
            <img
              key={`active-star-${index}`}
              src={activeStarImage}
              alt="Active Star"
              style={{
                height: "20px",
                width: "20px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
          {Array.from({ length: inactiveStars }, (_, index) => (
            <img
              key={`inactive-star-${index}`}
              src={inactiveStarImage}
              alt="Inactive Star"
              style={{
                height: "20px",
                width: "20px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
        <div className="customer-summary">{title}</div>
        <div className="customer-date">{formatDate(date)}</div>
      </div>
      <div className="customer-body">
        {" "}
        <ExpandableText
          key={text}
          initialText={initialText}
          expandedText={expandedText}
        />{" "}
      </div>
      <div className="customer-footer">
        {" "}
        <div className="customer-data">
          {" "}
          {name}, {place}{" "}
        </div>
        <div className="see-translation"></div>
      </div>
    </div>
  );
};

export default CustomerCard;

{
  /* <ExpandableText
initialText={initialText}
expandedText={expandedText}
/>{" "} */
}
