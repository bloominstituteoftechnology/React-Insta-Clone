import React, { Component } from 'react';
// import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Instagram from './instagram.svg';
import styled from 'styled-components';

const Search = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    height: 50px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;
    height: 50px;

    img {
        fill: black;
        height: 25px;
    }

    p {
        padding: 0px 10px;
    }
`;

const SearchBox = styled.div`
    input {
        font-family: "proxima-nova",sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        border: 1px solid lightgray;
        background-color: rgb(250, 250, 250);
        border-radius: 2px;
        text-align: center;
        height: 18px;
    }
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 15%;
`;

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    searchInputHandler = (event) => {
        const value = event.target.value;

        this.setState({
          input: value
        })

        this.props.search(value);
      }

    render() {
        return (
            <Search>
                <Logo>
                    <img src={ Instagram } alt="instagram logo"></img>
                    <p>|</p>
                    <h1>Instagram</h1>
                </Logo>
                <SearchBox>
                    <input placeholder="🔍 Search" onChange={this.searchInputHandler} value={this.state.input}></input>
                </SearchBox>
                <Icons>
                    <FontAwesomeIcon icon="compass" />
                    <FontAwesomeIcon icon="heart" />
                    <FontAwesomeIcon icon="user" />
                </Icons>
            </Search>
        )
    }
}

export default SearchBar;