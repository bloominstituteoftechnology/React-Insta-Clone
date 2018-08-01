import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faCommentDots } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faComment, faCommentDots)



class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData});
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
