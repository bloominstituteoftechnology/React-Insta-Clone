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
      <div className="searchbar">
        <img className="searchbar__img" src="https://i.imgur.com/NRaL8eG.png" alt="alt text" />
          <form className="searchbar__field">
            <input 
              type="text"
              value={this.state.input}
              onChange={this.updateSearch}
              placeholder="Search"
              size="50"
              />
          </form>
        <img className="searchbar__img" src="https://i.imgur.com/gFP8Ipc.png" alt="alt text" />
      </div>
    );
  };
};

export default SearchBar;