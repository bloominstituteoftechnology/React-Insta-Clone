import React from 'react';
import './search-bar.css'
import Logo from './image';
import Title from './title';
import Search from './search';
import Actions from './action-image';
import Styled from 'styled-components'

const SearchBard = Styled.div`
    display: flex;
    justify-content: space-around
`


function SearchBar (props){
    return (
        <SearchBard>
            <Logo imgSrc={props.imgSrc} />
            <Title title={props.title} />
            <Search inputChange={props.inputChange} onClick={props.onClick} />
            <Actions />
        </SearchBard>
    )
}

export default SearchBar