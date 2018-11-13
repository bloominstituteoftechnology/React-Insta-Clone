import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
// import SimpleStorage from "react-simple-storage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filterInput: ''
  }
  }

  // componentWillMount() {
  //   localStorage.getItem('posts') && this.setState({
  //     posts: JSON.parse(localStorage.getItem('posts')),
  //     isLoading:  false
  //   })
  // }

  componentDidMount() {
    if (!localStorage.getItem('posts')) {
      this.setState({
        posts: dummyData
      })
    }
    else {
      console.log("Didn't work!")
    }
  }

  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem('posts', JSON.stringify(nextState.posts))
  // }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      inputText: event.target.value
    })
  }

  // changeFilterInputs = event => {
  //   event.preventDefault();
  //   this.setState({
  //     filterInput: event.target.value
  //   })
  // }

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

