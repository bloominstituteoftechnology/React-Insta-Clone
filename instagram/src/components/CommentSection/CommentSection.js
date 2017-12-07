import React, { Component } from 'react';
import './CommentSection.css';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments || []
    });
  }

  render() {
    return (
      <div className="Post__comments">

      {
        ((this.state.comments !== null ) ? 
        (Array.from(this.state.comments).map((comment, index) => (
          <div className="Comment__item" key={index + ""}>
            <span className="Comment__username">
              {comment.username}
            </span>
            <span className="Comment__text">
              {comment.text}
            </span>
          </div>
        ))) : "" )
      }

      <input type="text" onChange={() => {console.log("CHangesd");}} placeholder="Comments" />
      </div>
    );
  }

}

export default CommentSection;