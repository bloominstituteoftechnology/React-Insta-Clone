import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faHeart,
  faUser
} from "@fortawesome/free-regular-svg-icons";
import "./SearchBar.css";
import LogoText from "./LogoText";
import Splitbar from "./Splitbar";
import Logo from "./Logo";
import SearchBarContainer from "./SearchBarContainer";
import BorderBox from "./BorderBox";
import Icon from "./Icon";
import SearchBox from "./SearchBox";

const SearchBar = props => {
  return (
    <BorderBox>
      <SearchBarContainer>
        <Logo />
        <Splitbar/>
        <LogoText > InstaKG </LogoText>
        <SearchBox
          onChange={props.methods}
        />
        <Icon>
          <FontAwesomeIcon className="icon" icon={faCompass} />
        </Icon>
        <Icon>
          <FontAwesomeIcon className="icon" icon={faHeart} />
        </Icon>
        <div
          onClick={function(event) {
            event.currentTarget.childNodes[1].classList.toggle("visible");
          }}
          className="dropDown"
        >
          <FontAwesomeIcon className="icon" icon={faUser} />
          <div className="dropDownBox" onClick={props.logout}>
            Logout
          </div>
        </div>
      </SearchBarContainer>
    </BorderBox>
  );
};

export default SearchBar;
