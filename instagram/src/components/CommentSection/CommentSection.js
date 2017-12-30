import React, { Component } from 'react';

class CommentSection extends Component {
  constructor() {
  	super();
  	this.state = {
  		commentList: [],
  		newComment: ''
  	}
  }

  componentDidMount() {
    this.setState( {
    	commentList: this.props.comments
    })
  }

  handleinputComment = (e) => {
    this.setState( {
    	newComment: e.target.value
    })
  }
  
  addComment = () => {
   const commentList1 = this.state.commentList;
   commentList1.push(this.state.newComment);
   this.setState({
   	  commentList: commentList1,
   	  newComment: ''
   })
  }

  render() {
  	return(
      <div>
      <div>{this.state.commentList}</div>
      <div><input onSubmit={this.handleinputComment} placeholder="..." value={this.state.newComment} /><span>
      </span>
      </div>
      </div>
    ); 
  }
}
export default CommentSection;