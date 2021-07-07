import React from "react";
import styled from "styled-components";

export const PostWrapper = styled.div`
  margin: 0 5%;
  padding-bottom: 30px;
  border-bottom: 1px solid lightgray;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 5%;
  width: 100%;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 10%;
`;

export const UserName = styled.h3`
  margin-left: 3%;
  font-size: 1.7rem;
  font-weight: bold;
`;

export const LargeImgPostWrapper = styled.div`
  margin: 0 1%;
`;

export const IconsLikesComments = styled.div`
  margin: 0 5%;
`;

export const IconsComment = styled.div`
  display: flex;
  align-items: center;
`;

export const IconSymbols = styled.div`
  padding: 10px 2% 10px 0;
  font-size: 2rem;
`;

export const UserComments = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
`;
