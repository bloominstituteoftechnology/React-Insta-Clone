import styled from "styled-components";

export const SearchWrapper = styled.div`
         position: fixed;
         width: 100%;
         height: 52px;
         margin-bottom: 40px;
         background-color: white;
         z-index: 2;
         @media only screen and (min-width: 1280px) {width: 50%;}`;

export const ImgInsta = styled.img`
  width: 25px;
  height: 25px;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  margin-right: 400px;

  h1 {
    font-family: "Siry";
    line-height: 100%;
    font-size: 25px;
    margin-right: 70px;
  }

  h2 {
    font-size: 30px;
    margin: 0px 10px;
  }

  .search {
    z-index: 3;
    position: absolute;
    top: 23px;
    text-align: center;
    position: relative;
    font-size: 10px;
    left: 60px;
    margin-bottom: 1px;
    color: gray;
  }
`;

export const Border = styled.hr`
  position: relative;
  right: 850px;
  width: 300%;
  border: 1px solid rgba(220, 220, 220, 0.5);
`;

export const InputSearch = styled.input`
  display:flex;
  top: 10px;
  right: 506px;
  border: 1px solid transparent;
  height: 10px;
  padding: 8px 0px;
  text-align: center;
  font-size: 15px;
  background-color: whitesmoke;
`;

export const FontIcon = styled.div`
  display: inline;
  margin-left: 10px;
  margin-top: 20px;

  .compass,
  .heart,
  .user {
    margin-left: 4px;
    font-size: 15px;
    color: gray;
  }
`;
