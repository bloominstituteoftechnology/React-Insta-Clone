import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData, //we can just pull the array of obj in like so
      commentInput: ""
    };
  }
  
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="instagramBanner">
            <img className="banner" alt="instaBanner" src="/React-Insta-Clone/assets/insta.png" />
        </div>
        <PostContainer data={this.state.data} /> {/*here we are naming the component(Postcontainer) and making the first key/value pair, data/{this.state.data} which will be wrapped in the object we call props*/}
        <CommentSection comments={this.state.commentInput} />
      </div>
    );
  }
}

export default App;
