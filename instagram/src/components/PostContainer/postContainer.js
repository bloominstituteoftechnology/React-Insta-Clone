import React from 'react'
import CommentSection from '../CommentSection/commentSection';
import like from './likeandcomment.PNG'
import './postContainer.css'

const PostContainer = props => {

    if(!props.data.length) {
        return <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    }

    return (
        <div className='masterDivContainer'>
            {props.data.map(user => {
            return <div className='containerDiv' key={user.username}>
            <h4 className='header'><img className='headerIcon' src={user.thumbnailUrl} alt='header thumbnail' />{user.username}</h4>
                <img className='image' src={user.imageUrl} alt='user post' />
                <img onClick={props.increaseLike} className='likeandcommentIcons' src={like} alt='like button' />
                <p className='likes' >{props.count} likes</p>
                <CommentSection 
                text={user.comments.map(comments => {
                    return `${comments.username}: ${comments.text}`
                })} 
                // username={user.comments.map(comments => {
                //     return comments.username
                // })} 
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


    // text={user.comments.map(comments => {
    //     return `${comments.username}: ${comments.text}`
    // })} 