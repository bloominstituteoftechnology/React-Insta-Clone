import React from 'react'; 
import PropTypes from 'prop-types'; 


const SearchBar = props => {
    return(
        <div className="top-bar">
            <div className="top-bar-left">
            <i className="fas fa-camera"></i>
            </div>
                <form>
                    <input
                    className="search-bar" 
                    type="text"
                    name="search-bar"
                    placeholder="          Search"
                    />
                </form>
                <div className="top-bar-right">
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="fas fa-user"></i>
                </div>
        </div>
    )
}

export default SearchBar; 