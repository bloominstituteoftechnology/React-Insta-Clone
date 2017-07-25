import React ,{ Component } from 'react';

class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }
  ComponentDidMount() {
    this.setState({
      comments: this.props.comments
    });
  }

  render() {
    return ({
      <input>
      </input>
    });
  }
}

export default CommentSection;
