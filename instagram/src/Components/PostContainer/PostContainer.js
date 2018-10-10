import React from 'react';
import Comment from '../CommentSection/Comment';
import './post.css';


import PropTypes from 'prop-types';


/*
username 
thumbnailUrl
imageUrl
likes
timestamp
// Comments info
comments: [
      {
        username
        text
*/

const PostContainer = (props) => {
    let hideMe = props.searchTerm !== '' ? true : false;
    if (props.username.includes(props.searchTerm)) {
        hideMe = false;
    }

    function clickHandler() {
        props.clickHandler(props.timestamp);
    }

    function addComment() {
        props.addCommentClickHandler(props.timestamp);
    }

    function clearInput(event) {
        if (event.target.value === 'Add a comment.') {
            event.target.value = '';
        }
    }

    if (hideMe) {
        return <> </>
    }
    else {
        return (
            <div className='post-container'>
                <div className='post-header'>
                    <img className='thumbnail' src={props.thumbnailUrl} alt={props.username} />
                    <p>{props.username}</p>
                </div>
                <img src={props.imageUrl} alt={props.username}/>
                <div className='likes-section'>
                    {/*Get images for the likes*/}
                    <i className="like far fa-heart fa-2x" onClick={clickHandler}></i>
                    <i className="far fa-comment fa-2x"></i>
                    <p>{props.likes}</p>
                </div>
                <>
                {props.comments.map(item => {
                    return (
                        <Comment 
                        username={item.username} 
                        text={item.text}
                        />
                    )
                })}
                </>
                <div className='add-comment-form'>
                    <input onClick={clearInput} onChange={props.commentTextOnChange} className='add-comment-text' defaultValue='Add a comment.' />
                    <button className='add-comment-button' onClick={addComment}>:</button>
                </div>
            </div>
        )
    }
}

/* PropTypes data type enforcement */
PostContainer.propTypes = {
    thumbnailUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })
    ).isRequired,
};
export default PostContainer;