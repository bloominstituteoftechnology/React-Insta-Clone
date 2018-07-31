import React from 'react';
import './Search.css'

const SearchContainer = () => {
    return (
        <div className='container'>

            <div className='logo'>
                <h1><i className="fab fa-instagram"></i>INSTAGRAM</h1>
            </div>

            <div className='search'>
                <input
                    type='text'
                    name='search'
                    placeholder='search'
                />
            </div>

            <div className='options'>
                <i className="far fa-compass"></i> <i className="far fa-heart"></i> <i className="fas fa-user"></i>
            </div>

        </div>
    );
}

export default SearchContainer;