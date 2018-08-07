import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import style from 'styled-components';

const Header= style.header`
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
`;

const LogoHeader = style.div`
    width: 201px;
    height: 48px;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
`;

const LogoImage = style.img`
    
`;

const Search = (props) => {
    
    return (
        <Header>
            <LogoHeader>
                logo
            </LogoHeader>
            <div className="input-container">
            <form onSubmit={props.handleSearchSubmit}>
                <input placeholder="Search names..." onChange={props.handleSearchString}/>
            </form>
                
            </div>
            <div className="options-container">
                <div className="options-item"></div>
                <div className="options-item"></div>
                <div className="options-item"></div>
            </div>
        </Header>
    )
}

export default Search;