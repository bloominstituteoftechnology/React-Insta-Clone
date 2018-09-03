import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = ()=> {
    return (
        <div className='searchbar'>
            <div className='logo-div'>
                <img src='https://pmcvariety.files.wordpress.com/2015/09/instagram_logo.jpg?w=1000' className='logo-img' />
            </div>
            <div className='search'>
                <input type='text' placeholder='search' />
            </div>
            <div className='icons-div'>
                <div className='icons compass'>
                    <i class="far fa-compass"></i>
                </div>
                <div className='icons heart'>
                    <i class="far fa-heart"></i>
                </div>
                <div className='icons person'>
                    <i class="far fa-user"></i>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;