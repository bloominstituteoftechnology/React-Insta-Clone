import React from "react";
import styled from "styled-components";


const SearchBar = props => {
  return (
    <SearchBarStyled>
      <div className="logo">
        <i className="fab fa-instagram" aria-hidden="true" />
        <h1>Instagram</h1>
      </div>
      <section>
        <input
          type="text"
          placeholder="search"
          onChange={props.searchPostsHandler}
        />
      </section>
      <IconsStyled>
        <i className="fa fa-compass" aria-hidden="true" />
        <i className="fa fa-heart" aria-hidden="true" />
        <i className="fa fa-user" aria-hidden="true" />
      </IconsStyled>
    </SearchBarStyled>
  );
};

const SearchBarStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(206, 204, 204);

  .logo {
    display: flex;
  }

  .fa-instagram {
    font-size: 2rem;
    padding: 10px;
    border-right: 1px solid rgb(206, 204, 204);
  }

  h1 {
    margin: 10px;
    font-size: 1.6rem;
    font-family: "Dancing Script", cursive;
  }

  input {
    border-radius: 6px;
    background-color: rgb(243, 242, 242);
  }

  .icons {
    display: flex;
  }

  .icons;
`;

const IconsStyled = styled.div`
  display: flex;

  .fa-compass {
    margin: 0 10px;
  }

  .fa-heart {
    margin: 0 10px;
  }

  .fa-user {
    margin: 0 10px;
  }
`;

export default SearchBar;
