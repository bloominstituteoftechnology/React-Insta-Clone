import React from 'react';
import styled from 'styled-components';

export const SearchContainer = styled.div `
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
export const Logo = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
`
export const Img = styled.img `
width: 24px;
height: 24px;
`
export const LogoImg = styled.img `
  width: 24px;
  height: 24px;
  padding-right: 10px;
  border-right: 1px solid black;
`
export const Input = styled.input `
  width: 200px;

  ::placeholder {
    text-align: center;
  }
`

export const Icons = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100px;
`