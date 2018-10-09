import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js';
// import PostContainer from './components/PostContainer/PostContainer.js';

import SearchBar from './components/SearchBar/SearchBar.js';

// /Users/katjohnnson/LambdaSchool/React-Insta-Clone/dummy-data.js

//  iterate over dummyData, passing each individual object as a prop to an instance of PostContainer.
// Each PostContainer component will then pass the array of comments on each post object as a prop to an instance of the CommentSection component.
// The CommentSection component will receive the array of comments as props and render a Comment component with the username of the poster as well as the post's text. Additionally, there should be an input box that allows users to submit a new comment for any post. We'll work on posting new comments tomorrow.
// Be sure to check the Types of the data you are passing around as props in the components that will be using props to present data as DOM elements. This should be linked to your Comment component that Comment Section will render and potentially to your Post component that Post Container will render.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData,
    }
  }



  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <SearchBar    />
        </header>
      </div>
    );
  } // render
}   // App

export default App;
