import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Styled components
const SearchWell = styled.header `
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #ecf0f1;
`;

const SearchContainer = styled.section `
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 15%;
`;

const LogoImage = styled.img `
    width: 100px;
`;

const VL = styled.section `
    border-left: 6px solid #ecf0f1;
    height: 50px;
`;

const Search = styled.input `
    padding: 10px 40px;
    text-align: center;
    border: 2px solid #ecf0f1;
`;

class SearchBar extends Component {
    render() {
        return (
            <SearchWell>
                <SearchContainer>
                    <LogoImage src={require('../img/insta-camera-logo.jpg')} alt={'insta-camera'}></LogoImage>
                    <VL></VL>
                    <LogoImage className='logo' src={require('../img/insta-logo.png')} alt={'insta-logo'}></LogoImage>
                </SearchContainer>
                <SearchContainer>
                    <Search className='search' 
                        type='text' 
                        placeholder='Search' 
                        value={this.props.searchInput} 
                        onChange={this.props.handleSearch} 
                        onKeyPress={this.props.searchUp} 
                    />
                </SearchContainer>
                <SearchContainer>
                    <FontAwesomeIcon className='icons' icon='compass' />
                    <FontAwesomeIcon className='icons' icon='heart' />
                    <FontAwesomeIcon className='icons' icon='user' onClick={this.props.clearStorage} />
                </SearchContainer>
            </SearchWell>
        );
    }
}

export default SearchBar;