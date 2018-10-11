import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  max-width: 751px;
  margin: 0 auto;

  .fa-instagram {
    height: 50%;
    padding: 3% 1% 2% 2%;
    font-size: 35px;
  }
`;

export const Logo = styled.h1`
  font-family: "Grand Hotel", sans-serif;
  padding-top: 10px;
`;

export const Line = styled.span`
  font-size: 35px;
  padding: 10px;
  font-weight: none;
  color: lightgrey;
`;

export const Navigation = styled.div`
  padding-left: 270px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .far {
    padding: 20px 10px 0px;
    font-size: 20px;
    color: grey;
  }
`;

export const Search = styled.div`
  position: relative;
  padding-left: 120px;

  .fa-search {
    position: absolute;
    z-index: 1;
    top: 4px;
    left: 180px;
    font-size: 10px;
    color: rgb(201, 200, 200);
  }
`;

export const Input = styled.input`
  text-indent: 65px;
  border-radius: 2px;
  border-style: none;
  border: 1px solid rgb(202, 202, 202);
  position: absolute;
  padding: 0px 10px;
  background-color: rgb(245, 245, 245);
`;
