import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  search = e => {
    this.setState({
      search: e.target.value
    });
    this.props.sort(this.state.search);
  };
  render() {
    return (
      <div className="input">
        <input
          className="searchbar"
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.search}
        />
      </div>
    );
  }
}

export default SearchBar;
