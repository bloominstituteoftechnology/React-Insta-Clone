import React from "react";
import "./SearchBar";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconContainer = styled.div`
  width: 15%;
  float: right;
  display: flex;
  justify-content: space-around;
`;

const IconLinks = () => {
  return (
    <IconContainer>
      <FontAwesomeIcon icon={["far", "compass"]} size="2x" />
      <FontAwesomeIcon icon={["far", "heart"]} size="2x" />
      <FontAwesomeIcon icon={["far", "user"]} size="2x" />
    </IconContainer>
  );
};

export default IconLinks;
