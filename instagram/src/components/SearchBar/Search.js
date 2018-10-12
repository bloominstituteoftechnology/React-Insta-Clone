import React from 'react';
import styled from '../../../node_modules/styled-components';

const SearchInput = styled.input`
    width: 250px;
    height: 25px;
    text-align: center;
`

export default (props) => <SearchInput placeholder="&#x1F50D; Search" onChange={props.searchInputHandler} value={props.value} />