import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/Search/SearchBar';
import PostContainer from './components/Container/PostContainer';
import dummyData from './dummy-data.js'; 

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      allPosts: [],
      displayedPosts: []
    }

    this.filterPosts = this.filterPosts.bind(this);
  }

  componentDidMount() {
    this.setState({
      allPosts: dummyData,
      displayedPosts: dummyData
    });
  }

  filterPosts(criteria) {
    if (criteria === '') {
      this.setState({
        displayedPosts: this.state.allPosts
      });
    } else {
      const filteredPosts = this.state.allPosts.filter(post => post.username.includes(criteria));
      this.setState({
        displayedPosts: filteredPosts
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">InstaClone</h1>
          <SearchBar posts={this.state.displayedPosts} filterPosts={this.filterPosts}/>
        </header>
        <div className="Posts">
          {this.state.displayedPosts.map((post) => {
            return (
              <PostContainer post={post}/>        
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
