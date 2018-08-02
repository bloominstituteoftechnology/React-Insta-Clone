import React from "react";
import logo from "../../assets/header-logo.png";
import navigate from "../../assets/navigate.png";
import favorite from "../../assets/favorites.png";
import profile from "../../assets/profile.png";
import search from "../../assets/search.png";
import {
  HeaderContainer,
  SearchWrapper,
  Image,
  SearchBrandWrapper,
  Search,
  Input,
  SearchIcons,
} from "./header-styles";

const Header = props => {
  const handleChange = e => {
    props.handleChange(e.target.value);
  };

  const handleKeyPress = e => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      props.handleSearchSubmit();
    } else if (e.keyCode === 8) {
      props.handleShowAll();
    }
  };

  return (
    <HeaderContainer>
      <SearchWrapper>
        <SearchBrandWrapper>
          <Image src={logo} alt="logo" />
        </SearchBrandWrapper>
        <Search>
          <Image src={search} alt="search" />
          <Input
            value={props.searchInput}
            type="text"
            placeholder="Search"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
        </Search>
        <div>
          <SearchIcons src={navigate} alt="nav" />
          <SearchIcons src={favorite} alt="fave" />
          <SearchIcons
            src={profile}
            alt="profile"
            onClick={props.handleLogOut}
          />
        </div>
      </SearchWrapper>
    </HeaderContainer>
  );
};
export default Header;
