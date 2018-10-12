import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const Input = styled.input`
        text-align: center;
        border-radius: 3px
`

const SearchInput = (props) => {
    return (
        <Input
            onKeyUp={props.search}
            type='search'
            placeholder='🔍 search'
        />
    )
}

export default SearchInput;