import React, { Component } from 'react';
import logo from "../../images/logo.png";
import instagram from"../../images/instagram.png";
import explore from"../../images/explore.png";
import heart from"../../images/heart.png";
import user from"../../images/user.png";
import styled from 'styled-components'
import'./Search.css';

const SearchContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 77px;
`;

const Container = styled.div`
  display:flex;
  justify-content:row;
  width:100%;
  max-width:940px;
  margin:0 auto;
  /*border:1px dotted darkgray*/;
`;

class Search extends Component {
  
  handleLogout = () =>{
    localStorage.removeItem('user');
    window.location.reload();
  }
  
  render() { 
    return (  
      <Container>
        <SearchContainer>
          <div className="search-header">
           <div className="main-logo">
              <img src={logo} alt="logo"/>
           </div>
            <div className="logo" onClick={this.props.reload}>
             <img src={instagram} alt="instagram"/>
            </div>
          </div>
          <div className="search-bar">
           {/* <img src={search} alt="search"/> */}
           <form onSubmit={this.props.submit}>
            <input 
            value={this.props.value} 
            onChange={this.props.change} 
            type="text" 
            placeholder="search"
            />
           </form>
          </div>
          <div className="search-menu">
            <img src={explore} alt="explore"/>
            <img src={heart} alt="explore"/>
            <img src={user} alt="explore" 
            onClick={this.handleLogout}/>
          </div>
        </SearchContainer>
      </Container>
    );
  }
}
 
export default Search;