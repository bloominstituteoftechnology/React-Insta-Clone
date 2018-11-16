import React, { Fragment } from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      input: ""
    };
  }
  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };
  addNewComment = event => {
    event.preventDefault();
    // console.log('type',typeof this.state.comments, 'comment', this.state.comments);

    this.setState({
      comments: [
        ...this.state.comments,
        { username: "holybanana", text: this.state.input }
      ],
      input: ""
    });
    // const comments = this.state.comments.slice();
    // comments.push({username:'testing', text:this.state.input});
    // this.setState({
    //     comments: comments,
    //     input:''
    // })
  };
  render() {
    return (
      <Fragment>
        {this.state.comments.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
        <form action="" onSubmit={this.addNewComment}>
          <input
            type="text"
            placeholder="Add a comment..."
            value={this.state.input}
            onChange={this.handleChange}
          />
        </form>
      </Fragment>
    );
  }
}
CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
