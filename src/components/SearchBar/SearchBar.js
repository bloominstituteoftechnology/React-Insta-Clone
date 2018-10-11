import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchBar">
        <div className="searchBarContainer">
          <FontAwesomeIcon icon="" />
          <button onClick={this.props.refreshPage} className="instaclone">
            <h1>Instaclone</h1>
          </button>
          <div className="searchFormDiv">
            <form>
              <input
                onChange={event => {
                  this.props.changeHandler(event);
                }}
                onSubmit={event => this.props.submitHandler(event)}
                type="text"
                placeholder="Search"
                value={this.props.inputText}
              />
              <button onClick={event => this.props.submitHandler(event)}>
                Submit
              </button>
            </form>
          </div>
          <div className="searchBarIcons">
            <FontAwesomeIcon icon="compass" />
            <FontAwesomeIcon icon="heart" />
            <FontAwesomeIcon icon="user" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
