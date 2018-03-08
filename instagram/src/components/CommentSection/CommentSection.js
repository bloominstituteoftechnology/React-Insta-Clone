import React, { Component } from 'react';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  };

  componentDidMount() {
    this.setState({ comments: this.props.comments });
  }

  render() {
    return (
        <div>
            {this.state.comments.map((comment) => {
                return <h4>hey</h4>
      })}
      </div>
    );
  }
}

export default CommentSection;