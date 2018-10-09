import React, { Component } from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data.js";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      search: "",
    };
  }

  componentDidMount() {
    this.setState({dummyData: dummyData});
  }

  searchInputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
}

  searchPosts = event => {
    event.preventDefault();
    this.setState({ 
      dummyData: this.state.dummyData.filter(post => post.username === this.state.search),
      search: ""
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar 
        search={this.state.search}
        searchInputHandler={this.searchInputHandler}
        searchPosts={this.searchPosts}
        />
        <PostContainer posts={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
