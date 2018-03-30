import React, { Component } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import dummyData from './dummy-data.js'
import PostContainer from './Components/PostContainer/PostContainer';
import { Navbar } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({ dummyData });
  }

  render() {
    return (
      <div>
        <Navbar />
        <SearchBar />
        {this.state.dummyData.map((Post, i) => <PostContainer key={i} post={Post}/>)}
      </div>
    );
  }
}

export default App;
