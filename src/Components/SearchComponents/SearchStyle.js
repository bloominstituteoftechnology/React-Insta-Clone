import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  padding: 0 10px;
  position: fixed;
  top: 0;
  background: white;
  z-index: 3;

  @media (max-width: 430px){
    font-size: 1.6rem;
  }
`;

export const SearchBarLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  font-family: 'Lobster';

  @media (max-width: 756px){
    width: 30%;
  }
`;

export const CompanyName = styled.div`
  margin-left: 5px;
`;

export const SearchInput = styled.input`
  width: 25%;
  height: 50%;
  border-radius: 5px;
  text-align: center;

  &::placeholder{
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
  }

  @media (max-width: 756px){
    width: 40%;
  }
`;

export const SearchBarRight = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 756px){
    width: 30%;
  }
`;
