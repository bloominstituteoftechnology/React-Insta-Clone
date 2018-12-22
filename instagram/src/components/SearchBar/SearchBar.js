import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const SearchBar = props => {
 return(
  <div>
   <form onChange={props.handleSearch}>
    <input type='text' placeholder='Search' />
   </form>
  </div>
 )
}

SearchBar.propTypes = {
 handleSearch: PropTypes.func.isRequired
}
export default SearchBar 