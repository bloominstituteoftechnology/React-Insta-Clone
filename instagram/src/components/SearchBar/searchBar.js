import React from 'react';
import './SearchBar.css';
import camera from '../../images/camera.png';
import instalogo from '../../images/instagram.png';
import compass from '../../images/compass.png';
import heart from '../../images/heart.png';
import person from '../../images/person.png';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.username, "propsuser")      
        this.state = {
            searches: props.username,
            search: ""       
        }           
    }
    
    eventHandler = e => {
        console.log(e);
        this.setState ({search : e.target.value});
    }

    filterSearch = e => {
        e.preventDefault();
        let usernames = this.state.searches;
        if (usernames===this.state.username)
        usernames.filter(usernames);   
        this.setState({usernames});
    }

    render(){
    return (
        <div className = "search-container">
        <div className = "search-contain">
        <div className = "search-left">
            <img className ="camera" src = {camera} alt = "cam thumbnail"/>
            <img className ="instalogo" src = {instalogo} alt = "instalogo thumbnail"/>
        </div>
        
        <form className = "mid-text" onSubmit = {this.filterSearch}>
            <input 
                type = "text"           
                placeholder = "search"
                value = {this.state.search}
                onChange = {this.eventHandler}
            />
        </form>
        
        <div className = "search-right">
            <img className ="compass" src = {compass} alt = "compass thumbnail"/>
            <img className ="heart-search" src = {heart} alt = "heart thumbnail"/>
            <img className ="person" src = {person} alt = "person thumbnail"/>
        </div>
        </div>
        </div>
    )
}
}
 
export default SearchBar;