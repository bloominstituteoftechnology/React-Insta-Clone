import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import HeaderUserIcon from "./User/HeaderUserIcon";
import { Instagram, Compass, Heart } from "react-feather";
import dividerImage from "../../Images/Header/header-divider.png";
import logoImage from "../../Images/Header/header-logo.png";
import styled from "styled-components";
import PropTypes from "prop-types";

/***************************************************************************************************
 ********************************************** Styles **********************************************
 ***************************************************************************************************/
const DivHeaderMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  margin: 0 0 20px 0;
  padding: 25px 0;
  background-color: lightsteelblue;
`;

const DivLeftSide = styled.div`
  width: 18%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 25px;
`;

const DivRightSide = styled.div`
  width: 17%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ImgHeaderLogo = styled.img`
  width: 60%;
`;

const headerIconStyle = { cursor: "pointer" };

/***************************************************************************************************
 ********************************************* Component ********************************************
 ***************************************************************************************************/
const Header = props => {
  return (
    <DivHeaderMain>
      <DivLeftSide>
        <Instagram style={headerIconStyle} size={48} />
        <img src={dividerImage} alt="" />
        <ImgHeaderLogo src={logoImage} alt="" />
      </DivLeftSide>
      <SearchBar setSearchResults={props.setSearchResults} />
      <DivRightSide>
        <Compass style={headerIconStyle} size={48} />
        <Heart style={headerIconStyle} size={48} />
        <HeaderUserIcon user={props.user} />
      </DivRightSide>
    </DivHeaderMain>
  );
};

Header.propTypes = {
  setSearchResults: PropTypes.func,
  user: PropTypes.object
};

export default Header;
