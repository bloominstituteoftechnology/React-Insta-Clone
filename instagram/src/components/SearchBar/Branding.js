import React from "react";
import "./SearchBar";
import logo from "./logo-instagram.png";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BrandingContainer = styled.div`
  display: flex;
  justify-content: space-around;
  float: left;
  width: 20%;
  align-items: center;
  padding: 0 1%;
`;

const LogoContainer = styled.div`
  margin-left: 2%;
  height: 35px;
`;
const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  padding-left: 15%;
  padding-top: 5%;
  border-left: 1px solid grey;
`;

const Branding = () => {
  return (
    <BrandingContainer>
      <FontAwesomeIcon
        icon={["fab", "instagram"]}
        size="2x"
        className="camera-logo"
      />
      <LogoContainer>
        <Logo src={logo} alt="instagram typescript" />
      </LogoContainer>
    </BrandingContainer>
  );
};

export default Branding;
