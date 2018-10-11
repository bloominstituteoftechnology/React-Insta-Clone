import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 80vw;
  left: 10vw;
  top: 0;
  border: 1px solid lightgrey;
  padding: 20px 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: fixed;
  background: white;
`;

export const LogoHeader = styled.div`
  width: 30%;
`;

export const LogoImage = styled.img`
  height: 30px;
  width: 30px;
  ${props => (props.instagram ? `width:100px` : `width:30px`)};
  ${props => (props.instagram ? null : `border-right:1px solid lightgrey`)};
`;

export const SearchForm = styled.form`
  width: 30%;
  display: flex;
  padding-left: 7%;
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 50px;
  text-align: left;
  text-indent: 5%;
  font-weight: bold;
  border-radius: 3px;
  border: 1px solid lightgrey;
  background: #fafafa;
`;

export const ResetButton = styled.button`
  width: 20%;
  font-size: 10px;
  ${props => (props.filtered === "not-filtered" ? `visibility:hidden` : null)};
`;

export const HeaderSprites = styled.div`
  width: 30%;
  opacity: 0.6;
  padding-top: 0;
`;

export const Sprite = styled.i`
  padding: 0 6% 0px;
`;