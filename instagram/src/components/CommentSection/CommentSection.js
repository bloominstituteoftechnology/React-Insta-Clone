import React, { Component } from 'react';

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  componentDidMount() {
    this.setState({comments: this.props.comments})
  }
render() {
  console.log("render commentsection",this.state.comments);
  return (
    <div className="CommentContainer">
      



    </div>
  );
}
};



export default CommentSection;