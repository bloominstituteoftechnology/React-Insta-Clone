import React, {Component} from 'react';

export default class CommentSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: {},
      comments: [],
		};
	}

  componentDidMount() {
    this.setState({post: this.props.post, comments: this.props.post.comments});
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <div>{this.state.post.username}</div>
        <div>{this.state.post.imageUrl}</div>
        <div>{this.state.post.likes}</div>
        <div>{this.props.post.comments.map((comment, index) => {
          return <div key={index}>{comment.username}{comment.text}</div>
          })}</div>
    </div>
    )
  }

};