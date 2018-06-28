import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // postData: dummyData,
      postData: [],
      originalPostData: [],
      searchField: ""
    };
  }

  addNewComment = (event,index) => { 
    event.preventDefault();
    const comments = this.state.comments.slice();
    const newComment = {
        username: "default usrname",
        text: this.state.comment
    }
    comments.push(newComment);
    this.setState({comments: comments, comment: ""});
}


  searchUsername = (event) => {
    event.preventDefault();
    const postData = this.state.originalPostData.slice();
    const filteredPostData = postData.filter(item => item.username === this.state.searchField);
    this.setState({postData: filteredPostData, searchField: ""})
  }

  searchFieldHandler = event => {
    console.log(event.target.value);
    this.setState({searchField:event.target.value})
  }

  // In app.js use componentDidMount() to set your data to the component's state. Use the 
  // state object to pass data to your PostContainer component.

  componentDidMount() {
    console.log("App DidMount called");
    this.setState({
      postData: dummyData,
      originalPostData: dummyData
    })
  }  // "Good place to fetch your data and set your state accordingly."

  // LIFECYLE MOUNTING: constructor invoked ---> render called ---> add stuff to DOM ---> componentDidMount invoked (in case there's any asynchronous data we need to handle) 
  // note that componentDidUpdate() is another method called upon after render 
  // Summarizing: constructor---> render--->DidMount--->render--->DidUpdate


  // componentDidUpdate(prevProps, prevState) {
  //   console.log("Prev Props:", prevProps);
  //   console.log("Prev State:", prevState);
  // }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IG APP CLONE</h1>
        </header>
        <SearchBar 
          searchFieldHandler = {this.searchFieldHandler}
          activeValue = {this.state.searchField}
          searchUsername = {this.searchUsername}
        />
        <PostContainer postData = {this.state.postData}/>        
      </div>
    );
  }
}

export default App;
