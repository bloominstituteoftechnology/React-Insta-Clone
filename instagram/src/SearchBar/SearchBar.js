import React from 'react';
import Logo from './Logo';
import './SearchBar.css';
import Search from './Search';
import Icons from './Icons';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const SearchBar = (props) => {
        return (
            <WrapperDiv>
                <Logo />
                <Search data={props.data}/>
                <Icons />
            </WrapperDiv>
        )
}




export default SearchBar;