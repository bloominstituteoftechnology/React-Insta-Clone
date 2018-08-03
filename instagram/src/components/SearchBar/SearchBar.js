import React from 'react'; 

import logo from './instagram.png';
import PropTypes from 'prop-types'; 
import {SearchBarDiv, PostPageLogo, LeftSideDiv, SearchInput,
RightSideDiv,ToolTipTextDiv} from './SearchBarStyled.js';


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {logOut: false}; 
    }

    handleClick = () => {
        if(this.state.logOut){
            this.setState({logOut: false});
        } else {
            this.setState({logOut: true});
        }
         
    }

        
    handleHover = () => {
        const text = document.querySelector(".tooltiptext");
        text.style.visibility = 'visible';
        const tip = document.querySelector(".tooltip");
        tip.style.background = 'red'; 
        tip.style.cursor = "pointer";
    }
    
    handleToolTipText = () => {
        const text = document.querySelector(".tooltiptext");
        text.style.cursor = 'pointer'; 
        text.style.textDecoration = 'underline';
    }
    handleToolTipTextLeave = () => {
        const text = document.querySelector(".tooltiptext");
        text.style.cursor = 'none'; 
        text.style.textDecoration = 'none';
    }

    handleOut = () => {
        const text = document.querySelector(".tooltiptext");
        if(!this.state.logOut){
            text.style.visibility = 'hidden';  
        }
        const tip = document.querySelector(".tooltip");
        tip.style.background = 'none'; 
        
        
    }

    handleLogOut = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('comments');
        window.location.reload(); 
        
    }

    render () {
        
        return (
        
        <SearchBarDiv>
          
          <LeftSideDiv><PostPageLogo src={logo} alt ="Instagram"/> </LeftSideDiv>
          <div className = "topSearch">
          
            <SearchInput onChange = {this.props.onChange} value ={this.props.value} placeholder ="&#128269;Search"/>
          </div>
          
          <RightSideDiv>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i> 
            <i className="far fa-user tooltip" onDoubleClick = {this.handleLogOut} onClick = {this.handleClick} onMouseEnter = {this.handleHover} onMouseLeave = {this.handleOut}></i>
    
            <ToolTipTextDiv className = "tooltiptext" onMouseEnter = {this.handleToolTipText} onMouseLeave = {this.handleToolTipTextLeave} onClick = {this.handleLogOut}>Log out</ToolTipTextDiv>
          </RightSideDiv>
        
        </SearchBarDiv>
        );
    }
}



SearchBar.propTypes = {
    onChange: PropTypes.func, 
    value: PropTypes.string
}

export default SearchBar; 