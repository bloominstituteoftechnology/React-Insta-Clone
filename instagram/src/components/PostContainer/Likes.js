import React from 'react';

const Likes = props => {
    return (
        <div className = "likes-wrapper">
            <div 
                onClick = {props.incrementHandler}
                className="social-wrapper">
                <div className="social">
                    <i className="fa fa-heart" />
                </div>
                <div className="social">
                    <i className="fa fa-comment" />
                </div>
                <div className="social">
                    <i className="fa fa-paper-plane" />
                </div>
            </div>
            <h2 className = "likes">{props.likes} likes</h2>
        </div>
    )

}

export default Likes