import React from 'react';
import './CommentSection.css';
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.Comments,
      newComment: ""
    };
  }

changeCommentValue = event => {
   event.preventDefault();
    this.setState({ newComment: event.target.value });

  };


      render(){
	return( 
                <div>{this.state.comments.map(comment => <Comment comment={comment}/>)}
		<CommentInput CommentValue={this.changeCommentValue}  NewCommentValue={this.state.newComment}   />
		</div>
	);
}

}


CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};


export default CommentSection;
