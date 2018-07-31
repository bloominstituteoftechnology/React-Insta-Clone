import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm.js';


class CommentsSection extends Component {
  constructor(props){
    super(props);
    this.state = {
        comments: props.comments
    }

  }
  
  addNewComment(event, index){

  }

  render(){
    return(
      <div>
        <div>{this.state.username}</div>
        <div>{this.state.text}</div>
        <CommentForm 
           addNewComment={this.addNewComment}/>
      </div>
    );
}
};





CommentsSection.propTypes = {
    props: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })   
};

export default CommentsSection;
