import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import dummy from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      filteredPosts: []
    }
  }
  
  componentDidMount = () => {
    this.setState({
      dummyData: dummy,
      filteredPosts: this.state.dummyData
    })
  }

  filterPosts = (searchCriteria) => {
    if(searchCriteria === '') {
      this.setState({
        filteredPosts: this.state.dummyData
      })
    } else {
      const filteredPosts = this.state.dummyData.filter(post => post.username.includes(searchCriteria));
      this.setState({
        dummyData: filteredPosts
      })
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar data={this.state.filteredPosts} filtered={this.filterPosts} />
        <div className="posts">
          {this.state.dummyData.map((post, index) => {
            return <PostContainer data={post} key={index} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
