import React, { Component } from "react";
import styled, { css } from "styled-components";

const LikesDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0 15px;
`;

const LikesContainer = props => {
  return (
    <LikesDiv className="likes-container">
      <i className="fa fa-heart-o fa-2x heart" onClick={props.addLike} />
      <i className="fa fa-comment-o fa-2x" />
      <p className="heavy-font">{props.likes} likes</p>
    </LikesDiv>
  );
};

export default LikesContainer;
