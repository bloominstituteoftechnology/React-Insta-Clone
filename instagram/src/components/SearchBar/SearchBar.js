import React from "react";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    alert(this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input className="submit-button" type="submit" value="🔍" />
      </div>
    );
  }
}

//data type check
SearchBar.propTypes = {
  value: PropTypes.string
};

export default SearchBar;
