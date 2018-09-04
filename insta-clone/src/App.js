import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar';
import PostList from './components/PostContainer/PostList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      commentText: '',
      searchText: '',
    };
  }

  handleComment = (event) => {
    this.setState({
      commentText: event.target.value
    })
  }
  handleSearch = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }

  addNewComment = (event, index) => {
    event.preventDefault();
    if (this.state.commentText) {
      this.setState({

        comments: [...this.state.comments, { username: 'THE_USER', text: this.state.commentText }],
        commentText: '',
      }
    
      )

  }
}
  componentDidMount = () => {
     this.setState({ postData: dummyData })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NOT Instagram</h1>
          <SearchBar
          handleSearch={this.handleSearch}/>

        </header>

       <PostList postData={this.state.postData} addComment={this.addComment} commentText={this.state.commentText} handleComment={this.handleComment}/>
      </div>
    );
  }


}

export default App;
