import React, { Component } from 'react';
import './SearchBar.css';
import SearchBarLogoContainer from './SearchBarLogoContainer';
import SearchBarForm from './SearchBarForm';
import IconsContainer from './SearchBarIconsContainer';


const SearchBar = props => {

        return (
            <div className="container">
                <div className="searchbar-container">
                    <div className="container-flex">
                        <SearchBarLogoContainer />
                        <SearchBarForm filter={props.filter} handleInputChange={props.handleInputChange}/>
                        <IconsContainer />
                    </div>
                </div>
            </div>
        );

};

export default SearchBar;