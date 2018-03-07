import React, { Component } from 'react';

class CommentSection extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "Joe Smith",
      comments: []
    }
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments
    });
  }

  render() {
    const timestamp = this.props.timestamp;

    return (
      <div className="CommentSection">
        {this.state.comments.map((comment) => {
          return (
            <div className="CommentSection__comment">
              <h3>{comment.username}</h3>
              {this.props.timestamp}
              <p>{comment.text}</p>
            </div>
          );
        })}
      </div>
    );
  } //end: render section

} // end: class CommentSection
export default CommentSection;