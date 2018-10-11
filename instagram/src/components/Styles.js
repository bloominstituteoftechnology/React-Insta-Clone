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

export const StyledCommentSection = styled.div`
  text-align: left;
  margin-left: 60px;

  span {
    font-weight: bold;
  }
`;

export const TimeStamp = styled.p`
  color: #504a4a;
  text-align: left;
`;

export const LoginForm = styled.form`
  width: 40%;
  margin: 0 auto;
  border: 1px solid black;
  background: lightslategray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  padding: 40px 0;
  text-align: center;

  input {
    padding: 20px;
    width: 50%;
    margin: 30px auto;
    border-radius: 10px;
  }
`;
