import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostListContainer from './components/PostListContainer/PostListContainer.js';


class App extends Component {

  constructor(){
    super();
    this.state = {
      postData: []

    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({postData: dummyData});

    }, 500);

  }

  // addComment(commentList){
  //   this.setState({
  //      commentList
  //   })
  // }

  render() {
    return (
      <div className="App">
        {/* <h1>Instagram App</h1> */}
        <SearchBar />
        <PostListContainer postData={this.state.postData}/>
      </div>
    );
  }
}

export default App;
