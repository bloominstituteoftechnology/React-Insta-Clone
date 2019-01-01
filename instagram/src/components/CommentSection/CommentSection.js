import React from 'react'
import Comment from './Comment.js'


class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: this.props.comments
		}
		console.log(this.props)
	}

	render() {
		return (
			<div>
				{this.state.comments.map((c,i) => 
						<Comment 
							key={i} 
							comment ={c} 
						/>
					)
				}
			</div>
		)
	}
}


export default CommentSection;