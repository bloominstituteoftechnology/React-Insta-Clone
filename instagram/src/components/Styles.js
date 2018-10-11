import React from "react";
import styled from "styled-components";

export const StyledSearchBarContainer = styled.div`
  max-width: 40%;
  border: 1px solid blue;
  background-color: gray;
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  margin: 0 auto 30px;
`;

export const StyledSearchBar = styled.input`
  width: 30%;
`;

export const StyledPost = styled.div`
  max-width: 40%;
  margin: 0 auto;
  border: 1px solid black;
  background-color: lightslategray;
  margin-bottom: 50px;
`;

export const UserDiv = styled.div`
  text-align: left;
  margin-left: 5%;
  display: flex;
  align-items: center;
`;

export const IconBar = styled.div`
  margin: 10px 60px;
  display: flex;
  justify-content: flex-start;

  img {
    padding: 10px;
  }
`;

export const Thumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 20px;
`;

export const UserName = styled.h2`
  display: inline;
`;
