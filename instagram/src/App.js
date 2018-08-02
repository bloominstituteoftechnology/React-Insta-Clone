import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostPage from "./components/PostContainer/PostPage";
import Authenticate from "./components/Authentication/Authenticate";

class App extends Component {
  constructor(){
    super()
    this.state ={
      posts: dummyData,
      value: undefined
    }
  }
  componentDidMount(){
    //this is asynchronous so this allows for rerendering with new data
    //but it's only asynchronous depending on the rendering context.
    const user = localStorage.getItem("user");
this.setState({ username: user });
    if (window.localStorage.getItem("comments")){
      this.setState({
        posts: JSON.parse(window.localStorage.getItem("comments"))
      })

      //The getItem() method of the Storage interface, when passed a key name, will return that key's value or null if the key does not exist.
    }
  //here we are
    else{
    this.setState = {
      value: true,
  posts: dummyData
    }
  }
  window.localStorage.setItem("comments",  JSON.stringify(dummyData))
  //stringify
}
  render() {
    return (
      <div className="App container">
        <PostPage/>
      </div>
    );
  }
}

export default Authenticate(App);
