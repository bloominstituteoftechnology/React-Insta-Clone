import React, { Component } from 'react';
import './PostContainer.css';

class PostContainer extends Component {
	constructor() {
		super();
		this.state = {
			thumbnailURL: '',
			imageURL: ''
		};
	}

	render() {
		return(
			<div>
				<img src='' alt='Thumbnail' />
				<img src='' alt='Image' />
			</div>
		);
	}
}

export default PostContainer;