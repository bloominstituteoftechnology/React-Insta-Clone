import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
// import SimpleStorage from "react-simple-storage";
import Authenticate from './components/Authentication/Authentication';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filterInput: ''
  }
  }

  componentDidMount() {
    // if (!localStorage.getItem('posts')) {
      this.setState({
        posts: dummyData
      })
    // }
    // else {
    //   console.log("Didn't work!")
    // }
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
    return (
      <div className="App">
        {/* <SimpleStorage parent={this} /> */}
        <div>
          <Authenticate />
          <SearchBar 
          filterComments={this.filterComments}
          filterInput={this.state.filterInput}
          // changeFilterInputs={this.changeFilterInputs}
          />
        </div>
        <div>
            <PostContainer 
            posts={this.state.posts}
            />
        </div>
      </div>
    );
  }
}



export default App;

