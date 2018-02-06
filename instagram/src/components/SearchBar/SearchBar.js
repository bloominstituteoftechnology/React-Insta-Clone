import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = {
    input: ''
  }

  updateSearch = (event) => {
    let stateCopy = this.state;
    stateCopy.input = event.target.value;
    this.setState({input: stateCopy.input});
  }

  render = () => {
    return (
      <div className="searchBar">
        <form className="searchBar__field">
          <input 
            type="text"
            value={this.state.input}
            onChange={this.updateSearch}
            />
        </form>
      </div>
    );
  };
};

export default SearchBar;