import React from "react";
// import "./SearchBar.css";
import styled from "styled-components";

const ContainHead = styled.div`
  padding: 25px 0 0;
  justify-content: space-around;
  /* align-items: center; */
  display: flex;
  width: 100%;
  border-bottom: 1px solid #cdcdcd;
  position: fixed;
  z-index: 10;
  background-color: white;
`;

const Brands = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 30px;
  transform: scale(1.5);
`;

const Insta = styled.span`
  font-family: "Lobster Two", cursive;
`;

const Links = styled.a`
  a:link {
    text-decoration: none;
    color: inherit;
  }
  a:visited {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }
`;

const Line = styled.span`
  display: inline;
  color: gray;
  font-size: 20px;
`;

const Input = styled.input`
  width: 300px;
  text-align: center;
  font-size: 16px;
  font-weight: light;
`;

const HeaderIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px;
  transform: scale(1.5);
`;

const searchBar = props => {
  return (
    <ContainHead>
      <Brands>
        <Links href="https://www.instagram.com">
          <i class="fab fa-instagram" />
          <Line>|</Line>
          <Insta>Instagram</Insta>
        </Links>
      </Brands>

      <div>
        <form className="search-container ">
          <Input
            className="fa fa-input"
            placeholder="&#xf002; Search"
            onKeyDown={props.searchPosts}
          />
        </form>
      </div>

      <HeaderIcons>
        <div>
          <i className="far fa-compass" aria-hidden="true" />
        </div>
        <div>
          <i className="far fa-heart" aria-hidden="true" />
        </div>
        <div>
          <i className="far fa-user" />
        </div>
      </HeaderIcons>
    </ContainHead>
  );
};

export default searchBar;
