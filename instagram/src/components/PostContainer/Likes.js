import React from 'react';

let Likes = props => {
    return(
        <div>
            <div className='likes'>
                <img alt="Like" className="like" src={require('./assets/heart.png')} />
                <img alt="Comment" className="comment" src={require('./assets/comment.png')}/>
            </div>
            <h2 className="likeCount">{props.post.likes} likes</h2>
        </div>
    )
}

export default Likes;