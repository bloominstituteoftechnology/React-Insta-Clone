import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: "",
      filteredresults: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchHandler = e => {
    this.setState({ search: e.target.value });
    console.log(e.target.value);
  };

  filterSearchHandler = e => {
    e.preventDefault();
    const filteredlist = this.state.posts.filter(
      list => list.username === this.state.search
    );
    this.setState({
      filteredresults: filteredlist
    });
    console.log(filteredlist);
  };

  keyPress = e => {
    if (e.keyCode === 13) {
      this.filterSearchHandler(e);
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          filter={this.searchHandler}
          searchText={this.state.search}
          search={this.filterSearchHandler}
          buttonPress={this.keyPress}
        />

        {this.state.search
          ? this.state.filteredresults.map(data => (
              <PostContainer
                value={data.likes}
                postData={data}
                increment={this.increment}
              />
            ))
          : this.state.posts.map(data => (
              <PostContainer
                value={data.likes}
                postData={data}
                increment={this.increment}
              />
            ))}
      </div>
    );
  }
}

export default App;