import React from 'react';
// import "./search.css";
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Header = styled.header`
    width: 700px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
`;

const LeftSideIcons = styled.div`
    width: 30%;
    text-align: left;
    display: flex;
    font-size: 30px;
`;

const LogoIcon = styled.img`
    font-size: 45px;    
    margin-right: 15px;
`;

const SearchDiv = styled.div`
    width: 30%;
    text-align: center;
`;

const SearchInput = styled.input`
    text-align: center;
    height: 20px;
    border-radius: 3px;
`;

const RightSideIconsDiv = styled.div`
    width: 30%;
    text-align: right;
`;

const RightSideIcons = styled.img`
    font-size: 26px;
    margin: 0 5px;
`;


function SearchBar(props) {
    return (
        <div>
            <Header >
                <LeftSideIcons >
                    <LogoIcon className='fab fa-instagram' src="" alt="instaclone logo" />
                    | InstaClone
                </LeftSideIcons>
                <SearchDiv >
                    <form>
                        <SearchInput 
                            type="text" 
                            name='searchInputText'
                            placeholder='search'
                            value={props.searchText}
                            onChange={props.handleChange}
                        />
                    </form>
                </SearchDiv>                    
                <RightSideIconsDiv >
                    <RightSideIcons className="far fa-compass" src="#" alt="IC icon 1"/>
                    <RightSideIcons className='far fa-heart' src="#" alt="IC icon 2"/>
                    <RightSideIcons className='far fa-user' src="#" alt="IC icon 3"/>
                </RightSideIconsDiv>
            </Header>
        </div>
    );
}

SearchBar.propTypes = {
    handleChange: PropTypes.func,
    searchText: PropTypes.string,
}

export default SearchBar;