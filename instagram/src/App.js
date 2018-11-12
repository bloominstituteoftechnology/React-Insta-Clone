import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      inputText: ''
  }
  }

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  addComment = event => {
    event.preventDefault();
    this.setState({
      // data: [...this.state.data, 
      // {myComment: this.state.inputText,
      // username: 'Bob'}],
      // data: this.state.data.map(e => {
      //   if (e.timestamp === event.timestamp) {
      //     console.log('timestamp', event.timestamp)
      //   }
      // }),
      inputText: ''
    })
  }

  render() {
    // console.log('data is...', this.state.data[0].comments)
    // console.log('data is...', this.state.data)
    return (
      <div className="App">
        <div>
          <SearchBar />
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

