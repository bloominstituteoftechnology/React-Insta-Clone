import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import AddComment from "./AddComment";
import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.user.comments,
      timestamp: props.user.timestamp,
      newComment: ""
    };
    // this.hydrateState = props.hydrateState;
  }

  addNewComment = (event, index) => {
    //function needs to add the comment that is on the event object to the post at the index number
    event.preventDefault();

    if (this.state.newComment !== "") {
      let newCommentList = [
        ...this.state.comments,
        {
          id: index + 1,
          username: localStorage.getItem("username"),
          text: this.state.newComment
        }
      ];

      this.setState({
        comments: newCommentList,
        newComment: ""
      });
    }
  };

  changeHandler = (key, value) => {
    //"key" here is NewComment, it and the value are pulled from the onSubmit in Comment.js
    this.setState({
      [key]: value
    });
    // saves currently typed comment in storage. uncomment when storage bug is figured out
    // localStorage.setItem(key, value);
  };

  // next methods are all related to localStorage persistence,
  // but I encountered a bug I haven't fixed yet where it will set
  // ALL posts' comments to the last post's

  // saveState() {
  //   for (let key in this.state) {
  //     localStorage.setItem(key, JSON.stringify(this.state[key]));
  //   }
  // }

  // hydrateState() {
  //   for (let key in this.state) {
  //     if (localStorage.hasOwnProperty(key)) {
  //       let value = localStorage.getItem(key);
  //       try {
  //         value = JSON.parse(value);
  //         this.setState({ [key]: value });
  //       } catch (error) {
  //         this.setState({ [key]: value });
  //       }
  //     }
  //   }
  // }

  // componentDidMount() {
  //   this.props.hydrateState();
  //   // window.addEventListener("beforeunload", this.saveState.bind(this));
  // }

  // componentWillUnmount() {
  //   // window.removeEventListener("beforeunload", this.saveState.bind(this));
  //   this.props.saveState();
  // }

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <p className="timestamp">{this.state.timestamp}</p>
        <AddComment
          addNewComment={this.addNewComment}
          changeHandler={this.changeHandler}
          newComment={this.state.newComment}
          comments={this.state.comments}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
