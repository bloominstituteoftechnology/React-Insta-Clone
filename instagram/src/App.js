import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      filteredPosts: []
    }
  }

  componentDidMount(){
    this.setState({data: dummyData})
  }

  searchPostsHandler = e => {
    const posts = this.state.data.filter(p => {
      if (p.username.includes(e.target.value)){
        return p;
      }
    });
    this.setState({filteredPosts: posts});
  }

  render() {
    return (
      <div className="App">
        <SearchBar handle={this.handleInput} searchPosts={this.searchPostsHandler} />
        <PostContainer post={this.state.filteredPosts.length > 0
          ? this.state.filteredPosts
           : this.state.data} />
      </div>
    );
  }
}

export default App;
