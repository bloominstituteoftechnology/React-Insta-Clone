import React, { Component } from 'react';
// import './SearchBar.css';
import {Header, SearchbarContainer, ContainerFlex} from './SearchBarStyled';
import SearchBarLogoContainer from './SearchBarLogoContainer';
import SearchBarForm from './SearchBarForm';
import IconsContainer from './SearchBarIconsContainer';


const SearchBar = props => {

        return (
            <Header>
                <SearchbarContainer>
                    <ContainerFlex>
                        <SearchBarLogoContainer />
                        <SearchBarForm filter={props.filter} handleInputChange={props.handleInputChange}/>
                        <IconsContainer />
                    </ContainerFlex>
                </SearchbarContainer>
            </Header>
        );

};

export default SearchBar;