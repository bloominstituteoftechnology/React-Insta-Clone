import React from 'react';

function LikeSection(props) {
    return (
        <div className="Buttons">
            <img onClick={props.increaseLikes} src="https://static.thenounproject.com/png/682470-200.png" alt="" />
            <img src="https://static.thenounproject.com/png/682476-200.png" alt="" />
            <div className="Likes">{props.likes} likes</div>
        
        </div>
        
    )
}

export default LikeSection;