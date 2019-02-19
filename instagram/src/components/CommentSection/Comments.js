import React, { Component } from 'react'

class Comments extends Component {
	constructor() {
		super()
	}
	
	render() {
		return(
		  <div>
				<span className="commentUser"><strong>{this.props.username}</strong></span>
				<span className="commentText">{this.props.text}</span>
		  </div>
		)
	}
}

export default Comments;