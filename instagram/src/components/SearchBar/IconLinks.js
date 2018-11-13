import React from "react";
import "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconLinks = () => {
  return (
    <div className="icon-links">
      <FontAwesomeIcon icon={["far", "compass"]} size="2x" />
      <FontAwesomeIcon icon={["far", "heart"]} size="2x" />
      <FontAwesomeIcon icon={["far", "user"]} size="2x" />
    </div>
  );
};

export default IconLinks;
