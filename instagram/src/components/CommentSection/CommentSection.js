import React, { Component } from 'react';

class CommentSection extends Component {
  constructor(props) {
    super();
    this.state = {
      comments: [],
      newComment: ''
    };

    this.addComment = this.addComment.bind(this);
    this.handleInput= this.handleInput.bind(this); // know diff between binding here and using arrow()
  }

  componentDidMount() { // runs after output is inserted onto the DOM
    this.setState({
      comments: this.props.comments
    });
  }

  addComment(e) { // e=> a 'syntheticEvent'
    e.preventDefault(); // prevent default behaviors
    const commentInfo = {
      username: 'Julian', //hardcoded username
      text: this.state.newComment // set text prop = new comment string value
    };

    const commentArr = this.state.comments; // create copy of comments array
    commentArr.push(commentInfo); // add new commentinfo obj to comments array
    this.setState({
      comments: commentArr, // using setState to update the comments array
      newComment: '' // setting newComment back to empty string
    });
  };

  handleInput(e) {
    this.setState({newComment: e.target.value}); //handling the user input as it's entered
  }



  render() {
    return (
      <div>
        {/*
        {this.state.comments.map((comment, i) => (

        ))}
      */}
        <input type="text" value={this.state.value} onChange={this.handleInput}/>
        <button onClick={this.addComment}>Comment</button>
      </div>
    );
  };
}

export default CommentSection;