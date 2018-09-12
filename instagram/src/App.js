import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import CommentInput from './components/CommentSection/CommentInput.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData, //we can just pull the array of obj in like so
      inputComments: [],
      typedComment: ""
    };
  }

  // componentDidMount() {
  //   this.setState({ data: commentInput});
  // }

  addComment = event => {
    event.preventDefault();
    if(this.state.typedComment) {
      this.setState({
        inputComments: [...this.state.inputComments, this.state.typedComment],
        typedComment: ""
      });
    }
  };
  handleInput = event => {
    this.setState({
      typedComment: event.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div>
          <h1 className="instaCloneBanner">InstaClone</h1>
       </div>
        <PostContainer data={this.state.data} /> {/*here we are naming the component(Postcontainer) 
        and making the first key/value pair, data/{this.state.data} which will be wrapped in the 
        object we call props*/}
        <CommentInput addComment={this.addComment}
                      inputComment={this.state.inputComment}
                      handleInput={this.handleInput}
                      />
      </div>
    );
  }
}

export default App;
