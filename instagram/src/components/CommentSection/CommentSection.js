import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";
import Comment from "./Comment";
import styled from "styled-components";

const AddComment = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 0rem;
  border-top: 1px solid lightgrey;
  margin-top: 1rem;
`;


const Input = styled.input`
width:95%;
border: none;
font-size: 2rem;
`;


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      comments: props.comments,
      inputText: "",
      index: props.comments.length
    };
  }

  componentDidMount() {
    const comments = JSON.parse(localStorage.getItem("comments"));
    if (comments) {
      this.setState({ comments: comments });
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewComment = event => {
    event.preventDefault();
    if (this.state.inputText !== "") {
      let newComment = [
        ...this.state.comments,
        { text: this.state.inputText, username: "New User" }
      ];

      localStorage.setItem("comments", JSON.stringify(newComment));

      this.setState({
        comments: newComment,
        inputText: ""
      });
    }
  };

  render() {
    // console.log(this.state.comments);
    // console.log(this.state.inputText);
    // console.log(this.state.index);
    return (
      <React.Fragment>
        {this.state.comments.map(item => {
          return (
            <Comment key={`${item.username}${item.text}`} comments={item} />
          );
        })}
        <div className="time">
          <p className="time-text">{this.state.data.timestamp}</p>
        </div>

        <AddComment onSubmit={this.addNewComment}>
          <Input
            className="input-comment"
            placeholder="Add a comment..."
            type="text"
            name="inputText"
            value={this.state.inputText}
            onChange={this.handleChange}
          />
          <a href="">
            <i className="fas fa-ellipsis-h settings" />
          </a>
        </AddComment>
      </React.Fragment>
    );
  }
}

CommentSection.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default CommentSection;


{/* <React.Fragment>
        {this.state.comments.map(item => {
          return (
            <Comment key={`${item.username}${item.text}`} comments={item} />
          );
        })}
        <div className="time">
          <p className="time-text">{this.state.data.timestamp}</p>
        </div>

        <form className="add-comment" onSubmit={this.addNewComment}>
          <input
            className="input-comment"
            placeholder="Add a comment..."
            type="text"
            name="inputText"
            value={this.state.inputText}
            onChange={this.handleChange}
          />
          <a href="">
            <i className="fas fa-ellipsis-h settings" />
          </a>
        </form>
      </React.Fragment> */}