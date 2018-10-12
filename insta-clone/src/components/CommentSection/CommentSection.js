import React from "react";
import Comment from './Comment'
import { CommentWrapper } from '../Styles/StylePost'
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as moment from "moment";

let now = moment().fromNow();
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      images: props.image,
      likes: props.likes,
      timestamp: props.timestamp,
      id: props.index,
      text: "",
      username: ''
    };
  }
// Add a like function to counter each click
  addALike = e => {
    this.setState({ likes: this.state.likes + 1 });
  };
  componentDidMount = ()=> {
    const user = localStorage.getItem('user')
    this.setState({
      username: user
    })
    // let comment = JSON.parse(localStorage.getItem('post'))
    // this.setState({
    //   comments: comment
    // })
}
  addNewComment = index => {
    const newPost = {
      username: this.state.username,
      text: this.state.text
    };

    const comments = [...this.state.comments];

    comments.push(newPost);

    this.setState({
      comments,
      text: ""
    }, () => localStorage.setItem('post', JSON.stringify(comments)));



  };

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      // Created comment section for each post
      <CommentWrapper>
        <img className="post-img" src={this.state.images} alt=" " />
        <div className="icons-likes">
          <FontAwesomeIcon icon={["far", "heart"]} onClick={this.addALike} />{" "}
          <FontAwesomeIcon icon={["far", "comment"]} />
        </div>
        <div className="section likes">{this.state.likes} likes</div>

        {/* Here I mapped the comments and passed them to a new component*/}
        {this.state.comments.map((comment, index) => {
          return (
            <Comment
              user={comment.username}
              comments={comment.text}
              key={index}
              name={this.state.timestamp}
              id={comment.index}
            />
          );
        })}

        {/* The footer of each post will have a time associated with the */}
        <p>{now}</p>
        <form
          className="form-comment"
          onSubmit={e => { e.preventDefault(); this.addNewComment();}}
        >
          <FontAwesomeIcon className="more-icon" icon={["fas", "ellipsis-h"]} />
          <input
            className="add-comment"
            value={this.state.text}
            onChange={e => this.handleChange("text", e.target.value)}
            placeholder="Add comment..."
          />
        </form>
      </CommentWrapper>
    );
  }
}

// Error checking whats passed into the Comment
CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
      key: PropTypes.number
    })
  ).isRequired
};

export default CommentSection;
