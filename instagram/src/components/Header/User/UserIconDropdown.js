import React from "react";
import styled, { css } from "styled-components";
import { Settings, Triangle } from "react-feather";
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles **********************************************
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
  border: 1px solid black;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: lightgray;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%);
  box-shadow: -1px 3px 10px rgba(0, 0, 0, 0.3);

  ${props =>
    props.isUserIconSelected
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `}
`;

const isUserIconClicked = isUserIconSelected =>
  isUserIconSelected ? TriangleRotate : null;

const TriangleRotate = {
  transform: "rotate(180deg)"
};

/***************************************************************************************************
 ********************************************* Component ********************************************
 ***************************************************************************************************/
const UserIconDropdown = props => {
  return props.username === "Guest" ? (
    <DivDropdown>
      <Triangle
        style={isUserIconClicked(props.isUserIconSelected)}
        fill="black"
      />
      <UlDropdown isUserIconSelected={props.isUserIconSelected}>
        <LiItem>Logout</LiItem>
      </UlDropdown>
    </DivDropdown>
  ) : (
    <DivDropdown>
      <Triangle
        style={isUserIconClicked(props.isUserIconSelected)}
        fill="black"
      />
      <UlDropdown isUserIconSelected={props.isUserIconSelected}>
        <LiItem>Edit&nbsp;Profile</LiItem>
        <LiItem>
          <div>
            <Settings />
            &nbsp;Settings
          </div>
        </LiItem>
        <LiDivider />
        <LiItem>Logout</LiItem>
      </UlDropdown>
    </DivDropdown>
  );
};

// UserIconDropdown.propTypes = {
//   propertyName: PropTypes.number
// }

export default UserIconDropdown;
