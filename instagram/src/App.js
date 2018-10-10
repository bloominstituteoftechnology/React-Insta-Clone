import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/postspage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={ 
      dummyData:[],
      filteredPosts: []
    };
  }
  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }


  render() {
    return <PostsPage search = {this.state.searchFunction} content = {this.state.dummyData} />
  }

}

export default App;
