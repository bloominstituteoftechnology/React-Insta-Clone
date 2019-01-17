import React from 'react';
import Logo from '../logo.png'
import PropTypes from 'prop-types';
import LogOutMenu from './LogOutMenu'
import styled from 'styled-components';


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;;
  border-bottom: 1px solid grey;
  align-items: center;
  font-size: 1.8rem;
  margin-bottom: 50px;
  position: relative;
`;
const LogoImage = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    i{
        width: 25%;
        text-align: center;
        align-self: center;
        font-size: 2.5rem;
        border-right: 1px solid grey;
        margin: 0 5px 0 10px;
        padding-right: 15px;
        &:hover{
            cursor: pointer;
        }
    }
    img{
        height: 40px;
        max-width: 75%;
        margin-left: 10px;
        &:hover{
            cursor: pointer;
        }
    }
`;
const StyledSearchInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input{
    font-size: 1rem;
    text-align: center;
    margin: 0 auto;
  }
`
const NavLogos = styled.div`
  display:flex;
  align-items: center;
  justify-content: flex-end;
  i{
      margin: 0 20px;
      &:hover{
          cursor: pointer;
      }
  }
`


class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: props.username,
            hidden: true,
            profilePage: false,
            postPage: true
        }
    }
    toggleMenu = () =>{
        if(this.state.hidden === true){
            // this.setState(prevState => ({hidden: !prevState}));
            this.setState({hidden: false})
        }
        else if(this.state.hidden === false){
            // this.setState(prevState => ({hidden: !prevState}));
            this.setState({hidden: true})
        }
    }
    render(){
        return(
            <Header>
                <LogoImage>
                    <i className="fab fa-instagram"/>
                    <img className="header-logo" src={Logo} alt="Instagram logo"/>
                </LogoImage>
            <StyledSearchInput>
                <input placeholder="&#128269; Search "
                 type="text"
                 name="search"
                 onChange={this.props.handleChanges}
                 />
            </StyledSearchInput>
            <NavLogos>
                <i className="far fa-compass"/>
                <i className="far fa-heart"/>
                <i onClick={this.toggleMenu} className="far fa-user"/>
            </NavLogos>
            {this.state.hidden === true 
                ? null 
                : <LogOutMenu  
                  username={this.state.username}
                  logout={this.props.logout}/>}
          </Header>
        )
    }
}


export default SearchBar;
