import React from "react";
// import PropTypes from 'prop-types';
import "./SearchBar.css";
import logoText from "./instagramLogoText.png";
import styled from "styled-components";

const SearchBarMainDiv = styled.div`
  background: white;
  color: black;
  box-shadow: 0 0 30px -10px #777;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const SearchBarLogoDiv = styled.div`
  font-size: 2.2rem;
  color: black;
  padding: 0 1rem;
  margin-left: 4rem;
  position: relative;
  right: 18px;
`;

const SearchBarBarSpan = styled.span`
  position: relative;
  bottom: 7px;
`;

const SearchBarImg = styled.img`
  height: 2.5rem;
  width: auto;
  padding: 0 0.5rem;
  position: relative;
  top: 10px;
`;

const SearchBarInput = styled.input`
  border-radius: 4px;
  padding: 4px 22px;
  text-align: center;
  color: black;
`;

const SearchBarForm = styled.form``;

const SearchBarLinksDiv = styled.div`
  margin-right: 4rem;
`;

const SearchBarUL = styled.ul`
  font-size: 1.5rem;
  list-style: none;
  display: flex;
  position: relative;
  top: 6px;
  right: 8px;
`;

const SearchBarLi = styled.li`
  padding: 0 1rem;
  font-size: 1.6rem;
`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  handleSearchBarInputChange = event => {
    let commentDivs = document.getElementsByClassName("commentDiv");
    let searchBarInputTargetValue = event.target.value.toLowerCase();
    for (let i = 0; i < commentDivs.length; i++) {
      let commentDivsIterator = commentDivs[i]
        .querySelector(".userNameDiv")
        .querySelector("h2")
        .innerHTML.toLowerCase();
      if (commentDivsIterator.indexOf(searchBarInputTargetValue) === 0) {
        commentDivs[i].style.display = "";
      } else {
        commentDivs[i].style.display = "none";
      }
    }
  };

  render() {
    return (
      <SearchBarMainDiv className="searchBarMainDiv">
        {/* start logo div */}
        <SearchBarLogoDiv className="searchBarLogoDiv">
          <i className="fa fa-instagram" />
          <SearchBarBarSpan>|</SearchBarBarSpan>
          <SearchBarImg src={logoText} alt="instagram text" />
        </SearchBarLogoDiv>

        {/* start input div */}
        <SearchBarForm
          className="searchBarInputDiv"
          onChange={this.handleSearchBarInputChange}
        >
          <SearchBarInput
            className="search-input fa fa-input"
            placeholder="&#xf002; Search"
            type="search"
          />
        </SearchBarForm>

        {/* start links div */}
        <SearchBarLinksDiv className="searchBarLinksDiv">
          <SearchBarUL>
            <SearchBarLi>
              <i className="fa fa-compass" />
            </SearchBarLi>
            <SearchBarLi>
              <i className="fa fa-heart-o" />
            </SearchBarLi>
            <SearchBarLi>
              <i className="fa fa-user-o" />
            </SearchBarLi>
          </SearchBarUL>
        </SearchBarLinksDiv>
      </SearchBarMainDiv>
    );
  }
}

// SearchBar.propTypes = {
//   comments: Proptypes.arrayOf()
// }
export default SearchBar;
