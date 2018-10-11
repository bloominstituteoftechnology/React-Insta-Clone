import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const SearchBarParent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 800px;
    height: 75px;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 10px;

`;

const Instagram = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
`;

const InstagramTitleImg = styled.img`
    display: block;
    width: 150px;
    height: 40px;
    padding-left: 10px;
`;

const SearchField = styled.input`
    height: 30px;
    width: 250px;
    text-align: center;
    font-size: 16px;
    border-radius: 10px;
`;

const Icons = styled.div`
    font-size: 32px;
    width: 160px;
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
`;

class SearchBar extends React.Component {

    render() {
        return (
            <SearchBarParent> 
                <Instagram>
                    <i className="fab fa-instagram"></i>
                    <InstagramTitleImg alt="instagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" />
                </Instagram>
                <form onSubmit={this.props.searchSubmitHandler}>
                <SearchField 
                    type="text" 
                    placeholder="search" 
                    value={this.props.searchValue} 
                    onChange={this.props.searchInputHandler}
                    ></SearchField>
                </form>

                <Icons className="icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>

                </Icons>
            </SearchBarParent>
        )

    }
};

export default SearchBar;