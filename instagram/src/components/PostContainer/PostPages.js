import React, { Component } from "react";

class PostPages extends Component {
	constructor() {
		super();
	}
	
	render() { 
	  return(
	  	<div >
		  <div className="postHeader">
			<img className="headerImg" alt="thumbnail" src={this.props.thumbnailUrl} />
			  <h3>{this.props.username}</h3>
		  </div>
		  <div className="imageContainer">
			  <img alt="post" src={this.props.imageUrl} className="postImg" />
		  </div>
		</div>
	  )
	}
	
}

export default PostPages;