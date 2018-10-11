import React from 'react'
import styled, { css } from "styled-components"

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