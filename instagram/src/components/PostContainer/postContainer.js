import React from 'react'
import CommentSection from '../CommentSection/commentSection';
import like from './likeandcomment.PNG'
import './postContainer.css'

const PostContainer = props => {
    return (
        <div className='masterDivContainer'>
            {props.data.map(user => {
            return <div 
            className='containerDiv'>
            <h4 className='header'>{user.username}</h4>
                <img className='image' src={user.imageUrl} alt='user post' />
                <img className='likeandcommentIcons' src={like} />
                <CommentSection comments={props.data.map(user => {
                return JSON.stringify(user.comments); })} />
            </div>
            })}
        </div>
    )
}

export default PostContainer;


// const PostContainer = props => {
    //     return (
    //         <div>{props.data.map(username => {
    //             return username.username;
    //         })}</div>
    //     )
    // }


    //JSON.stringify(user.comments)