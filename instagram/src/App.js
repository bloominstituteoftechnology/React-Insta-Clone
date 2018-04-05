import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import'./SearchBar.css';
import {SearchBar} from './SearchBar.js';
import dummyData from './dummy-data.js';


class App extends Component {
  constructor(props){
super(props)
this.state = {
  post: [],
}
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    return (
      <SearchBar classMainDiv="mainDiv" classInstaLogo="instaLogo" className="fab fa-instagram" searchClass="searchStyle" classIconDiv="iconsStyles" classCompass="far fa-compass" classHeart="far fa-heart" classUser="far fa-user"/>
     
    );
  }
}
export default App;
