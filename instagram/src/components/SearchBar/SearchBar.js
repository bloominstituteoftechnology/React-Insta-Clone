import React from 'react';
import './SearchBar.css';

const Search = props => {
    return (
        <div className='search-container'>
            <div className='title'><i className="fa fa-instagram search-icons" aria-hidden="true"> |</i> Instagram</div>
            <form onSubmit={props.result} className='search'><span className="fa fa-search"></span>
                    <input placeholder='Search' onChange={props.searchUser}></input>
            </form>
            <div className='search-icons'>
                <i className="fa fa-compass search-icons" aria-hidden="true"></i>
                <i className="fa fa-heart-o search-icons" aria-hidden="true"></i>
                <i className="fa fa-user-o search-icons" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Search;