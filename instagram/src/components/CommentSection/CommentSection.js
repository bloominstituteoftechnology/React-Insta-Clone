import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm.js';
import Comment from './Comment.js';



class CommentsSection extends Component {
  constructor(props){
    super(props);
    this.state = {
        comments: props.comments,
        comment: ''
    };
  }

  handleCommentAdd = e =>{
      this.setState({ 
        comment: e.target.value})
  }

  handleAddNewComment = e =>{
      e.preventDefault();
      const commentsCopy = this.state.comments.slice();
      commentsCopy.push({username: "mboegner", text: this.state.comment})
      this.setState({comments: commentsCopy, comment:''})
  }

  
  
  render(){
    console.log(this.state.comment);
    return(
      <div>
        {this.state.comments.map( comment => <Comment key={comment.text} comments={comment}/>)}
        
        <CommentForm
         handleComment={this.handleCommentAdd}    
         addNewComment={this.handleAddNewComment}
            />
      </div>
    );
}
}





CommentsSection.propTypes = {
    props: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })   
};

export default CommentsSection;
