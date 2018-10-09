import React from 'react'
import CommentSection from '../CommentSection/commentSection';
import like from './likeandcomment.PNG'
import './postContainer.css'

const PostContainer = props => {

    if(!props.data.length) {
        return <div class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>
    }

    return (
        <div className='masterDivContainer'>
            {props.data.map(user => {
            return <div 
            className='containerDiv'>
            <h4 className='header'><img className='headerIcon' src={user.thumbnailUrl} alt='header thumbnail' />{user.username}</h4>
                <img className='image' src={user.imageUrl} alt='user post' />
                <img className='likeandcommentIcons' src={like} alt='like button' />
                <CommentSection 
                text={user.comments.map(comments => {
                    return comments.text
                })} 
                username={user.comments.map(comments => {
                    return comments.username
                })} 
                newComment={user.newComment}
                changeHandler={user.changeHandler}
                newInput={user.newInput}
                />
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


    // <CommentSection comments={props.data.map(user => {
    //     return JSON.stringify(user.comments); })} />

    //<CommentSection comments={JSON.stringify(user.comments)} />