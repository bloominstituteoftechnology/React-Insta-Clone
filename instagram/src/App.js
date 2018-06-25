import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newComment: ""
    };

  }

  // change comments property by adding another index value to that array "comments" on each individual post from dummyData

  // changeComment = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  //   console.log("changeComment ran!");
  // }

  // componentDidMount() {
  //   this.setState({
  //     dummyData: dummyData
  //   });
  //   // window.localStorage.setItem()
  // }

  // componentDidMount() {
  //   // will be called third
  //   this.setState({ dummyData: dummyData }); // preferable for Async calls... AJAX
  //   if (window.localStorage.getItem("comments")) {
  //     this.setState({
  //       posts: JSON.parse(window.localStorage.getItem("comments"))
  //     }); // preferable for Async calls... AJAX
  //   } 
  //   window.localStorage.setItem("comments", JSON.stringify(dummyData));
  // }

  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({username: user});
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
