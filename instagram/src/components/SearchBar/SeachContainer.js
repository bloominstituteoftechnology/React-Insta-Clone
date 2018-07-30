import React from 'react';
import './Search.css'

const SearchContainer = () => {
    return (
        <div className='container'>

            <div className='logo'>
                <h1>INSTAGRAM</h1>
            </div>

            <div className='search'>
                <input
                    type='text'
                    name='search'
                    placeholder='search'
                />
            </div>

            <div className='options'>
                Explore Likes Profile
        </div>

        </div>
    );
}

export default SearchContainer;