import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
// import commentData from './components/CommentSection/commentData';
// import CommentSection from './components/CommentSection/CommentSection';
import SearchBar from './components/SearchBar/SearchBar';
import PropTypes from "prop-types";



class App extends Component {
  constructor (){
    super();
    this.state ={
      // dummyData: dummyData
      userPosts: dummyData
      // commentData: commentData
    }
  }

  componentDidMount(){
   console.log(dummyData);
    console.log("Component did mount")
    setTimeout(() => {
      this.setState = ({userPosts: dummyData});
    }, 2000);
  }

  componentDidUpdate(){
    console.log('Did it work?')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <SearchBar />
       <PostContainer posts={this.state.userPosts} />
       {/* <CommentSection commentInput={this.state.userPosts} /> */}
      </div>
    );
  }
}

App.propTypes = {
  dummyData: PropTypes.array,
}

export default App;
