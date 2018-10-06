import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import dummyData from './components/dummy-data';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    }
  }

  componentDidMount() {
    this.setState({instaData: [dummyData]})
  }


  render() {
    return (
      <div className="insta_app">
      <SearchBar />
      <PostContainer instaData={this.state.instaData} dummyData={dummyData} />
      
      
      </div>
    );
  }
}

export default App;
