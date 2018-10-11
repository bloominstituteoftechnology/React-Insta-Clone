import React from 'react';
import IGLogo from '../../assets/iglogo.png';

const SearchBar = () => {
    return (
        <div className='search-bar-wrap'>
        <div class='image'>
            <img alt='instagram logo' src={IGLogo} className='logo' />
        </div>
        <div className='search'>
            <input type='text' placeholder='Search' />
        </div>
            <div className='social-wrap'>
                <div className='social'>
                    <i className='fa fa-compass' />
                </div>
                <div className='social'>
                    <i className='fa fa-heart' />
                </div>
                <div className='social'>
                    <i className='fa fa-user-circle' />
                </div>
            </div>
        </div> // search bar wrapper end div
    )
}

export default SearchBar;