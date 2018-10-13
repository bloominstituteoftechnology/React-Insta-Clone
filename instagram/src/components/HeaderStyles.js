import styled from 'styled-components'

export const Header = styled.div` 
  border-bottom: 1px solid lightgray;
  display: flex;
  height: 75px;
  justify-content: space-between;
`;

export const SearchInput = styled.input` 
  width: 23%;
  height: 20px;
  padding: 10px;
  text-align: center;
  border: 1px solid lightgray;
  margin-top: 25px;
  background: whitesmoke;
  font-size: 14px;
`;

export const LeftHeader = styled.div` 
  display: flex;
  width: 20%;
  justify-content: space-between;
  align-items: center;
`;

export const TheLine = styled.p` 
  font-size: 24px;
  margin-right: 10px;
`;

export const InstagramFont = styled.p` 
  font-size: 24px;
  font-family: cursive;
  font-weight: bold;
`;

export const RightHeader = styled.div` 
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FontAwesome = styled.div` 
  margin: 0 10px;
  cursor: pointer;
`;
