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
      search: '',
    };
  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  searchPosts = (event) => {
    event.preventDefault();
    let newPosts = [...this.state.postData];
    newPosts = newPosts.filter(post=> {
      return post.username === this.state.search;
    })
    this.setState({ postData: newPosts })

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
          searchPosts={this.searchPosts}
          handleChange={this.handleChange}/>

        </header>

       <PostList postData={this.state.postData}  />
      </div>
    );
  }


}

export default App;
