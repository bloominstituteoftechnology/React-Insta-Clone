import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Settings, Triangle } from "react-feather";

/***************************************************************************************************
 ********************************************** Styles *********************************************
 ***************************************************************************************************/
const DivDropdown = styled.div`
  position: relative;
`;

const LiDivider = styled.li`
  border: 0.5px solid black;
  margin: 20px 20px;
`;

const LiItem = styled.li`
  background-color: inherit;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  transition: background-color 0.3s ease-in-out;
  text-align: center;
  user-select: none;

  &:hover {
    background-color: gray;
    color: white;
  }

  & div {
    display: flex;
    align-items: center;
  }
`;

const UlDropdown = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: lightgray;
  position: absolute;
  transform: translate(-50%);
  top: 100%;
  left: 50%;

  ${props =>
    props.isUserIconSelected
      ? css`
          overflow: auto;
          overflow-y: hidden;
          max-height: 500px;
          transition: max-height 0.3s ease-in;
          box-shadow: -1px 3px 10px 1px rgba(0, 0, 0, 0.3);
        `
      : css`
          overflow: hidden;
          max-height: 0;
          transition-property: max-height, box-shadow;
          transition-duration: 0.1s;
          transition-timing-function: ease-out;
        `}
`;

const isUserIconClicked = isUserIconSelected =>
  isUserIconSelected ? null : TriangleRotate;

const TriangleRotate = {
  transform: "rotate(180deg)"
};

const DivBorder = styled.div`
  border: 1px inset black;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 ***************************************************************************************************/
const UserIconDropdown = props => {
  return props.username === "Guest" ? (
    <DivDropdown className="UserIconDropdown">
      <Triangle
        style={isUserIconClicked(props.isUserIconSelected)}
        fill="black"
        className="UserIconDropdown"
      />
      <UlDropdown isUserIconSelected={props.isUserIconSelected}>
        <DivBorder>
          <LiItem onClick={() => props.logout()}>Logout</LiItem>
        </DivBorder>
      </UlDropdown>
    </DivDropdown>
  ) : (
    <DivDropdown className="UserIconDropdown">
      <Triangle
        style={isUserIconClicked(props.isUserIconSelected)}
        fill="black"
        className="UserIconDropdown"
      />
      <UlDropdown isUserIconSelected={props.isUserIconSelected}>
        <DivBorder>
          <LiItem>Edit&nbsp;Profile</LiItem>
          <LiItem>
            <div>
              <Settings />
              &nbsp;Settings
            </div>
          </LiItem>
          <LiDivider />
          <LiItem onClick={() => props.logout()}>Logout</LiItem>
        </DivBorder>
      </UlDropdown>
    </DivDropdown>
  );
};

UserIconDropdown.propTypes = {
  username: PropTypes.string,
  logout: PropTypes.func,
  isUserIconSelected: PropTypes.bool
};

export default UserIconDropdown;
