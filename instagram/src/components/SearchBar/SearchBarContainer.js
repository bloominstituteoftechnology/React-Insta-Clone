/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import SearchBar from "./SearchBar";

const imageSizing = css`
  align-self: center;
  height: 25px;
  width: 25px;
`;

const searchHeaderContainer = css`
  display: grid;
  height: 70px;
  justify-content: space-between;
  align-content: center;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 100px;
  border-bottom: 1.2px solid black;
`;

const leftSearchContainer = css`
  grid-column: 1/2;
  grid-row: 1/2;
  align-self: center;
  display: grid;
  grid-gap: 30px;
`;

const rightSearchContainer = css`
  grid-column: 3/4;
  grid-row: 1/2;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;

const searchInstagramIcon = css`
  height: 30px;
  width: 110px;
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: center;
`;
const searchCameraIcon = css`
  grid-column: 1/2;
  grid-row: 1/2;
  border-right: 1px solid black;
  padding-right: 20px;
  ${imageSizing}
`;

function SearchBarContainer(props) {
  return (
    <div css={searchHeaderContainer}>
      <div css={leftSearchContainer}>
        <img
          src={require(`./Images/largeCamera.png`)}
          alt=""
          css={searchCameraIcon}
        />
        <img
          src={require(`./Images/largeInstagram.png`)}
          alt=""
          css={searchInstagramIcon}
        />
      </div>
      <SearchBar
        inputSearch={props.inputSearch}
        handleChange={props.handleChange}
      />
      <div css={rightSearchContainer}>
        <img
          src={require(`./Images/largeCompass.png`)}
          alt=""
          css={imageSizing}
        />
        <img
          src={require(`./Images/largeHeart.png`)}
          alt=""
          css={imageSizing}
        />
        <img
          src={require(`./Images/largePerson.png`)}
          alt=""
          css={imageSizing}
        />
      </div>
    </div>
  );
}

export default SearchBarContainer;
