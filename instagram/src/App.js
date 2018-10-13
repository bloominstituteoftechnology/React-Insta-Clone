import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import Authenticate from './components/Authentication/Authenticate';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  filterPosts = str => {
    const filteredPosts = dummyData.filter(post => post.username.includes(str));
    this.setState({ data: filteredPosts });
  }

  render() {
    return (
      <div className="App">
        <SearchBar filterPosts={this.filterPosts}/>
        <PostContainer posts={this.state.data}/>
      </div>
    );
  }
}

export default Authenticate(App);
