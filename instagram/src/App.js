import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import dummyData from './dummy-data';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state= { 
      postData:[], 
      currentSearch: ""
    };
  }

  updateSearch = (e) => {
    this.setState({
    currentSearch: e.currentTarget.value
    })
  }

  logout = (e) => {
    console.log("clicked")
    localStorage.isLoggedIn = false;
    window.location.reload();
  }

  focusSearch = (e) => {
    e.currentTarget.parentElement.classList.toggle('active');
  }

  componentDidMount() {
    this.setState({postData: dummyData});
  }

  render() {
    return (
      <section className="App">
        <PostsPage 
        updateSearch={this.updateSearch} 
        focusSearch={this.focusSearch} 
        postData={this.state.postData} 
        currentSearch={this.state.currentSearch} 
        logout={this.logout}
        />
      </section>
    );
  }
}

export default Authenticate(App);
