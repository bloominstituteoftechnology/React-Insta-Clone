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

  searchFunction = event => {
    console.log(event.target.value);
    const posts = this.state.dummyData.filter(search => {
      if (search.username.includes(event.target.value)) {
        return search;      
      }
    });
    this.setState({ dummyData: posts });
  };
  render() {
    return <PostsPage search = {this.state.searchFunction} content = {this.state.dummyData} />
  }

}

export default App;
