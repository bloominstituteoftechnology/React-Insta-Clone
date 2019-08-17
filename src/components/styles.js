import React from "react";
import styled from "styled-components";

export const StyledSearchBar = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  height: 70px;
  align-items: center;
  top: 0px;
  background-color: white;
  border-bottom: 1px solid lightgrey;
`;

export const StyledSearchBarContainer = styled.div`
  width: 950px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const StyledH1 = styled.h1`
  font-family: "Pacifico", cursive;
  font-weight: lighter;
`;

export const StyledSearchFormDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center
`;

export const StyledSearchBarIcons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20%
`;