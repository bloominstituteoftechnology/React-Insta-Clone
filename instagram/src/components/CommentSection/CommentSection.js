import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: '',
      likes: 0,
    };
  }

  // pass saveLocalStorage down as a prop
  // when a comment is added, call it

  // saveStatetoLocalStorage() {
  //   for (let key in this.state) {
  //     console.log(key);
  //     localStorage.setItem(key, JSON.stringify(this.state[key]));
  //   }
  // }

  // hydrateStateWithLocalStorage() {
  //   for (let key in this.state) {
  //     console.log(key);
  //     if (localStorage.hasOwnProperty(key)) {
  //       let value = localStorage.getItem(key);
  //       console.log(value);

  //     try {
  //       value = JSON.parse(value);
  //       this.setState({ [key]: value });
  //     } catch (e) {
  //       this.setState({ [key]: value });
  //     }
  //   }
  // }
  // }

  increaseLikes = e => {
    this.setState((prevState) => {
      return {likes: prevState.likes + 1}
    })
  }

  changeHandler = e => {
    this.setState({ newComment: e.target.value });
  }

  addNewComment = e => {
    e.preventDefault();
    this.setState({ comments: [...this.state.comments, {
      username: 'justin',
      text: this.state.newComment}],
    newComment: '', });
  };

  // componentDidMount() {
  //   window.addEventListener(
  //     "beforeunload",
  //     this.saveStatetoLocalStorage.bind(this)
  //   );
  //     this.hydrateStateWithLocalStorage();
  // }

  // componentWillUnmount() {
  //   window.removeEventListener(
  //     "beforeunload",
  //     this.saveStatetoLocalStorage.bind(this)
  //   );
  //   this.saveStatetoLocalStorage();
  // }



  render() {
    return (
      <div className="CommentSection">
        {this.state.comments.map((com, idx) => (
          <Comment key={idx} comment={com} />
        ))}
        <form onSubmit={this.addNewComment}>
          <input type="text" 
          name="addComment" 
          placeholder="Add a comment..." 
          value={this.state.newComment}
          onChange={this.changeHandler}
          />
        </form>
      </div>
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
