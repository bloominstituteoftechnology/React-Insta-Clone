import React from 'react';
import styled from 'styled-components';
import sprites from'../instagram-sprites.png';

const SearchBarLogosAnchor = styled.a`
  display: inline-block;
  width: 176px;
  height: 35px;
  color: rgba(0,0,0,0);
  background: url(${sprites});
  background-position: 0 -230px;
  background-size: 495px 483px;
`;

const SearchBarLogos = (props) => {
  return(
    <SearchBarLogosAnchor href="instagram">Instagram</SearchBarLogosAnchor>
  );
};

export default SearchBarLogos;