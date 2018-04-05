import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import'./components/SearchBar/SearchBar.css'
import'./components/PostContainer/PostContainer.css'
import {SearchBar} from './components/SearchBar/SearchBar.js'
import PostContainer from './components/PostContainer/PostContainer.js'
import dummyData from './dummy-data.js';

class App extends Component {
  constructor(){
super()

this.state = {
  post:[],
  comment:[]

}
  }
  componentDidMount(){

    this.setState({post: dummyData});
}
  
  render() {
    
    return (
      <React.Fragment>
        <SearchBar classMainDiv="mainDiv" classInstaLogo="instaLogo" className="fab fa-instagram" searchClass="searchStyle" classIconDiv="iconsStyles" classCompass="far fa-compass" classHeart="far fa-heart" classUser="far fa-user"/>
    
        <PostContainer {...this.state} />
        
     </React.Fragment>
    );
  }
}

export default App;
