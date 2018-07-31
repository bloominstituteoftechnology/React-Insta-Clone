import React from 'react'; 
import PropTypes from 'prop-types'; 


const SearchBar = props => {
    return(
        <div className="top-bar">
            <div className="top-bar-left">
            <i class="fas fa-camera"></i>
            </div>
                <form>
                    <input
                    className="search-bar" 
                    type="text"
                    name="search-bar"
                    placeholder="Search"
                    />
                </form>
                <div className="top-bar-right">
                    <i class="far fa-compass"></i>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-user"></i>
                </div>
        </div>
    )
}

export default SearchBar; 