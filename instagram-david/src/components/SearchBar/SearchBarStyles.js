import styled from "styled-components";

export const SearchContainer = styled.div`
  font-family: "Grand Hotel", cursive;
  width: 100%;
  padding: 20px 0;
  border-bottom: 2px solid #e2e2e2;
  @media (max-width: 700px) {
    padding: 20px 30px;
  }
`;
export const SearchItemContainer = styled.div`
  max-width: 900px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SearchHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const LogoIcon = styled.div`
  padding-right: 15px;
  border-right: 1px solid black;
  @media (max-width: 700px) {
    border-right: none;
  }
`;
export const MainHeading = styled.h1`
  margin-left: 20px;
  font-size: 3rem;
  color: #343434;
  letter-spacing: 1px;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const SearchInput = styled.input`
  padding: 3px 18px;
`;
export const SearchActionContainer = styled.div`
  width: 133px;
  display: flex;
  justify-content: space-between;
`;
export const SearchActionIcon = styled.div`
  margin-left: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const LogoutIcon = styled.div`
  margin-left: 10px;
  :hover {
    cursor: pointer;
  }
`;
