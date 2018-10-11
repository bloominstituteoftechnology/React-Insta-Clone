import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//import './SearchBar.css';

const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e7e7e7;
`;

const AppIconContainer = styled.div`
    padding: 5px 3% 5px 10px;
    border-right: 1px solid black;
`;

const AppNameContainer = styled.div`
    width: 35%;
    margin-left: 3%;
    font-size: 3.2rem;
    font-weight: bold;
    font-family: 'Indie Flower', cursive;
`;

const SearchBarInput = styled.input`
    width: 100%;
    height: 30px;
    font-size: 1.8rem;
    border-radius: 5px;
    outline: none;

    &::placeholder{
        text-align: center;
        font-size: 1.8rem;
    }
`;

const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 15%;
    margin-left: 12%;
    font-size: 1.3rem;
`;

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: ''
        }
    }
    searchPosts = (event)=>{
        event.preventDefault();
        this.props.searchPosts(this.state.searchText);
        this.setState({
            searchText: ''
        })
    }

    storeSearchText = (event)=>{
        event.preventDefault();
        this.setState({
            searchText: event.target.value
        })
    }

    render(){
        return (
            <SearchBarContainer>
                <AppIconContainer><i className="fas fa-camera-retro fa-3x"></i></AppIconContainer>
                <AppNameContainer>Exchange-O-Gram</AppNameContainer>
                <form onSubmit={this.searchPosts}>
                    <SearchBarInput onChange={this.storeSearchText} placeholder={'\ud83d\udd0d Search'} value={this.state.searchText}></SearchBarInput>
                </form>
                <IconsContainer><i className="far fa-compass fa-2x"></i><i className="far fa-heart fa-2x"></i><i className="far fa-user fa-2x"></i></IconsContainer>
            </SearchBarContainer>
        )
    }
}

SearchBar.propTypes = {
    searchPosts: PropTypes.func
}

export default SearchBar;