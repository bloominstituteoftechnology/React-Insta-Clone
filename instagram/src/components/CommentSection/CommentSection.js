import React from "react";
import PropTypes from "prop-types";
import LikesComponent from "./Likes"
import CommentContent from "./CommentContent";
import AddComment from "../CommentSection/AddComment";

class CommentSection extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        comments: [],
        posts: [],
        newComment: ""
    };
  }

  componentDidMount() {
    this.setState({
        comments: this.props.post.comments,
        posts: this.props.post,
    });
  }

  addNewComment = event => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        { username: localStorage.getItem("username"),
          text: this.state.newComment,
        }
      ],
      newComment: ""
    });
  }

  textInputHandler = event => {
      this.setState({ [event.target.name]: event.target.value });
  }

  addLikes = event => {
    event.preventDefault();
    this.setState({
        likes: this.props.post.likes += 1
      })
    }
  
    
    render(){
        return (
            <div>
                <LikesComponent
                post={this.state.posts}
                addLikes={this.addLikes}
                />
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