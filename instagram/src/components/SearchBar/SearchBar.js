import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => {
    return (
        <div className="search-bar">
            <i className="fab fa-instagram fa-2x"></i>
            <form onSubmit={props.onSearch}>
                {props.isEmpty ?  <i className="fas fa-search"></i> : <p>&emsp;</p>}
                <input 
                    className="search" 
                    onChange={props.onChange}
                    type="text" 
                    placeholder="              Search" />
            </form>
        </div>
    );
};

SearchBar.propTypes = {
    isEmpty: PropTypes.bool,
    onChange: PropTypes.func,
    onSearch: PropTypes.func
};

export default SearchBar;