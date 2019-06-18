import React from "react";
import "./SearchBar.css";
import styled from "styled-components";

//Declare search bar components styling
const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid lightgray;
`;

const LogoImg = styled.div`
  background-size: 200px;
  background-repeat: no-repeat;
  width: 200px;
  height: 100px;
`;

const SearchButton = styled.button`
  display: inline;
  width: 50px;
  height: 30px;
  color: lightgray;

  box-shadow: gray;

  border: 1px solid lightgray;
`;

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { inputText: "" };
  }

  handleChange(event) {
    //set value of comment input to Comment state obj
    this.setState(
      { inputText: event.target.value },
      this.props.searchPosts(event, this.state.inputText)
    );

    //Clear comment input box
    // this.setState({ value: "" });
  }

  render() {
    return (
      <Header>
        <LogoImg className="logo" />
        <form
          onSubmit={event => {
            this.props.searchPosts(event, this.state.inputText);
          }}
        >
          <input
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)}
            type="text"
            placeholder="Search"
            className="search-bar"
          />
          <SearchButton>
            <i class="fas fa-search" />
          </SearchButton>
        </form>
        <div className="account-stuff" />
        <i class="fal fa-sign-out" />
      </Header>
    );
  }
}

export default SearchBar;
