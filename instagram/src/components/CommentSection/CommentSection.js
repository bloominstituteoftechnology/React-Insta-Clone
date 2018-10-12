import React from "react";
import "./CommentSection.css";
import { Heart, Bookmark, Message, Share, More } from "../../assets/assets";
import PropTypes from "prop-types";
import moment from "moment";
import { CommentTextDiv, AddCommentDiv, CommentsDiv } from "../styleComponents";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { likes: null };
  }

  componentDidMount() {
    let historyObj = JSON.parse(localStorage.getItem(this.props.timestamp));
    if (historyObj.liked || historyObj.bookmarked) {
      this.setState({ ...historyObj, inputText:'' });
    } else {
      this.setState({
        ...historyObj,
        inputText: "",
        liked: false,
        bookmarked: false
      });
    }
  }

  addComment = e => {
    e.preventDefault();
    let input = this.state.inputText;
    let comments = [
      ...this.state.comments,
      { username: localStorage.getItem("user"), text: input }
    ];
    this.setState(
      {
        comments: comments,
        inputText: ""
      },
      this.updateHistory
    );
  };

  updateHistory = () => {
    let history = {
      likes: this.state.likes,
      timestamp: this.state.timestamp,
      comments: this.state.comments,
      liked: this.state.liked,
      bookmarked: this.state.bookmarked
    };
    localStorage.setItem(this.state.timestamp, JSON.stringify(history));
  };

  fillIn = e => {
    e.preventDefault();
    this.setState({ inputText: e.target.value });
  };

  likeHandler = () => {
    if (!this.state.liked) {
      this.setState(
        { liked: true, likes: this.state.likes + 1 },
        this.updateHistory
      );
    } else {
      this.setState(
        { liked: false, likes: this.state.likes - 1 },
        this.updateHistory
      );
    }
  };

  bookmarkHandler = () => {
    if (!this.state.bookmarked) {
      this.setState({ bookmarked: true },this.updateHistory);
    } else {
      this.setState({ bookmarked: false },this.updateHistory);
    }
  };

  render() {
    if (!this.state.likes) {
      return <div />;
    }
    return (
      <div>
        <div className="icon-bar">
          <div className="icons">
            <Heart likeHandler={this.likeHandler} liked={this.state.liked} />

            <Message />

            <Share />
          </div>

          <Bookmark
            bookmarked={this.state.bookmarked}
            bookmarkHandler={this.bookmarkHandler}
          />
        </div>
        <CommentTextDiv>
          <h5>{this.state.likes} likes</h5>
          <CommentsDiv>
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
          </CommentsDiv>
        </CommentTextDiv>
        <AddCommentDiv>
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
        </AddCommentDiv>
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
