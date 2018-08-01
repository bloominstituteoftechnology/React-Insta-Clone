import React from 'react';
import './Search.css'

const SearchContainer = props => {
    return (
        <div className='container'>

            <div className='logo'>
                <h1><i className="fab fa-instagram"></i>INSTAGRAM</h1>
            </div>

            <div className='search'>
                <form onSubmit={props.filterSearch}>
                    <input
                        type='text'
                        name='search'
                        placeholder='search'
                        value={props.search}
                        onChange={props.startSearch}
                        autoComplete="off"
                    />
                </form>

            </div>

            <div className='options'>
                <i className="far fa-compass"></i> <i className="far fa-heart"></i> <i className="fas fa-user"></i>
            </div>

        </div>
    );
}

export default SearchContainer;