import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm.js';


class CommentsSection extends Component {
  constructor(props){
    super(props);
    this.state = {
        comments: props.comments
    };
  }

  addNewComment(event, index){
      event.preventDefault();

        let commentsCopy = this.state.comments.slice();
        
        if(commentsCopy.indexOf() === index){
            
            commentsCopy.push({
                username: "mboegner",
                text: event.target.value
            })
        } else {return null}
        
        this.setState({comments: commentsCopy})
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
}





CommentsSection.propTypes = {
    props: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })   
};

export default CommentsSection;
