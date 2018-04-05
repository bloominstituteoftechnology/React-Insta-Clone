import React from 'react'
import './SearchBar.css'
import user from './user.png'
export default class SearchBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="SearchBar">
            <h1 className="SearchBar__title">Lambdagram</h1>
            <input 
            type="text" 
            placeholder=" 🔍 Search"
            value={this.props.searchText}
            onChange={this.props.handleSearch} />

            <div className="SearchBar__actions">
              <img src={user} alt="User" />
            </div>

          </div>
        );
    }
}
