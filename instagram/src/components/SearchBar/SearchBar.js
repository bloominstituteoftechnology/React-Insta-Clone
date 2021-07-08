import React from "react";
import Logo from "./Logo";
import WordLogo from "./WordLogo";
import Search from "./Search";
import GPSIcon from "./GPSIcon";
import LikeButton from "./LikeButton";
import PersonButton from "./PersonButton";
import styled from "styled-components";

const SearcBarStyled = styled.div`
  .header {
    display: flex;
    width: 100%;
    max-width: 500px;
    justify-content: space-between;
    margin: 30px;
  }

  .Insta-Logo-Cam {
    width: 30px;
  }

  .Insta-Logo-Word {
    width: 90px;
  }

  input {
    height: 20px;
    border-radius: 5px;
    margin-top: 3px;
  }

  .GPS-Button {
    height: 30px;
  }

  .likeButton {
    height: 25px;
  }

  .Person-Button {
    height: 25px;
  }
`;

const SearchBar = props => {
  return (
    <SearcBarStyled>
      <div className="header">
        <Logo />
        <WordLogo />
        <Search searchHandler={props.searchHandler} />
        <GPSIcon />
        <LikeButton onClick={props.addLike} />
        <PersonButton />
      </div>
    </SearcBarStyled>
  );
};

export default SearchBar;
