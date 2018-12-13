import React from "react";
import PropTypes from "prop-types";

class Search extends React.Component {
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
      <div className="search">
        <input
          type="text"
          placeholder="🔍 Search"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

//data type check
// Search.propTypes = {
//   value: PropTypes.string
// };

export default Search;
