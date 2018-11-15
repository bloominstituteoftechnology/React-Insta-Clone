import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import Authenticate from './components/Authentication/Authentication';
import LoginPage from './components/Login/Login';
import PostsPage from './components/PostContainer/PostsPage';
import styled from 'styled-components';

import CardOne from './components/Cards/CardOne';

import { Route, Link, Switch } from "react-router-dom";

const WrapperDiv = styled.div`
  background-color: red;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      filterInput: ''
  }
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      inputText: event.target.value
    })
  }

  filterComments = event => {
    event.preventDefault();
    this.setState({
      filterInput: event.target.value,
      posts: this.state.posts.filter(
        e => e.username.includes(this.state.filterInput)
      )
    })
  }

  render() {
    // console.log("this.state.posts.username", this.state.posts)
    return (
      <div className="App">
        <Route exact path="/card/0" component={CardOne} 
        />
        {/* <Route exact path="/card/0" render={props => (
          // <CardOne 
          //   {...props}
          //   posts={this.state.posts}
          //   filterComments={this.filterComments}
          //   filterInput={this.state.filterInput}
          // />
        )} 
        /> */}
        <div>
        <Route exact path="/" render={props => (
          <PostsPage 
            {...props}
            posts={this.state.posts}
            filterComments={this.filterComments}
            filterInput={this.state.filterInput}
          /> 
        )} />
        </div>
          {/* <Route exact path="/" component={App} /> */}
      </div>
    );
  }
}



export default Authenticate(App);

