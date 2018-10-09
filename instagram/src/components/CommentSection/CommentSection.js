import React from "react";
import "./CommentSection.css";
import { Heart, Bookmark, Message, Share, More } from "../../assets/assets";
import PropTypes from "prop-types";
import moment from "moment";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { likes: null, comments: null, timestamp: null,  };
  }

  componentDidMount() {
    this.setState({
      likes: this.props.post.likes,
      comments: this.props.post.comments,
      timestamp: this.props.post.timestamp,
      inputText: ''
    });
  }

  addComment = e =>{
    e.preventDefault();
    let input = this.state.inputText;
    this.setState({comments: [...this.state.comments, {username:'spammer44', text:input}], inputText:''})
  }

  fillIn = e => {
    e.preventDefault()
    this.setState({ inputText: e.target.value });
  };


  render() {
    if (!this.state.likes) {
      return <div />;
    }
    return (
      <div>
        <div className="icon-bar">
          <div className="icons">
            <Heart />

            <Message />

            <Share />
          </div>

          <Bookmark />
        </div>
        <div className="comment-text">
          <h5>{this.state.likes} likes</h5>
          <div className="comments">
            {this.state.comments.map((comment, i) => (
              <div className="comment" key={i}>
                <p>
                  <span className="commenter">{comment.username}</span>
                  {comment.text}
                </p>
              </div>
            ))}
            <div className="timestamp">
              {moment(
                this.state.timestamp,
                "MMMM Do YYYY, h:mm:ss a"
              ).fromNow()}
            </div>
          </div>
        </div>
        <div className="add-comment">
          <form className="form-holder" onSubmit={this.addComment}>
            <input
              type="text"
              className="input-comment"
              placeholder="Add a comment..."
              onChange={this.fillIn}
              value={this.state.inputText}
            />
          </form>
          <More />
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ),
    likes: PropTypes.number.isRequired
  })
};

export default CommentSection;
