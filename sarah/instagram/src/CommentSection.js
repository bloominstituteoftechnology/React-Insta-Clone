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
      newComment:{
        username: 'NotARobot',
        text: '',
      },
      comments: []
    };
    this.addComment = this.addComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments
      });
  }
  
  addComment(event) {
    event.preventDefault();
    const comment = this.state.comments;
    this.comments.push(this.state.newComment);
    this.setState({newComment.text: ''});
    this.setState({this.comments});
  }

  handleChange(event) {
    this.setState({newComment: event.target.value});
  }

  render() {
    return (
      <div>
      	<div>
      	  <i className="material-icons">star</i>
      	  <i className="material-icons">chat bubble outline</i>
      	</div>
      	{this.props.comments.map((comment, i) => {
          return(
            // <div key={this.props.comments[i].username}>
      	    <div key={i}>
              <h5>{this.props.comments[i].username}</h5>
              <p>{this.props.comments[i].text}</p>
      	    </div>
          );
        })}
      	<form>
      	  <input type="text" name="comment" placeholder="leave a comment?"/>
      	</form>
      </div>
    )
  }
}

export default CommentSection;
