import styled from 'styled-components';

export const CustomDiv = styled.div
`

  display: flex;
  align-items: center;

`;

export const SearchBarContainer = styled.div
`

  display: flex;
  justify-content: space-between;
  height: 85px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;

`;

export const SearchLogoSection = styled(CustomDiv)
`

  img {

    height: 59%;
    width: 233px;

    @media (max-width: 1050px) {

      width: 150px;

    }

    @media (max-width: 775px) {

      display: none;

    }

  }

  .fa-instagram {

    font-size: 5rem;
    margin-left: 28px;

    @media (max-width: 775px) {

      font-size: 3rem;

    }

  }

  .divider {

    font-size: 6rem;
    margin-left: 35px;
    margin-right: 16px;

    @media (max-width: 1050px) {

      margin-left: 10px;
      margin-right: 0px;

    }

    @media (max-width: 775px) {

      font-size: 3rem;

    }

  }

`;

export const SearchInputSection = styled(CustomDiv)
`

  position: relative;
  width: 100%;

`;

export const SearchInput = styled.input
`

  width: 100%;
  margin-top: 8px;
  padding: 9px 0;
  text-align: center;
  border-radius: 6px;
  border: 2px solid grey;
  font-size: 3rem;
  transform: translateX(-18px);

  @media (max-width: 775px) {

    padding: 5px 0;
    transform: translateX(33px);

  }

  @media (max-width: 600px) {

    font-size: 2rem;

  }

`;

export const SearchIcon = styled.p
`

  position: absolute;
  top: 26px;
  right: 29px;
  font-size: 2rem;

  @media (max-width: 775px) {

    right: -20px;
    top: 21px;

  }

  @media (max-width: 600px) {

    right: -20px;
    top: 15px;

  }

`;

export const SearchButtons = styled(CustomDiv)
`

  & > p {

    margin: 32px;
    font-size: 4.6rem;
    margin-top: 43px;

    @media (max-width: 1050px) {

      margin-left: 10px;
      margin-right: 10px;
      font-size: 4rem;

    }

    @media (max-width: 775px) {

      font-size: 3rem;

    }

  }

`;
