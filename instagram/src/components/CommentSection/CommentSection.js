import React from "react";
// import PropTypes from 'prop-types';
import "./CommentSection.css";
import Comments from "../CommentSection/Comments";
import CommentInput from "../CommentSection/CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    // let postDate = props.comment.timestamp.split(",")[0];
    // postDate = postDate.replace("th", "").split(" ")
    // postDate = postDate[1] + " " + postDate[0] + " " + postDate[2]
    // postDate = new Date(postDate).getTime();
    // let dateNow = Date.now();
    // let timeSince = Math.ceil((dateNow - postDate) / (1000 * 3600 * 24))
    super(props);

    this.state = {
      comment: props.comment,
      comments: props.comment.comments,
      imageUrl: props.comment.imageUrl,
      likes: props.comment.likes,
      filteredComments: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let arrayOfComments = this.state.comments.slice();
    arrayOfComments.push({
      username: "Frank",
      text: this.state.text
    });
    this.setState({
      comments: arrayOfComments
    });
  };

  handleInputChange = event => {
    // update the message field on state.
    this.setState({ text: event.target.value });
  };

  handleLike = () => {
    let likesTotal = this.state.likes + (this.state.liked ? -1 : 1);
    this.setState({
      likes: likesTotal,
      liked: !this.state.liked
    });
  };
  render() {
    return (
      <div className="commentDiv">
        <div className="userNameDiv">
          <img
            src={this.state.comment.thumbnailUrl}
            alt="thumbnail of username"
          />
          <h2>{this.state.comment.username}</h2>
        </div>

        <img
          src={this.state.comment.imageUrl}
          className="commentImg"
          alt="subject in post"
        />

        <div className="faPostDiv">
          <i className="fa fa-heart-o" onClick={this.handleLike} />
          <i className="fa fa-comment-o fa-flip-horizontal" />
        </div>
        <h4>{this.state.likes} likes</h4>
        <div className="listOfCommentsDiv">
          {this.state.comments.map(comment => <Comments comment={comment} />)}
        </div>
        <h4 className="timeStamp">{this.state.comment.timestamp} DAYS AGO</h4>
        <CommentInput
          handleSubmit={this.handleSubmit}
          comments={this.state.comment.comments}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

// CommentSection.propTypes = {
//   comment: PropTypes.arrayOf(
//     PropTypes.shape({ comments: PropTypes.string, username: PropTypes.string })
//   )
// };

export default CommentSection;
