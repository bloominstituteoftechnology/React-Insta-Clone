import React from 'react';

const CommentSection = (props) => {
    return (
        <div key={props.timestamp}>
            <div className="commentIcons">
                <img src='https://image.flaticon.com/icons/svg/149/149217.svg' alt='likes' />
                <img src='https://image.flaticon.com/icons/svg/25/25663.svg' alt='comment icon' />
            </div>
            <div className="likes">
                <h2>{props.likes}</h2>
            </div>
        </div>
    ) 
}

export default CommentSection;