import React from 'react'
import styled from 'styled-components'
import './CommentSection.scss';
import {UserName} from "../Styles/Reusables/UserName";
import {Icon} from "../Styles/Reusables/Icon";
import {Button} from "../Styles/Reusables/Button";
import {Anchor} from "../Styles/Reusables/Anchor";

const CommentListItem = styled.li`
	  position:relative;
	  margin-bottom: 8px;
	  padding-right:40px;
	  font-size: 1rem;
	  width: 100%
`
const CommentText = styled.p`
	  color: #222222;
	  display: inline-block;
	  margin: 0 20px 0 0;
	  padding: 0 6px;

	  &:hover{
	  	background-color: #bee5eb;
	  	border-radius: 4px;
	 }
`

const CloseButton = styled(Button)`
		right: 10px;
		position: absolute;
		padding: 4px 8px;
		transition: all 03s ease;
		display:none;
		&.show{
		  display: block;
		}
		i{
		  font-size: 1rem;
		}
		&:hover .commentItem &{
		  background-color:yellow;
		  border:1px solid red;
		}
`

const MoreLink = styled(Anchor)`
	background-color: #efefef;
	border-radius: 2px;
	padding: 1px 8px;
`

const onMouseOver = ()=>{
	console.log('onMouse Over')
}

const onViewMore = (e)=>{
	console.log('onViewMore:')
}

const CommentItem = (props)=>{
	const showMoreLink = ()=>{
		if(props.comment.text.length > 20){
			return <MoreLink href="#" onclick={e => onViewMore(e)}>more</MoreLink>
		}
	}

	return (
			<CommentListItem>
				<UserName>{props.comment.username}</UserName>
				<CommentText onmouseover={e => onMouseOver(e)}>{props.comment.text}</CommentText>
				{ showMoreLink()}
				<CloseButton onClick={props.onDeleteComment}>
					<Icon className="fa fa-times"/>
				</CloseButton>
			</CommentListItem>
	)
}


export default CommentItem

