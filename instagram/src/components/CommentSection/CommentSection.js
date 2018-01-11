import React, { Component } from 'react';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.setState({

    });
  }

  render() {
    return (

      <div>
      {/*{console.log(this.state)}*/}
        <input>
        </input>
        {this.state.comments}
      </div>
    );
  };
}

export default CommentSection;