import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className='search-bar-container'>
                    <div className='logo-container'>
                        <img src='https://png.icons8.com/windows/48/000000/instagram-new.png' alt='' />
                        <div className='logo-divider'>|</div>
                        <div className='logo-text'>Instagram</div>
                    </div>
                    <form>
                        <input className='search' placeholder='Search' />
                    </form>
                    <div className='search-icon-container'>
                        <img src='https://png.icons8.com/ios/48/000000/compass.png' alt='' />
                        <img src='https://png.icons8.com/ios/48/000000/hearts.png' alt='' />
                        <img src='https://png.icons8.com/ios/48/000000/gender-neutral-user.png' alt='' />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;