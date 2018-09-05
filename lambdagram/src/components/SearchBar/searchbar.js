import React from 'react';
import PropTypes from 'prop-types';
import './searchbar.css';

import camera from '../../assets/camera.png';
import lambdagram from '../../assets/lambdagram.png';
import compass from '../../assets/compass.png';
import heart from '../../assets/heart.png';
import usericon from '../../assets/user.png';

function SearchBar(props) {
    return (
        <div className='search-bar'>
            <div className='logo' >
                <img className='search-img' src={camera} alt='Camera' />
                <div className='search-breaker'></div>
                <img className='search-img' src={lambdagram} alt='Lambdagram' />
            </div>
            <form onSubmit={props.handleSearch} >
                <input 
                    className='search-box' 
                    name='searchInput' 
                    type='text' 
                    placeholder='Search' 
                    value={props.searchInput} 
                    onChange={props.handleSearchInput} 
                ></input>
            </form>
            <div>
                <img className='search-img' src={compass} alt='Compass' />
                <img className='search-img' src={heart} alt='Heart' />
                <img className='search-img' src={usericon} alt='User' />
            </div>
        </div>
    );
}

SearchBar.propTypes = {
    searchInput: PropTypes.string.isRequired,
    handleSearchInput: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired
}

export default SearchBar;
