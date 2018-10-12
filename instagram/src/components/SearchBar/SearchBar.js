import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    
    render() {
    return (
        <div className='searchContainer'>
            <div className="insta">
                <img className="logo" src='https://image.flaticon.com/icons/svg/1077/1077042.svg' alt='instagram logo'/>
                <p className="logo-text">Instagram</p>
            </div>
            <div className="search">
                <input 
                    type='search' 
                    placeholder='Search'
                    onChange={this.props.search} 
                    />
            </div>
            <div className="icons">
                <img className="icon" src='https://image.flaticon.com/icons/svg/77/77521.svg' alt='explore'/>
                <img className="icon" src='https://image.flaticon.com/icons/svg/149/149217.svg' alt='likes'/>
                <img className="icon" src='https://image.flaticon.com/icons/svg/126/126486.svg' alt='avatar'/>
            </div>
        </div>
    )
}
}

export default SearchBar;