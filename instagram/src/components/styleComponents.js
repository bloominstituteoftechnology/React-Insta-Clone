import styled from "styled-components";

export const InstaboxDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const InstatitleDiv = styled.div`
  border-left: solid 1px black;
  padding-left: 15px;
  display: inline-block;
  padding-top: 1px;

  font-family: "Lobster Two", cursive;
  font-weight: 100;
  font-size: 24px;
`;

export const SearchInput = styled.input`
  border-style: inset;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 2rem;
  width: 213px;
  height: 26px;
  margin-top: 1px;
  font-size: 12px;
  text-align: ${props => (props.searchFocus ? "left" : "center")};
  padding-left: ${props => props.searchFocus && "26px"};
  background-color: ${props => (props.searchFocus ? "white" : "#fafafa")};
`;

export const PostContDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 77px;
`;
export const FullPageCover = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.8;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;
