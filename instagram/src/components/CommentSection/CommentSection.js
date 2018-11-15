import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import { StyledCommentSection, AddCommentBar } from "../Styles";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: "",
      // liked: false,
      username: '',
      id: props.id
    };
  }

  saveStatetoLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
    console.log(this.state.data)
    console.log('saving');
  }

  componentDidMount() {
    // without removing quotes, i was getting an extra pair with every page refresh
    this.setState({ username: localStorage.getItem("username").replace(/['"]/g, '')});
    window.addEventListener(
      "beforeunload",
      this.saveStatetoLocalStorage.bind(this)
    )
  }

  // toggleLikes = e => {
  //   if (this.state.liked) {
  //   this.setState((prevState) => {
  //     return {likes: prevState.likes + 1}
  //   })
  // } else {
  //   this.setState((prevState => {
  //     return {likes: prevState.likes -1}
  //   }))
  // }
  //   this.setState({ liked: !this.setState.liked})
  // }

  changeHandler = e => {
    this.setState({ newComment: e.target.value });
  };

  addNewComment = e => {
    const updateStorage = () => {
      console.log(this.state.comments);
      let newData = JSON.parse(localStorage.getItem("data"));
      newData = newData.map(post => {
        if (post.id === this.state.id) {
          post.comments = this.state.comments;
          return post;
        } else {
          return post;
        }
      });
      localStorage.setItem("data", JSON.stringify(newData));
    };

    e.preventDefault();
    this.setState(
      {
        comments: [
          ...this.state.comments,
          {
            username: this.state.username,
            text: this.state.newComment
          }
        ],
        newComment: ""
      },
      updateStorage
    );
  };

  render() {
    return (
      <StyledCommentSection>
        {this.state.comments.map((com, idx) => (
          <Comment key={idx} comment={com} />
        ))}
        <form onSubmit={this.addNewComment}>
          <AddCommentBar
            type="text"
            name="addComment"
            placeholder="Add a comment..."
            value={this.state.newComment}
            onChange={this.changeHandler}
          />
        </form>
      </StyledCommentSection>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;
