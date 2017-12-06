import React, { Component } from 'react';
import Comments from './Comments';

export default class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: ""
		}
	}

	onChange = (e) => {
		this.setState({comment: e.target.value});
	}

	onSubmit = (e) => {
		if(e.which === 13) {
			this.props.addComment(e.target.value, e.target.dataset.index);
			e.target.value = "";
		}
	}

  render() {
  	const post = this.props.postData;
  	const postDate = post.timestamp;
    return (
      <div className="post">
      	<div>
      		<div className="title">
      			<div className="user">
      				<img src={post.thumbnailUrl} alt={post.username} />
      				<h1>{post.username}</h1>
      			</div>
      		</div>
      		<div className="image">
      			<img src={post.imageUrl} alt="post" />
      		</div>
      		<div className="like-quote"></div>
      		<div className="likes">{post.likes + ' likes'}</div>
      		<Comments comments={post.comments} />
      		<div className="time">{postDate}</div>
      		<div className="add-a-comment">
      			<textarea 
      				data-index={this.props.index}
      				onChange={this.onChange}
      				onKeyDown={this.onSubmit}
      				placeholder="Comment"></textarea>
      		</div>
      	</div>
      </div>
    );
  }
}
