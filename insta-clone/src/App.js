import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'
import Data from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      username: 'senior_one_more',
      newComment: '',
    }
  }

  componentDidMount() {
    this.setState({
      data: Data
    })
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addComment = (event, index) => {
    event.preventDefault()
    let currentComments = this.state.data[index].comments
    currentComments.push({username: 'senior_one_more', text: this.state.newComment})
    this.setState({
      [this.state.data[index].comments]: currentComments,
      newComment: '',
    })
  }

  addLike = (event, index) => {
    event.preventDefault()
    let currentCount = this.state.data[index].likes + 1
    this.setState({
      [this.state.data[index].likes]: currentCount,
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer
          data={this.state.data}
          username={this.state.username}
          changeHandler={this.changeHandler}
          newComment={this.state.newComment}
          addComment={this.addComment}
          addLike={this.addLike}
        />
      </div>
    );
  }
}

export default App;
