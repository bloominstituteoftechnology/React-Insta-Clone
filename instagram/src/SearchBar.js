import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="search-wrapper" >
            <a className="top-left-image"></a>
            <div className="right-images">
            <a className="top-right-image"></a>
            <a className="top-right-right-image"></a>
            <a className="top-right-right-right-image"></a>
            </div>
            <form className="form">
                <a className="searcher" alt="search-field" src=""/>
                <input className="input" placeholder="Search"/>
            </form>
        </div>
    )
}

export default SearchBar;