import React from "react";
import Word from "../../img/Instagram-Word.png";
import styled from "styled-components";

const InstagramWord = styled.img`
  height: 40px;
`;

const WordLogo = () => {
  return (
    <div>
      <InstagramWord alt="''" src={Word} />
    </div>
  );
};

export default WordLogo;
