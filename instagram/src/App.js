import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import CommentInput from './components/CommentSection/CommentInput.js';
import AddComments from './components/CommentSection/AddComments.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [] //we can just pull the array of obj in like so
    };
    console.log("constructor ran");
  }
  
  componentDidMount() {
    this.setState({ data: dummyData}); //giving access to dummyData
  }

  render() {
    console.log(this.state, "render is a go!");
    return (
      <div className="App">
        <div>
          <h1 className="instaCloneBanner">InstaClone</h1>
       </div>
        <PostContainer data={this.state.data} /> {/*here we are naming the component(Postcontainer) 
        and making the first key/value pair, data/{this.state.data} which will be wrapped in the 
        object we call props*/}
      </div>
    );
  }
}

export default App;

