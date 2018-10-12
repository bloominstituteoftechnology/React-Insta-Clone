import React from "react";
import styled, { css } from "styled-components";

export const UserName = styled.span`
  font-weight: 500;
  font-size: 12px;
  margin-right: 5px;
  ${props =>
    props.bold &&
    css`
      font-weight: 600;
    `};
`;

export const LogInOutButton = styled.button`
  width: 200px;
  height: 50px;
  background: #fff;
  cursor: pointer;
  color: #666666;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
`;
