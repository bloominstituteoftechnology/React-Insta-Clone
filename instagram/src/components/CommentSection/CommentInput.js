import React from 'react'
import './CommentSection.scss';

class CommentInput extends React.Component{
	constructor(props){
		super(props)
		this.state={
			query: ''
		}
	}
	onQueryChanged = (e)=>{
		const val = e.trim()
		this.setState({query: val})
	}
	
	onAddComment = (e)=>{
		this.props.onAddComment(e, this.state.query, this.props.postId)
		this.setState({query: ''})
	}
	
	render(){
		return (
			<div className="commentInputContainer">
				<input type="text" className="commentInput" placeholder="Add a comment..."
					onChange={ e => this.onQueryChanged(e.target.value)}
					value={this.state.query}/>
				<button onClick={(e)=> this.onAddComment(e)} >...</button>
			</div>
		)
	}
}

export default CommentInput

