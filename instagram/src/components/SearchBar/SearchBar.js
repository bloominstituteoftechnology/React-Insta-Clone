import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { inputText: "" };
  }

  handleChange(event) {
    //set value of comment input to Comment state obj
    this.setState({ inputText: event.target.value });

    //Clear comment input box
    // this.setState({ value: "" });
  }

  render() {
    return (
      <div className="search-bar-header">
        <div className="logo">
          {/* <img src="./instagram-log.png" alt="instagram logo" /> */}
        </div>
        <form
          onSubmit={event => {
            this.props.searchPosts(event, this.state.inputText);
            console.log(this.state);
          }}
        >
          <input
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)}
            type="text"
            placeholder="Search"
            className="search-bar"
          />
        </form>
        <div className="account-stuff" />
      </div>
    );
  }
}

export default SearchBar;
