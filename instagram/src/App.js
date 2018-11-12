import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filterInput: ''
  }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  filterComments = event => {
    this.setState({
      filterInput: event.target.value,
      posts: this.state.posts.filter(
        e => e.username.includes(this.state.filterInput)
      )
    })
  }

  render() {
    // console.log('data is...', this.state.data[0].comments)
    // console.log('data is...', this.state.data)
    return (
      <div className="App">
        <div>
          <SearchBar 
          filterComments={this.filterComments}
          filterInput={this.state.filterInput}
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

