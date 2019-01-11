import React, { Component } from 'react'
import './SearchBar.css';
import logo from './Images/logo.png';
import location from './Images/location.png';
import like from './Images/like.png';
import user from './Images/user.png';
import styled from 'styled-components';
import {} from 'reactstrap';

const NavBar = styled.div`
 margin: 0 auto;
  max-width: 600px;
  background-color: white;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
`
const Nav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Input = styled.div`
background-color: #f3f3f3;
border-radius: 4px;
padding: 5px;
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
        <NavBar>

                <a href="#"><img src={logo} alt="insta-logo" /></a>
           
            <Input>
                <input placeholder="Search" 
                value={this.state.search} 
                onChange={this.handleInputChange} />
           </Input>
            
            <Nav>
                <a href="#"><img src={location} alt="location" /></a>
                <a href="#"><img src={like} alt="like" /></a>
                <a href="#" onClick={this.handleLogOut}><img src={user} alt="user" /></a>
            </Nav>
        </NavBar>
        
    )
}
}
 export default SearchBar; 
