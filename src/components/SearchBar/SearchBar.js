import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import {
  StyledSearchBar,
  StyledSearchBarContainer,
  StyledH1,
  StyledSearchFormDiv,
  StyledSearchBarIcons
} from "../styles.js";

library.add(fas, far, fab);

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <StyledSearchBar>
          <StyledSearchBarContainer>
            <FontAwesomeIcon icon="" />
            <button onClick={this.props.refreshPage} className="instaclone">
              <StyledH1>Instaclone</StyledH1>
            </button>
            <StyledSearchFormDiv>
              <form onSubmit={event => this.props.submitHandler(event)}>
                <input
                  onChange={event => {
                    this.props.changeHandler(event);
                  }}
                  type="text"
                  placeholder="Search"
                  value={this.props.inputText}
                />
              </form>
            </StyledSearchFormDiv>
            <StyledSearchBarIcons>
              <FontAwesomeIcon icon="compass" />
              <FontAwesomeIcon icon="heart" />
              <FontAwesomeIcon icon="user" />
            </StyledSearchBarIcons>
          </StyledSearchBarContainer>
        </StyledSearchBar>
      </div>
    );
  }
}

export default SearchBar;
