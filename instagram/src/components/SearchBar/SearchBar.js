import React, { Component } from 'react';
// import './SearchBar.css';
import {
    
    
    
  } from 'reactstrap';
import styled from 'styled-components';
import PostContainer from '../PostContainer/PostContainer';

const Title = styled.h1 `
    font-size: 20px;
    font-style: italic;
    border-left: 2px solid lightgray;
    padding-left: 20px;
`
const Navbar = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    
`

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
      };
    handleInputChange = event => {
        const input = event.target.value;
        this.setState({
          search: input
        });
        this.props.handleSearch(input);
      };

      handleLogOut = () => {
        localStorage.clear('user');
        window.location.reload();
    }

    render() {
        
    return (
        <Navbar>

            <i class="fab fa-instagram fa-2x"></i>
            <Title>Instagram</Title>
            <form>
                <input 
                placeholder="&#x1F50D; Search"
                value={this.state.search}
                onChange={this.handleInputChange}

                />
            </form>

            <i class="far fa-compass fa-x"></i>
            <i class="far fa-heart fa-x"></i>
            <i onClick={this.handleLogOut} class="far fa-user fa-x"></i>
            
        </Navbar>

    )
}
}

export default SearchBar;