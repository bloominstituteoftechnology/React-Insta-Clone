import React from 'react';
import Icons from './Icons';
import Logo from './Logo';
import Search from './Search';
import PropTypes from 'prop-types';
import styled from '../../../node_modules/styled-components';

const SearchHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 90%;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    background-color: white
`

export const SearchBar = props =>   <SearchHeader>
                                        <Logo />
                                        <Search value={props.value} searchInputHandler={props.searchInputHandler} />
                                        <Icons />
                                    </SearchHeader>

SearchBar.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    searchInputHandler: PropTypes.func.isRequired
}