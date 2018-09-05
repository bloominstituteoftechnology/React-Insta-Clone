import React from 'react';
import Comment from './Comment.js'
import App from '../../App.js'
import PropTypes from "prop-types";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: "",
      likes: 0
    };
}
addNewComment = event => {
  event.preventDefault();
  this.setState({
    comments: [
      ...this.state.comments,
      { text: this.state.newComment, username: "anonymous" }
    ],
    newComment: ""
  });
};
handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

   render(){
return(
  <div className="CommentSection">


<CommentInput input={this.state.comments.text}
          handleChange={this.handleChange} />


  </div>


)

   }


}

export default CommentSection
