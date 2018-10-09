import React from "react";
import PropTypes from "prop-types";
import CommentContent from "./CommentContent";
import AddComment from "../CommentSection/AddComment";

class CommentSection extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        comments: props.comments,
        posts: props.post,
        newComment: ""
    };
  }

  addNewComment = event => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        { username: "AndyM",
          text: this.state.newComment,
        }
      ],
      newComment: ""
    });
  }

  textInputHandler = event => {
      this.setState({ [event.target.name]: event.target.value });
      console.log(event.target.value);
  }
    
    render(){
        return (
            <div>
                <CommentContent 
                comments={this.state.comments}
                />
                <AddComment 
                post={this.state.posts}
                newComment={this.state.newComment}
                addNewComment={this.addNewComment}
                textInputHandler={this.textInputHandler} />
            </div>
        ); 
    }
}

CommentSection.propTypes = {
    comment: PropTypes.arrayOf(PropTypes.object)
  };

export default CommentSection;