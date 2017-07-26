// Comment Section Component
// should render an input tag
// should call componentDidMount
// should store comments in state
// should add comments to state upon mounting

import React, { Component } from 'react';


class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      comments: this.props.comments
    }
    this.addComment = this.addComment.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments
      });
  }

  addComment(event) {
    event.preventDefault();
    const userAndComment = {
      username: 'AN AMAZING PERSON',
      text: this.state.input
    };
    this.setState({
      input: '',
      comments: [...this.state.comments, userAndComment]
    });
    // const commentList = this.state.comments;
    // commentList.push(this.state.newComment);
    // this.setState({newComment: ''});
    // this.setState({commentList});
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  render() {
    return (
      <div>
      	<div>
      	  <i className="material-icons">star</i>
      	  <i className="material-icons">chat bubble outline</i>
      	</div>
      	{this.state.comments.map((comment, i) => {
          return(
      	    <div key={i}>
              <h5>{this.state.comments[i].username}</h5>
              <p>{this.state.comments[i].text}</p>
      	    </div>
          );
        })}
      	<form onSubmit={this.addComment}>
      	  <input
      	    // type="text"
      	    // name="comment"
      	    placeholder="What do you think?"
      	    onChange={this.handleChange}
      	    value={this.state.input}
      	  />
      	</form>
      </div>
    )
  }
}export default CommentSection;
