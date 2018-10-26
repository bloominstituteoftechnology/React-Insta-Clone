import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => {
    return(
        <div>
        <form onChange={props.handleSearch}>
            <input type='text' placeholder='Search' />
        </form>
        
        </div>
    )
}
export default SearchBar 