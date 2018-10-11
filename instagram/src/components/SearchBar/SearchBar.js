import React from "react";
import {
  Header,
  Logo,
  Line,
  Navigation,
  Search,
  Input
} from "./StyledSearchBar";

const SearchBar = props => {
  return (
    <div>
      <Header>
        <i className="fab fa-instagram" />
        <Line>|</Line>
        <Logo>Instagram</Logo>
        <Search>
          <i className="fas fa-search" />
          <Input
            type="text"
            placeholder="Search"
            onKeyDown={props.searchPosts}
          />
        </Search>
        <Navigation>
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </Navigation>
      </Header>
    </div>
  );
};

export default SearchBar;
