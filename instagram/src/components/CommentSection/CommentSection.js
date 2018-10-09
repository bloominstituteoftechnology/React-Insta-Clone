import React from "react";
import "./CommentSection.css";
import Comment from "./Comment";
import PropTypes from "prop-types";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      dummy: "",
      likes: 0,
      likeToggle: true
    };
  }

  componentDidMount() {
    this.setState({ comments: this.props.comments, likes: this.props.likes });
  }

  changeHandler = e => {
    this.setState({ dummy: e.target.value });
    console.log(this.state.dummy);
  };

  submitHandler = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        comments: prevState.comments.concat({
          text: this.state.dummy,
          username: "Blah"
        }),
        dummy: ""
      };
    });
  };

  addLike = () => {
    if (this.state.likeToggle) {
      this.setState(prevState => {
        return {
          likes: prevState.likes+1,
          likeToggle: !prevState.likeToggle
        };
      });
    } else {
      this.setState(prevState => {
        return {
          likes: prevState.likes-1,
          likeToggle: !prevState.likeToggle
        };
      });
    }
  };

  render() {
    if (this.state.comments === []) {
      return "Howdy";
    }
    return (
      <>
        <div className="like-bar">
          <div className="like-bar-images">
            <i className="far fa-heart like-bar-far" onClick={this.addLike} />
            <i className="far fa-comment like-bar-far" />
          </div>
          <p className="">{this.state.likes} likes</p>
        </div>
        <div className="comments-container">
          {this.state.comments.map((item, index) => (
            <Comment key={index} comment={item} />
          ))}
          <p className="timestamp">{this.props.timestamp}</p>
          <form>
            <input
              onChange={this.changeHandler}
              type="text"
              placeholder="Add a comment..."
              value={this.state.dummy}
              className="comment-input"
            />
            <input
              type="submit"
              className="button"
              onClick={this.submitHandler}
            />
          </form>
        </div>
      </>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired,
  timestamp: PropTypes.string.isRequired
};

export default CommentSection;
