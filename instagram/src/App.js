import React, { Component } from "react";
import "./App.css";
import Authenticate from './Authentication/Authenticate';
import PostsPage from "./components/PostContainer/PostsPage";
 

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
  }

  componentDidMount() {
    const user = localStorage.getItem('user')
    this.setState({username: user})
  }
//the key is that such configuration should be done at the highest level component of your app (the root component). That means 99% of your components should probably not use componentWillMount.

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);


