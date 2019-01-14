import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import CommentSection from './components/CommentSection/CommentSection.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import PostsPage from './components/PostContainer/PostsPage.js';
import Authenticate from './components/Authentication/Authenticate.js';

import dummyData from './dummy-data.js';


console.log(dummyData[0].username)
let displayData = dummyData;
let dataContainer = [];
let name = "";



class App extends Component {
  constructor(){
    super();
    this.state = {
      data:displayData,
      fieldValue: name
    }
  }

 test = ()=>{
   console.log(test)
 }
 searchName = (event) =>{
   name = event.target.value;
   this.setState({fieldValue: name})

   console.log(name)
 }
 findPosts = (event) =>{
  console.log(name)
  event.preventDefault();
  dataContainer = displayData.filter(post => {

      return(post.username === name)
  })
  displayData = dataContainer;
  this.setState((prevState, props) => ({data: displayData}))
  console.log(this.state.data)


 }

 componentDidMount(){
   this.setState({data: displayData});
 }

  render() {
    return (
      <div className="App">
          <PostsPage submitFunction = {this.findPosts} handleChange = {this.searchName} fieldValue = {this.state.fieldValue} data = {this.state.data}/>
      </div>
    );
  }
}

const WrappedComponent = Authenticate(App)


export default WrappedComponent;
