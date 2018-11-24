import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { User as FeatherUserIcn } from "react-feather";
import UserIconDropdown from "./UserIconDropdown";

/***************************************************************************************************
 ********************************************** Styles *********************************************
 ***************************************************************************************************/
const defaultUserIcon = {
  css: { cursor: "pointer", userSelect: "none" },
  featherIcnSize: 48
};

const ImgUserIcon = styled.img`
  width: 30%;
  cursor: pointer;
  user-select: none;
`;

const DivUserIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 15px;
  left: -41px;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 ***************************************************************************************************/

const HeaderUserIcon = props => {
  const UserIcon =
    props.user.thumbnailUrl === "default" ? (
      <DivUserIcon className="UserIconDropdown">
        <FeatherUserIcn
          style={defaultUserIcon.css}
          size={defaultUserIcon.featherIcnSize}
          onClick={() => props.toggleUserIconDropdown()}
          className="UserIconDropdown"
        />
        <UserIconDropdown
          username={props.user.username}
          logout={props.logout}
          isUserIconSelected={props.isUserIconSelected}
          className="UserIconDropdown"
        />
      </DivUserIcon>
    ) : (
      <DivUserIcon className="UserIconDropdown">
        <ImgUserIcon
          src={props.user.thumbnailUrl}
          onClick={() => props.toggleUserIconDropdown()}
          className="UserIconDropdown"
        />
        <UserIconDropdown
          username={props.user.username}
          logout={props.logout}
          isUserIconSelected={props.isUserIconSelected}
          className="UserIconDropdown"
        />
      </DivUserIcon>
    );

  return UserIcon;
};

HeaderUserIcon.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
    thumbnailUrl: PropTypes.string
  }),
  logout: PropTypes.func,
  isUserIconSelected: PropTypes.bool,
  toggleUserIconDropdown: PropTypes.func
};

export default HeaderUserIcon;
