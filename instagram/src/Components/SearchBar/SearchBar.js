import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
    width: 200px;
    height: 25px;
    margin: 5px;
`

const SearchBar = (props) => {
    function clearDefaultText(event) {
        if (event.target.value === 'search') {
            event.target.value = '';
        }
    }
    return (
        <SearchContainer>
            <input onClick={clearDefaultText} onChange={props.changeSearchTerm} className='search' defaultValue='search' />
        </SearchContainer>
    )
}

export default SearchBar;