import React from 'react';
import CommentSection from './index.js';
import PropTypes from 'prop-types';
import './index.css';


const CommentMap = props => {
    const addNewComment = (event, id, comment) => {
        event.preventDefault();
    }
    
    // addComment = (e, id, comment) => {
    // 	if (e.keyCode == 13) {
    // 		let posts = this.state.posts, ind = posts.findIndex(p => p.id === id);
    // 		posts[ind].comments.push({username: "guest", text: comment});
    // 		this.setState({posts: posts})
    // 	}
    return (
        <div>
			<div className='interactive-action-buttons'>
				<img src='https://techflourish.com/images/instagram-icon-clipart-panda-18.jpg' alt='Heart Icon' />
				<img src='https://static.thenounproject.com/png/9654-200.png' alt='Speech Bubble' />
			</div>

			<div className='likes'>
				<p>{props.userData.likes} likes</p>
			</div>
            {props.comments.map((comment) => <CommentSection comment={comment} />)}
            
            <div className='post-time'>
                <p>{props.userData.timestamp}</p>
            </div>

            <div className='comment-bar'>
                <form onSubmit={addNewComment}>
                    <input type='text' placeholder='Add a comment' />
                    <button>&#8230;</button>
                </form>
            </div>
        </div>
    )
}


CommentMap.proptypes = {
    comment: PropTypes.object.isRequired,
}

export default CommentMap;