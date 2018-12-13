import React from 'react';
import './UserTitle.css'
import heart from '../../data/pics/heart.png'
import comment from '../../data/pics/comment.png'
import UserComments from './UserComments'

const UserTitle = props => {
	return 	(
			<div className ="user_title">
				<div className ="title" >
		  			<img className ="userImgPic" src = {props.userPic} alt ="Heart"/>
					<h4>{props.UserName}</h4>
				</div>
				<div>
					<img src={props.UserPost}/>
				</div>
				<div>
		  			<img className ="userImgPic" src = {heart} alt ="Heart"/>
		  			<img className ="userImgPic" src = {comment} alt ="Heart"/>
				</div>
				<div>
					{props.UserLikes} Likes
				</div>
			</div>
			<div>
				<UserComments/>
			</div>
		)
}

export default UserTitle;