import React from 'react';
import styled from 'styled-components';

const Searcher = styled.input`
display: flex;
border-radius: 2px;
padding: 5px 1%;
width: 30%;
font-size: 1.2rem;
&::-webkit-input-placeholder {
    text-align: center;
}
`;
const SearchBox = (props) => {
    return <Searcher className='search-box'
        type='search'
        placeholder='&#128269; Search'
        onChange={(e) => {
            props.searchHandler(e)
        }} />
}

export default SearchBox;