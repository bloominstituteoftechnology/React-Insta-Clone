import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const HeaderSearch = styled.input`
    margin: 0 20px;
    border: 1px solid lightgrey;
    width: 20%;
    padding-left: 10px;
    color: grey;
    background-color: whitesmoke;
    height: 30px;
    font-size: 2rem;
`;

const SearchBar = props => {
    return (
        <HeaderSearch
            className="fa fa-input"
            placeholder="&#xf002; Search"
            onChange={props.handleInputChange}
            value={props.filter}
            name="filter"
        />
    );
}

export default SearchBar;