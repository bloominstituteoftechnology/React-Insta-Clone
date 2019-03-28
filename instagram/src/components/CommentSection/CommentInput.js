import React from 'react'
import './CommentSection.scss';

class CommentInput extends React.Component{
	constructor(props){
		super(props)
		this.state={
			query: ''
		}
	}
	onQueryChanged = (val)=>{
		this.setState({query: val})
	}
	
	onKeyDown = (e)=>{
		if(e.key === "Enter"){
			this.onAddComment(e)
		}
	}
	
	onAddComment = (e)=>{
		e.preventDefault();
		if(this.state.query.length === 0) return
		const val = this.state.query.trim()
		this.props.onAddComment(e, val, this.props.postId)
		this.setState({query: ''})
	}
	
	render(){
		return (
			<form className="commentInputContainer" onSubmit={(e)=> this.onAddComment(e)}>
				<input type="text"
					className="commentInput"
					placeholder="Add a comment..."
					onChange={ e => this.onQueryChanged(e.target.value)}
					onKeyDown={(e)=> this.onKeyDown(e)}
					value={this.state.query}/>
				<button type="submit" >...</button>
			</form>
		)
	}
}

export default CommentInput

