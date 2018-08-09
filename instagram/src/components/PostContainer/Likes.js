import React from 'react';

const Likes = props => {
    return (
        <div className="likes-container">    
            <div className="icons-section">
                <div className="symbols">
                    <i className="far fa-heart" onClick={props.incrementLikes} />
                </div>
                <div className="symbols">
                    <i className="far fa-comment" />
                </div>
            </div>
            <div className="likes-number">{props.likes} Likes</div>
            
        </div>

    );


};

export default Likes;