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
      data: dummyData, //we can just pull the array of obj in like so
      inputComments: [], //empty array for adding comments
      typedComment: " "
    };
  }

  // componentDidMount() {
  //   this.setState({ data: commentInput});
  // }

  addComment = event => {
    event.preventDefault();
    if (this.state.typedComment) {//if it is true that things have been entered then...
      this.setState({
        inputComments: [...this.state.inputComments, this.state.typedComment], //creating a new array, spreading in old data from array.
        typedComment: "" //.remebering each letter to make words, then it gets handled and then rendered.
      });
    }
  };

  handleInput = event => {
    this.setState({
      typedComment: event.target.value//this makes it so each letter entry is added to state [], making it possible to type
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
        <AddComments inputComments={this.state.inputComments} />
        <CommentInput 
          addComment={this.addComment}
          typedComment={this.state.typedComment} 
          handleInput={this.handleInput}
         />
      </div>
    );
  }
}

export default App;
