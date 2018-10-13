import React from 'react';
import styled from 'styled-components';

const WrappedSearch = styled.input`
    width: 150px;
    border: 1px solid gray;
    background: ghostwhite;
    text-align: center;
`;


const Search = (props) => {
    // Gets props:
        // searchHandler: ()
    return (
        <WrappedSearch type='search' onKeyUp={props.searchHandler} placeholder='Search'/>        
    );
};

export default Search;