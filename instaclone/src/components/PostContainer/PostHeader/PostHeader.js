import React, { Component } from 'react';
import './PostHeader.css';

class PostHeader extends Component {
	render() {
		return (
			<div className="postHeader">
				<img src={this.props.profileImage} alt={'photo'} />
				<p>{this.props.userName}</p>
			</div>
		);
	}
}

export default PostHeader;
