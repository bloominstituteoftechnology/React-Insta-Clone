import React from 'react';
import './SearchBar.css';
import camera from '../../images/camera.png';
import instalogo from '../../images/instagram.png';
import compass from '../../images/compass.png';
import heart from '../../images/heart.png';
import person from '../../images/person.png';

import {
    Title,
    SearchContainer,
} from "../../reusables"


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            searches: props.username,
            search: ""       
        }           
    }
    
    eventHandler = e => {
        console.log(e);
        this.setState ({search : e.target.value});
    }

    // filterSearch = e => {
    //     e.preventDefault();
    //     const searches = this.state.searches.filter(post =>{
    //         if(post.username.includes(e.target.value)){
    //             return post
    //         }
    //     })
    //     this.setState({filtered})
    //     }

        // let usernames = this.state.searches;
        // if (usernames===this.state.username)
        // usernames.filter(usernames);   
        // this.setState({usernames});
    

    render(){
    return (
        <SearchContainer>
        <div className = "search-contain">
        <div className = "search-left">
            <img className ="camera" src = {camera} alt = "cam thumbnail"/>
            <img className ="instalogo" src = {instalogo} alt = "instalogo thumbnail"/>
        </div>

        {/* onSubmit = {this.filterSearch} */}

        <form className = "mid-text" >
            <Title 
                onKeyDown = {this.searchPosts}
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
        </SearchContainer>
    )
}
}
 
export default SearchBar;