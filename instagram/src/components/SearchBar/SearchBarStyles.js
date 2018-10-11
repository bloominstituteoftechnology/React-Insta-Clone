import styled from 'styled-components';

export const SearchBarDiv = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  height: 77px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1010px;
  width: 100%;
  padding: 26px 40px;
  margin: 0 auto;
`;

export const LogoDiv = styled.div`
  flex: 1 9999 0%;
  min-width: 40px;
`;

export const NavDiv = styled.div`
  flex: 1 0 0%;
  display: flex;
  justify-content: flex-end;
`;

export const SearchInput = styled.input`
  background: #fafafa;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  text-align: center;
  outline: 0;
  padding: 3px 10px;
  z-index: 2;
`;
