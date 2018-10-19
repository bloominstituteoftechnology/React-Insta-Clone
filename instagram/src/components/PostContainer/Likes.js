import React from 'react';



const Likes = props => {
    return (
        <div className = "likes-wrapper">
            <div 
                onClick = {props.incrementHandler}
                className="social-wrapper">
                <div className="social">
                    <i className="far fa-heart fa-2x" />
                </div>
                <div className="social">
                    <i className="far fa-comment fa-2x" />
                </div>
            </div>
            <h2 className = "likes">{props.likes} likes</h2>
        </div>
    )

}

export default Likes