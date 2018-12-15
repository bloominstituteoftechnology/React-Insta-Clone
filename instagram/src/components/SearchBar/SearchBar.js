import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  render() {
    return (
      <div className="input">
        <input className="searchbar" type="text" placeholder="Search" />
      </div>
    );
  }
}

export default SearchBar;
