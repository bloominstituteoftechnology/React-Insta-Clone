import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Image = styled.div `
`
const SearchBar = props => {
console.log(props.handleSearch)
console.log(props.stringSearch)
console.log(props.postSearch)

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