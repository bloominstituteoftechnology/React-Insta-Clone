import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    background: #fafafa;
    border: 0.75px solid lightgrey;
    border-radius: 3px;
    font-size: 11px;
    height: 23px;
    width: 172px;
    padding-left: 25px;
    margin-right: 35px;
    outline: none;
`;

const SearchIcon = styled.i`
    font-size: 10px;
    color: grey;
    position: absolute;
    margin: 8px 0 0 10px;
`;

let Search = props => {
    return (
           <div>
                <SearchIcon className="fas fa-search" />
                <Input type="text" placeholder="Search" name="searchString" value={props.value} onChange={props.searchHandler} />
           </div>
    )
}

export default Search;