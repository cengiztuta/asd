import React, { useState } from "react";
import "../Customer.css";
import { Text } from "@chakra-ui/react";

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

  function ExpandableText({ initialText, expandedText }) {
  

    const toggleExpand = () => {
      setExpanded(!expanded);
    };
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

  const initialText = <a> {text.slice(0, 100) + "..."}</a>;

  const expandedText = <a>{text} </a>;
  return (
    <div  className={`customer-card ${expanded ? 'expanded' : ''}`}>
      <div className="customer-card-header">
        <div className="stars-rating">{rating}</div>
        <div className="customer-summary">{title}</div>
        <div className="customer-date">{date}</div>
      </div>
      <div className="customer-body">
        {" "}
        <a className="customer-body-text">
          {" "}
          <ExpandableText
            key={text}
            initialText={initialText}
            expandedText={expandedText}
          />{" "}
        </a>
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
