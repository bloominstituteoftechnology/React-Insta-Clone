import React from "react";
import styled from "styled-components";

export const CommentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
`;

export const UserNameComment = styled.h3`
  font-weight: bold;
  font-size: 1.8rem;
  padding-right: 3%;
  height: 50%;
`;

export const CommentFormWrapper = styled.form`
  display: flex;
`;

export const CommentInput = styled.input`
  width: 95%;
  margin-top: 20px;
  padding: 10px 0;
  border: 1px solid lightgray;
  border-right: none;
`;

export const CommentSubmitButton = styled.button`
  width: 10%;
  margin-top: 20px;
  padding: 10px 0;
  background-color: white;
  border: 1px solid lightgray;
  font-weight: bold;
  font-size: 1.8rem;

  &:hover {
    cursor: pointer;
  }
`;
