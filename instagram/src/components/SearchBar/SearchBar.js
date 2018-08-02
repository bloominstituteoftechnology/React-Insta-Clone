import React from 'react'; 
import './SearchBar.css'; 
import PropTypes from 'prop-types'; 


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
    }
    handleOut = () => {
        const text = document.querySelector(".tooltiptext");
        if(!this.state.logOut){
            text.style.visibility = 'hidden';  
        }
        
    }

    handleLogOut = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        
    }

    render () {
        
        return (
        <div className = "searchBar">
          
          <div className ="leftSideSearchBar"><i className="fab fa-instagram"></i> <span className="verticalLine">&#124;</span><span className ="logoTitle">Instagram</span> </div>
          <div className = "topSearch">
          <input className = "searchInput" onChange = {this.props.onChange} value ={this.props.value} placeholder="&#128269;Search"/>
          </div>
          <div className = "rightSideSearchBar">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i> 
            <i className="far fa-user tooltip" onDoubleClick = {this.handleLogOut} onClick = {this.handleClick} onMouseEnter = {this.handleHover} onMouseLeave = {this.handleOut}></i>
            <span className ="tooltiptext" onClick = {this.handleLogOut}>  Log out</span>
          </div>
        
        </div>
        );
    }
}



SearchBar.propTypes = {
    onChange: PropTypes.func, 
    value: PropTypes.string
}

export default SearchBar; 