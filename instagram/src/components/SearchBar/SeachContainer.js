import React from 'react';
import './Search.css'

const SearchContainer = () => {
    return (
        <div className='container'>

            <div className='logo'>
                <h1><i class="fab fa-instagram"></i>INSTAGRAM</h1>
            </div>

            <div className='search'>
                <input
                    type='text'
                    name='search'
                    placeholder='search'
                />
            </div>

            <div className='options'>
            <i class="far fa-compass"></i> <i class="far fa-heart"></i> <i class="fas fa-user"></i>
        </div>

        </div>
    );
}

export default SearchContainer;