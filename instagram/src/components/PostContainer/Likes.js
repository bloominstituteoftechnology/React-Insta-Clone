import React from 'react';

let Likes = props => {
    return(
        <div>
            <div className='likes'>
                 <img alt="Like" className="like-button" src={require('./heart.png')} /> 
                <img alt="Comment" className="comment-button" src={require('./comment.png')}/> 
            </div>
            <h2 className="like-count">{props.post.likes} likes</h2>
        </div>
    )
}

export default Likes;