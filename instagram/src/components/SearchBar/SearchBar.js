import React from 'react';
import Logo from '../logo.png'
import PropTypes from 'prop-types';
import LogOutMenu from './LogOutMenu';
import {NavLogos, StyledSearchInput, LogoImage, Header} from '../Styles/Reusables';

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
