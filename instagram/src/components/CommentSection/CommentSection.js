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

componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } else {
      this.setComments();
    }
  }

  componenetWillUnmount() {
    this.setComments();
  }

  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };


addComment = event => {
    event.preventDefault();
    const newComment = {username: 'Indiana Jones', text: this.state.newComment };
    const comments = this.state.comments.slice();	
    comments.push(newComment);
    this.setState({ comments: comments, newComment:'', comment: '' });
   setTimeout(() => {
     this.setComments();
    }, 500);
  };


      render(){
	return( 
        <div>{this.state.comments.map(comment => <Comment key={Math.random()} comment={comment}/>)}

	 <CommentInput addComment={this.addComment} changeCommentValue={this.changeCommentValue}  newComment={this.state.newComment}   />
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
