import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './components/dummy-data'
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: [],  //placeholder for posts
      filteredPosts: []  //placeholder for posts filtered by SearchBar
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData,
    })  
  }

//searchHandler takes argumemt and filters posts the search parameters
searchHandler = ev => {
  const posts = this.state.posts.filter(p => {
    if (p.username.includes(ev.target.value)){
      return p;
    }
})
this.setState({ filteredPosts: posts })
}

  
  render() {
    return (
      <div className="App">
        <SearchBar 
            searchTerm={this.state.searchTerm}
            searchPosts={this.searchHandler}
            />
        <PostContainer posts={this.state.filteredPosts.length > 0
            ? this.state.filteredPosts
            : this.state.posts
          }
        />
      </div>
    )
  }
}


export default App;
