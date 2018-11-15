import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  display: flex;
  align-items: flex-end;
  font-family: 'Cormorant Upright', serif;
  font-size: 2.7rem;
  font-weight: bold;

  i {
    font-size: 2.4rem;
    font-weight: 100;
    padding-bottom: .4rem;    
  }
`

const LogoVLine = styled.div`
  font-weight: 100;
  font-size: 3rem;
  margin: 0 1rem;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const LogoText = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
  span {
      color: lightgray;
      font-size: 1.6rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;

      @media only screen and (max-width: 800px) {
        display: none;
      }
  }
`;

const Logo = props => {
  return (
    <StyledLogo className='logo'>
      <i className="fab fa-instagram"></i>
      <LogoVLine className="logo--vline">
        |
      </LogoVLine>
      <LogoText className="logo--text">
        InstaClone <span>- by YKrueng</span>
      </LogoText>
    </StyledLogo>
  );
}

export default Logo;