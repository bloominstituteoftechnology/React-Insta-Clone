import React, {Component} from 'react';
import './SearchBar.css'
import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
    background-color: white;
`

const LogoDiv = styled.div`
    width: 212px;
    padding: 19px 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Line = styled.div`
    height: 32px;
    border-right: 1px solid gray;
`

const SearchbarInput = styled.input`
    text-align: center;
    width: 211px;
    height: 24px;
    border: 1px solid lightgray;
    justify-self: center;
    padding: none;
    font-size: 1.4rem;
    border-radius: 3px;
    background-color: #FAFAFA;
    &:focus {
        outline: none;
    }
`

const LoginDiv = styled.div`
    width: 215px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 40px;
`

const LoginIcon = styled.img`
    width: 22px;
    height: 22px;
    &:hover {
        cursor: pointer;
    }
`

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        }
    }

    changeHandler = (event) => {
        this.setState({
            searchQuery: event.target.value
        }, () => {this.props.onSearch(this.state.searchQuery)})
    }

    render() {
        return(
            <HeaderDiv>
                <LogoDiv>
                    <i className="fab fa-instagram"></i>
                    <Line />
                    <img className="logo-img" src="instagram_logo.svg" alt="logo" />
                </LogoDiv>
                
                <SearchbarInput type="text" placeholder="Search" value={this.state.searchQuery} onChange={this.changeHandler}></SearchbarInput>

                <LoginDiv>
                    <LoginIcon src="compass.svg" alt="compass" />
                    <LoginIcon src="like.svg" alt="like" />
                    <LoginIcon onClick={this.props.logOut} src="login.svg" alt="login" />
                </LoginDiv>
            </HeaderDiv>
            
        );
    }
} 

export default SearchBar;