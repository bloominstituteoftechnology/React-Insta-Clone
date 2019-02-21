import React from "react";
import styled from "styled-components";

export const Link = styled.a`
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;

  ${props => (props.signup ? `color: #5fa9f3;` : null)};
  ${props =>
    props.footer
      ? `
  text-decoration: none;
  color: #567b9b;
  font-weight: bold;
  `
      : null};
`;
