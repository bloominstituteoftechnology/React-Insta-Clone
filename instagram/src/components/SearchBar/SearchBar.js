import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../logo.png'
import PropTypes from 'prop-types';
import LogOutMenu from './LogOutMenu'


class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: props.username,
            hidden: true
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
            <div className="search-bar position-relative">
            <div className="col main-logo">
                <i className="fab fa-instagram"/>
                <img src={Logo} alt=""/>
            </div>
            <div className="col search-input">
                <input placeholder="&#128269; Search "
                 type="text"
                 name="search"
                 onChange={this.props.handleChanges}
                 />
            </div>
            <div className="col act-logos">
                <i className="far fa-compass"/>
                <i className="far fa-heart"/>
                <i onClick={this.toggleMenu} className="far fa-user"/>
            </div>
            {this.state.hidden === true 
                ? null 
                : <LogOutMenu  
                  username={this.state.username}
                  logout={this.props.logout}/>}
            
          </div>
        )
    }
}


export default SearchBar;
