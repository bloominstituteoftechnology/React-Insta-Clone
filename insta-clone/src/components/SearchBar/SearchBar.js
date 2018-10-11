import React from "react";
import instacloneimg from "./../../imgs/instacloneimg.png";
import "./SearchBar.css";
import {SearchWrapper, SearchContainer} from "../Styles/StyledSearch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      search: ""
    };
  }
  handleInputChange = e => {
    const val = e.target.value;
    this.setState({
      search: val
    });
    this.props.handleSearch(val);
  };

  render() {
    return (
      <SearchWrapper>
        <SearchContainer>
          <img className="img-clone" src={instacloneimg} alt="insta-clone" />
          <h2>|</h2>
          <h1>Instagram</h1>

          <form>
            <FontAwesomeIcon className="search" icon="search" />
            <input className= 'search-bard'
              value={this.state.search}
              onChange={this.handleInputChange}
              placeholder="Search"
            />
          </form>

          <div className="search icon-content">
            <FontAwesomeIcon className="compass" icon={["far", "compass"]} />{" "}
            <FontAwesomeIcon className="heart" icon={["far", "heart"]} />{" "}
            <FontAwesomeIcon className="user" icon={["far", "user"]} />
          </div>
        </SearchContainer>
        <div>
          <hr />
        </div>
      </SearchWrapper>
    );
  }
}

export default SearchBar;
