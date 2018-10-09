import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  handleChange = e => {
    this.props.filterPosts(e.target.value);
  };
  render() {
    return (
        <div className='search-bar'>
            <div className="logo-container">
                <img src='https://image.flaticon.com/icons/svg/1077/1077042.svg' alt='instagram logo'/>
                <p>Instagram</p>
            </div>

            <input type="text" placeholder="&#x1f50d; Search" className="search-bar" onChange={this.handleChange} />

            <div className="icon-container">
                <img src='https://image.flaticon.com/icons/svg/77/77521.svg' alt='explore'/>
                <img src='https://image.flaticon.com/icons/svg/149/149217.svg' alt='likes'/>
                <img src='https://image.flaticon.com/icons/svg/126/126486.svg' alt='user'/>
            </div>
        </div>
    );
  }
}

export default SearchBar;