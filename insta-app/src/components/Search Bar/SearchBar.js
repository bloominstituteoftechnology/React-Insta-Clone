import React from 'react'; 
import PropTypes from 'prop-types'; 


const SearchBar = props => {
    return(
        <div className="top-bar">
            <div className="top-bar-left"> 
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
                </div>
        </div>
    )
}

export default SearchBar; 