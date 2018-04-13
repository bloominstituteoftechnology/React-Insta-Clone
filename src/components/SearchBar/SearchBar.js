import React from 'react';
import user from './user.png';
import compass from './compass.png';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <h1 className="SearchBar__sitename">Blintztagram</h1>
        <input 
          type="text" 
          placeholder=" 🔍 Search"
          value={this.props.searchText}
          onChange={this.props.handleSearch} />
        <div className="SearchBar__actions">
          <img src={user} alt="User" />
          <img src={compass} alt="Compass" />
        </div>
      </div>
    );
  }
}