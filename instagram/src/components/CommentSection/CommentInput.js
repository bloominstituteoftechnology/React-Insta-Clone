import React from 'react'
import './CommentSection.scss';
import styled from 'styled-components'
import {Button} from "../Styles/Reusables/Button";
import {Input} from "../Styles/Reusables/Input";

const CommentInputContainer = styled.form`
	  position: relative;
	  height: 60px;
	  padding-left:1px;
`

const CommentInputField = styled(Input)`
	width: 100%;
    height: 100%;
    font-size: 1.2rem;
    border:0;
    border-top:1px solid #999;
`

const SubmitButton = styled(Button)`
	top: 0;
    right: 0;
    position: absolute;
    width: 60px;
    height: 100%;
    margin-left: 20px;
    font-size: 1.6rem;
    font-weight: bold;
    color: #444;
    border-left:1px solid #999;
    transition:all 0.3s ease;

    &:hover{
      color:white;
      background-color:gray;
    }
`


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
			<CommentInputContainer onSubmit={(e)=> this.onAddComment(e)}>
				<CommentInputField type="text"
					placeholder="Add a comment..."
					onChange={ e => this.onQueryChanged(e.target.value)}
					onKeyDown={(e)=> this.onKeyDown(e)}
					value={this.state.query}/>
				<SubmitButton>...</SubmitButton>
			</CommentInputContainer>
		)
	}
}

export default CommentInput

