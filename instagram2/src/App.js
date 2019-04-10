import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      searchData: []
    }
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    })
  }

  searchBarHandler = event => {
    const posts = this.state.dummyData.filter( post => {
      if (post.username.includes(event.target.value)) {
        return post
      }
    });
    this.setState({
      searchData: posts
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchBarHandler}/>
        <PostContainer postData={
          this.state.searchData.length > 0 ?
          this.state.searchData :
          this.state.dummyData} />
      </div>
    );
  }
}

export default App;